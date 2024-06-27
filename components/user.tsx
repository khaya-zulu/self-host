"use client";

import type { GetUsersReturn } from "@/utils/queries";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

export const User = ({ username, name }: GetUsersReturn[number]) => {
  return (
    <Link
      href={`/u/${username}`}
      className="shadow rounded-lg p-10 justify-between flex items-center group border border-slate-100 text-left"
    >
      <div>
        <div className="text-lg">{name}</div>
        <div className="text-slate-700 mt-1">{username}</div>
      </div>
      <div>
        <div className="bg-iris-200 p-2 rounded-full transition-transform group-hover:translate-x-2 text-iris-800">
          <ArrowRight weight="bold" />
        </div>
      </div>
    </Link>
  );
};
