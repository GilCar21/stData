import { SignOut } from "@/components/SignOut";

export default function Logout() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col gap-4">
      <p className="text-2xl font-bold ">
        Click no botão SignOut para sair da sua conta ou click e Volta para
        voltar a home
      </p>
      <SignOut />
      <a
        href="/"
        className="border-[1px] border-[#00B37E] text-[#00B37E] mr-2 rounded-e text-[18px] flex items-center gap-3 px-8 py-4 rounded-md"
      >
        Voltar
      </a>
    </div>
  );
}
