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
        ? `${accountNumber}`.slice(`${accountNumber}`.length)
        : "0000",
    },
  };
});

export type GetAccountInformationReturn = Awaited<
  ReturnType<typeof getAccountInformation>
>;
