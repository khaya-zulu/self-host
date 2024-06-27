"use client";

import {
  ArrowDownLeft,
  ArrowDownRight,
  Bank,
  PiggyBank,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto p-10">
      <div className="mb-4">
        <div>Account (**** 6064)</div>
        <div className="text-lg font-semibold">Chris Lauren</div>
      </div>

      <div className="shadow bg-white rounded-lg p-10 flex justify-between items-center mb-10 border border-slate-100">
        <div>
          <div>Current Balance</div>
          <div className="font-semibold text-2xl">
            <span className="text-slate-500">R</span> 30,000
            <span className="text-slate-500">.00</span>
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

      <div className="flex mb-4 justify-between items-center">
        <div className="text-lg font-semibold">History</div>
        <div className="flex gap-2 items-center">
          <div>Total</div>
          <div className="text-sm bg-slate-200 font-semibold px-2 rounded">
            2
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="shadow rounded-lg p-10 justify-between flex border border-slate-100">
          <div>
            <div className="text-lg">Rent</div>
            <div className="text-slate-600 mt-1">21 May 2024, 15:35</div>
          </div>
          <div>
            <div className="text-rose-600 flex gap-2 items-center">
              <div className="rounded-full p-1 bg-rose-100">
                <ArrowDownRight weight="bold" className="w-3 h-3" />
              </div>
              <span>Withdrawal</span>
            </div>
          </div>
        </div>

        <div className="shadow rounded-lg p-10 justify-between flex border border-slate-100">
          <div>
            <div className="text-lg">Birthday Present</div>
            <div className="text-slate-600 mt-1">21 May 2024, 15:35</div>
          </div>
          <div>
            <div className="text-green-600 flex gap-2 items-center">
              <div className="rounded-full p-1 bg-green-100">
                <ArrowDownLeft weight="bold" className="w-3 h-3 -scale-y-100" />
              </div>
              <span>Deposit</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
