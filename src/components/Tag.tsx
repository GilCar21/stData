"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

interface TagPros {
  name: string;
  image: string;
  url: string;
}

export default function Tag({ name, image, url }: TagPros) {
  const { typelist } = useParams();

  return (
    <a
      href={`/lists/${url}`}
      className="flex flex-1 gap-3 px-3 py-2 rounded-lg border-[1px] border-[#FFFFFF10] mt-3 min-w-36 max-w-60"
      style={{
        border: typelist === url ? "1px solid #00B37E" : "1px solid #FFFFFF10",
        color: typelist === url ? "#9FF9CC" : "#e1e1e6",
      }}
    >
      <Image
        src={"/" + image}
        alt=""
        width={16}
        height={16}
        className="text-[#9FF9CC] w-4 h-4"
      />
      <h3 className="text-sm">{name}</h3>
    </a>
  );
}
