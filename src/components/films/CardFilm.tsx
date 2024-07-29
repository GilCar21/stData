"use client";

import { FilmInterface } from "@/interfaces";
import ButtonItem from "../ButtonItem";

export default function CardFilm({
  title,
  director,
  producer,
  episode_id,
  url,
}: FilmInterface) {
  return (
    <div className="grid grid-cols-3 border-[1px] border-[#423D3D] bg-[#29292E] w-full p-6 rounded-lg">
      <div className="text-[#A7A7A7] text-base ">Titulo:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{title}</div>
      <div className="text-[#A7A7A7] text-base ">Diretor:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{director}cm</div>
      <div className="text-[#A7A7A7] text-base ">Produção:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{producer}kg</div>
      <div className="text-[#A7A7A7] text-base ">episode_id:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{episode_id}</div>

      <div></div>
      <ButtonItem url={url} />
    </div>
  );
}
