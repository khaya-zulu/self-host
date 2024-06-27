import { Header } from "@/components/header";
import { Transaction } from "@/components/transaction";

import { getAccountInformation } from "@/utils/queries";

export default async function UserAccount({ params }: any) {
  const info = await getAccountInformation(params.username);

  return (
    <main className="min-h-screen max-w-2xl mx-auto p-10">
      <div className="mb-4">
        <div>Account (**** {info.user.accountNumber})</div>
        <div className="text-lg font-semibold">
          {info.user.name ?? "User not found"}
        </div>
      </div>

      <Header currentBalance={info.currentBalance} />

      <div className="flex mb-4 justify-between items-center">
        <div className="text-lg font-semibold">History</div>
        <div className="flex gap-2 items-center">
          <div>Total</div>
          <div className="text-sm bg-slate-200 font-semibold px-2 rounded">
            {info.transactions.length}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {info.transactions.map((t) => {
          return <Transaction key={t.id} {...t} />;
        })}

        {info.transactions.length === 0 ? (
          <div className="p-24 border border-dashed border-slate-600 rounded-lg text-center text-slate-600">
            No Transactions at the moment.
          </div>
        ) : null}
      </div>
    </main>
  );
}
