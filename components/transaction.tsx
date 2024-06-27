"use client";

import { format } from "date-fns";

import { ArrowDownLeft, ArrowDownRight } from "@phosphor-icons/react";

import type { GetAccountInformationReturn } from "@/utils/queries";

export const Transaction = ({
  type,
  reference,
  createdAt,
  amount,
}: GetAccountInformationReturn["transactions"][number]) => {
  const [bal, deci] = `${amount}`.split(".");
  return (
    <div className="shadow rounded-lg p-10 justify-between flex border border-slate-100">
      <div>
        <div className="text-lg">
          <span className="text-slate-700">$</span> {bal}.{deci ?? "00"}
        </div>
        <div className="text-slate-700 mt-1">{reference}</div>
      </div>
      <div className="flex-col flex justify-center">
        <div
          className={`${
            type === "WITHDRAWAL" ? "text-rose-600" : "text-green-600"
          } flex gap-2 items-center justify-end`}
        >
          <div
            className={`rounded-full p-1 ${
              type === "WITHDRAWAL" ? "bg-rose-100" : "bg-green-100"
            }`}
          >
            {type === "WITHDRAWAL" ? (
              <ArrowDownRight weight="bold" className="w-3 h-3" />
            ) : (
              <ArrowDownLeft weight="bold" className="w-3 h-3 -scale-y-100" />
            )}
          </div>
          <span>{type === "WITHDRAWAL" ? "Withdrawal" : "Deposit"}</span>
        </div>
        <div className="text-slate-700 mt-1">
          {format(createdAt, "dd MMM yyy, hh:mm")}
        </div>
      </div>
    </div>
  );
};
