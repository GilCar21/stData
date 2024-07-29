"use client";

import { PersonsInterface } from "@/interfaces";
import ButtonItem from "../ButtonItem";

export default function CardPerson({
  name,
  height,
  mass,
  gender,
  url,
}: PersonsInterface) {
  return (
    <div className="grid grid-cols-3 border-[1px] border-[#423D3D] bg-[#29292E] w-full p-6 rounded-lg">
      <div className="text-[#A7A7A7] text-base ">Nome:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{name}</div>
      <div className="text-[#A7A7A7] text-base ">Altura:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{height}cm</div>
      <div className="text-[#A7A7A7] text-base ">Peso:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{mass}kg</div>
      <div className="text-[#A7A7A7] text-base ">Genero:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{gender}</div>

      <div></div>
      <ButtonItem url={url} />
    </div>
  );
}
