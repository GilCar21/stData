"use client";

import { VehiclesInterface } from "@/interfaces";
import { useParams, useRouter } from "next/navigation";
import ButtonItem from "../ButtonItem";

export default function CardVehicles({
  name,
  model,
  manufacturer,
  cost_in_credits,
  url,
}: VehiclesInterface) {
  return (
    <div className="grid grid-cols-3 gap-x-1 border-[1px] border-[#423D3D] bg-[#29292E] w-full p-6 rounded-lg">
      <div className="text-[#A7A7A7] text-base ">Nome:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{name}</div>
      <div className="text-[#A7A7A7] text-base "> Model:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{model}</div>
      <div className="text-[#A7A7A7] text-base ">Manufacturer:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{manufacturer}</div>
      <div className="text-[#A7A7A7] text-base ">Cost in credits:</div>
      <div className="col-span-2 text-[#C4C4CC] text-lg">{cost_in_credits}</div>
      <div></div>
      <ButtonItem url={url} />
    </div>
  );
}
