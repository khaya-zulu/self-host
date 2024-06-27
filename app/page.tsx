import { getUsers } from "@/utils/queries";

import { User } from "@/components/user";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="min-h-screen max-w-2xl mx-auto p-10">
      <div className="flex mb-4 justify-between items-center">
        <div className="text-lg font-semibold">Users</div>
        <div className="flex gap-2 items-center">
          <div>Total</div>
          <div className="text-sm bg-slate-200 font-semibold px-2 rounded">
            {users.length}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {users.map((u) => {
          return <User key={u.username} {...u} />;
        })}

        {users.length === 0 ? (
          <div className="p-24 border border-dashed border-slate-600 rounded-lg text-center text-slate-600">
            No Users at the moment.
          </div>
        ) : null}
      </div>
    </main>
  );
}
