import { redirect, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { idUrl } from "@/utils/string";

import { useSession } from "next-auth/react";

interface btnInterface {
  url: string;
}

export default function ButtonItem({ url }: btnInterface) {
  const { typelist } = useParams();
  const router = useRouter();
  const [btnActive, setBtnActive] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {}, []);

  function buscarItem() {
    if (session?.user) {
      router.push(`/lists/${typelist}/${idUrl(url)}`);
    } else {
      setBtnActive((prev) => !prev);
    }
  }

  console.log(session);
  return (
    <div>
      <button className="text-[#00B37E] text-sm  mt-2" onClick={buscarItem}>
        Saiba Mais
      </button>
      {btnActive && (
        <div className="fixed z-30 left-0 right-0 top-0 bottom-0 flex items-center justify-center">
          <div
            onClick={() => setBtnActive((prev) => !prev)}
            className="fixed z-40 left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-[#00000098]"
          />
          <div className="px-6 py-12 border-[1px] border-white max-w-[480px] rounded-lg z-50 bg-black relative">
            <button
              onClick={() => setBtnActive((prev) => !prev)}
              className="absolute right-2 top-2 px-3 py-2 bg-[#ffffff40] rounded-lg"
            >
              X
            </button>
            <p>Para mais informações faça login ou cadastre-se</p>
            <a
              className="mx-auto mt-4 w-fit  flex gap-2 items-center justify-center bg-[#00875F] px-12 py-3 rounded-[8px] text-lg font-bold text-white"
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
