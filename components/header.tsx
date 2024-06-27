"use client";

import { Bank, PiggyBank } from "@phosphor-icons/react";

export const Header = ({ currentBalance }: { currentBalance: number }) => {
  const [bal, deci] = `${currentBalance}`.split(".");

  return (
    <div className="shadow bg-white rounded-lg p-10 flex justify-between items-center mb-10 border border-slate-100">
      <div>
        <div>Current Balance</div>
        <div className="font-semibold text-2xl">
          <span className="text-slate-500">R</span> {bal}
          <span className="text-slate-500">.{deci ?? "00"}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-white">
        <button className="p-1 px-4 text-sm bg-iris-800 rounded-md flex items-center gap-2">
          <Bank />
          Withdraw
        </button>
        <button className="p-1 px-4 text-sm bg-slate-800 rounded-md flex items-center gap-2">
          <PiggyBank />
          Deposit
        </button>
      </div>
    </div>
  );
};
