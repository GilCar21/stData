"use client";
import { Context } from "@/context/context";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";

export default function Search() {
  const { setList, setCount } = useContext(Context);
  const [keyword, setKeyword] = useState("");
  const { typelist } = useParams();

  function busca() {
    fetch(`https://swapi.dev/api/${typelist}/?search=${keyword}`)
      .then((data) => data.json())
      .then((res) => {
        res.count != undefined && setCount(res.count);
        setList(res.results);
      })
      .catch((err) => {
        console.log("error:" + err);
        return [];
      });
  }

  return (
    <div className="flex flex-1 justify-between gap-4 mt-[48px]">
      <input
        type="text"
        placeholder="Pesquisa"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        className="text-zinc-50 bg-[#121214] placeholder:text-[#7C7C8A] placeholder:text-[16px] px-6 py-4 rounded-md flex-1"
      />
      <button
        onClick={busca}
        className="border-[1px] border-[#00B37E] text-[#00B37E] mr-2 rounded-e text-[18px] flex items-center gap-3 px-8 py-4 rounded-md"
      >
        Buscar
      </button>
    </div>
  );
}
