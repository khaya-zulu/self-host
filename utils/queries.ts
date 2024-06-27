import { cache } from "react";

import { db } from "@/utils/prisma";

export const getAccountInformation = cache(async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      accountNumber: true,
      username: true,
      name: true,
    },
  });

  const transactions = await db.transaction.findMany({
    where: {
      createdByUsername: username,
    },
    select: {
      id: true,
      reference: true,
      createdAt: true,
      type: true,
      amount: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const currentBalance = transactions.reduce((total, currentTransaction) => {
    const amount = currentTransaction.amount;

    return currentTransaction.type === "WITHDRAWAL"
      ? total - amount
      : total + amount;
  }, 0);

  const accountNumber = user?.accountNumber;

  return {
    transactions,
    currentBalance,
    user: {
      username: user?.username,
      accountNumber: accountNumber
        ? `${accountNumber}`.slice(`${accountNumber}`.length - 4)
        : "0000",
      name: user?.name,
    },
  };
});

type Return<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

export type GetAccountInformationReturn = Return<typeof getAccountInformation>;

export const getUsers = cache(async () => {
  return db.user.findMany({ select: { username: true, name: true } });
});

export type GetUsersReturn = Return<typeof getUsers>;
