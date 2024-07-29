"use server";
import { auth } from "../../auth";
import Image from "next/image";

export default async function BtnLogin() {
  let user = undefined;
  const session = await auth();

  if (session) {
    user = session.user;
  }

  return (
    <>
      {user?.name !== undefined ? (
        <a
          href="/logout"
          className="flex gap-2 items-center bg-[#00875F] px-6 py-3 rounded-[24px] text-lg font-bold text-white"
        >
          <Image
            src="/account.svg"
            alt="account"
            width={24}
            height={24}
            className="w-6 h-auto"
          />
          {user?.name}
        </a>
      ) : (
        <a
          href="/login"
          className="flex gap-2 items-center bg-[#00875F] px-6 py-3 rounded-[24px] text-lg font-bold text-white"
        >
          <Image
            src="/account.svg"
            alt="account"
            width={24}
            height={24}
            className="w-6 h-auto"
          />
          Login
        </a>
      )}
    </>
  );
}
