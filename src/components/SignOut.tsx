"use client";
import { signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button
      className="border-[1px] border-[#00B37E] text-[#00B37E] mr-2 rounded-e text-[18px] flex items-center gap-3 px-8 py-4 rounded-md"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Signout
    </button>
  );
}
