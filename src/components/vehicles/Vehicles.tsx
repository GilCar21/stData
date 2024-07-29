"use client";
import {
  FilmInterface,
  PersonsInterface,
  VehiclesInterface,
} from "@/interfaces";
import { idUrl } from "@/utils/string";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Vehicle() {
  const { typelist, id } = useParams();

  const [item, setItem] = useState<VehiclesInterface>();
  const [films, setFilms] = useState<FilmInterface[]>([]);
  const [person, setPerson] = useState<PersonsInterface[]>();

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
    const fetchFilms = async () => {
      const filmPromises = item?.films?.map((fil) =>
        fetch(fil).then((res) => res.json())
      );
      if (filmPromises) {
        const filmsData = await Promise.all(filmPromises);
        setFilms(filmsData);
      }
    };

    const fetchPiloto = async () => {
      const PilotoPromises = item?.pilots?.map((pil) =>
        fetch(pil).then((res) => res.json())
      );
      if (PilotoPromises) {
        const pilotoData = await Promise.all(PilotoPromises);
        setPerson(pilotoData);
      }
    };

    if (item?.films?.length) fetchFilms();
    if (item?.pilots?.length) fetchPiloto();
  }, [item]);

  console.log(films);
  return (
    <div className="mt-4">
      <div className="grid grid-cols-12 border-[1px] border-[#423D3D] bg-[#29292E] w-full p-6 rounded-lg">
        <div className="text-[#A7A7A7] text-base col-span-3">Nome:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.name}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">Altura:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.model}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">manufacturer:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.manufacturer}kg
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">
          cost_in_credits:
        </div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.cost_in_credits}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">length:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.length}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">
          max_atmosphering_speed:
        </div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.max_atmosphering_speed}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">crew:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.crew}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">
          cargo_capacity:
        </div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.cargo_capacity}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">passengers:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.passengers}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">consumables:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.consumables}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">
          vehicles_class:
        </div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.vehicles_class}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">films:</div>
        <div className="col-span-9">
          {films?.map((film, index) => {
            return (
              <div key={film?.title} className="inline">
                <a
                  href={`/lists/films/${idUrl(film?.url as string)}`}
                  className="text-[#00B37E] text-lg hover:underline"
                >
                  {film.title}
                </a>
                {films.length > index + 1 && (
                  <span className="text-[#A7A7A7]">, </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">Pilotos:</div>
        <div className="col-span-9">
          {person?.map((per, index) => {
            return (
              <div key={per?.name} className="inline">
                <a
                  href={`/lists/people/${idUrl(per?.url as string)}`}
                  className="text-[#00B37E] text-lg hover:underline"
                >
                  {per.name}
                </a>
                {person.length > index + 1 && (
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
