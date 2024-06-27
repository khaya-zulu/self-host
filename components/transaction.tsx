"use client";

import { format } from "date-fns";

import { ArrowDownLeft, ArrowDownRight } from "@phosphor-icons/react";

import type { GetAccountInformationReturn } from "@/utils/queries";

export const Transaction = ({
  type,
  reference,
  createdAt,
}: GetAccountInformationReturn["transactions"][number]) => {
  return (
    <div className="shadow rounded-lg p-10 justify-between flex border border-slate-100">
      <div>
        <div className="text-lg">{reference}</div>
        <div className="text-slate-600 mt-1">
          {format(createdAt, "dd MMM yyy, hh:mmm")}
        </div>
      </div>
      <div>
        <div
          className={`${
            type === "WITHDRAWAL" ? "text-rose-600" : "text-green-600"
          } flex gap-2 items-center`}
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
      </div>
    </div>
  );
};
