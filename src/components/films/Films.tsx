"use client";
import {
  FilmInterface,
  PlanetInterface,
  StarshipsInterface,
} from "@/interfaces";
import { idUrl } from "@/utils/string";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Films() {
  const { typelist, id } = useParams();

  const [item, setItem] = useState<FilmInterface>();
  const [starships, setStarships] = useState<StarshipsInterface[]>([]);
  const [planet, setPlanet] = useState<PlanetInterface[]>();

  const fetchItem = useCallback(async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/${typelist}/${id}`);
      const data = await response.json();
      setItem(data);
    } catch (err) {
      console.log("error:", err);
    } finally {
    }
  }, [typelist, id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetPromises = item?.planets?.map((pla) =>
        fetch(pla).then((res) => res.json())
      );
      if (planetPromises) {
        const planetData = await Promise.all(planetPromises);
        setPlanet(planetData);
      }
    };

    const fetchStarships = async () => {
      const starshipPromises = item?.starships?.map((sta) =>
        fetch(sta).then((res) => res.json())
      );
      if (starshipPromises) {
        const starshipsData = await Promise.all(starshipPromises);
        setStarships(starshipsData);
      }
    };

    if (item?.planets?.length) fetchPlanets();
    if (item?.starships?.length) fetchStarships();
  }, [item]);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-12 border-[1px] border-[#423D3D] bg-[#29292E] w-full p-6 rounded-lg">
        <div className="text-[#A7A7A7] text-base col-span-3">title:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.title}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">director:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.director}cm
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">edited:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.edited}kg
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">
          opening_crawl:
        </div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.opening_crawl}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">release_date:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.release_date}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">producer:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.producer}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">created:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.created}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">Planets:</div>
        <div className="col-span-9">
          {planet?.map((pla, index) => {
            return (
              <div key={pla?.name} className="inline">
                <a
                  href={`/lists/planets/${idUrl(pla?.url as string)}`}
                  className="text-[#00B37E] text-lg hover:underline"
                >
                  {pla.name}
                </a>
                {planet.length > index + 1 && (
                  <span className="text-[#A7A7A7]">, </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">Starships:</div>
        <div className="col-span-9">
          {starships?.map((starship, index) => {
            return (
              <div key={starship?.name} className="inline">
                <a
                  href={`/lists/starships/${idUrl(starship?.url as string)}`}
                  className="text-[#00B37E] text-lg hover:underline"
                >
                  {starship.name}
                </a>
                {starships.length > index + 1 && (
                  <span className="text-[#A7A7A7]">, </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <a href={`/lists/${typelist}/`} className="text-[#00B37E] text-xl  mt-4">
        voltar
      </a>
    </div>
  );
}
