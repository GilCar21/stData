"use client";

import { PlanetInterface } from "@/interfaces";
import ButtonItem from "../ButtonItem";

export default function CardPlanet({
  name,
  rotation_period,
  orbital_period,
  climate,
  url,
}: PlanetInterface) {
  return (
    <div className="grid grid-cols-3 border-[1px] border-[#423D3D] bg-[#29292E] w-full p-6 rounded-lg">
      <div className="text-[#A7A7A7] text-base ">Nome:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{name}</div>
      <div className="text-[#A7A7A7] text-base "> Rotation:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{rotation_period}</div>
      <div className="text-[#A7A7A7] text-base ">Orbital:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{orbital_period}</div>
      <div className="text-[#A7A7A7] text-base ">Climate:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{climate}</div>
      <div></div>
      <ButtonItem url={url} />
    </div>
  );
}
