import Image from "next/image";
import BtnLogin from "./BtnLogin";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className=" flex gap-2 items-center">
          <a href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={103}
              height={62}
              className="w-103 h-auto"
              priority
            />
          </a>
          <h1 className="font-bold text-[24px]">SWAPI</h1>
        </div>
        <BtnLogin />
      </div>
    </header>
  );
}
