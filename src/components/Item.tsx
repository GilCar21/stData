"use client";
import { useParams } from "next/navigation";
import Person from "./persons/Person";
import Films from "./films/Films";
import Planet from "./planets/Planet";
import Startship from "./starships/Startship";
import Vehicle from "./vehicles/Vehicles";

export default function Item() {
  const { typelist } = useParams();

  return (
    <div>
      {typelist == "people" && <Person />}
      {typelist == "films" && <Films />}
      {typelist == "planets" && <Planet />}
      {typelist == "starships" && <Startship />}
      {typelist == "vehicles" && <Vehicle />}
    </div>
  );
}
