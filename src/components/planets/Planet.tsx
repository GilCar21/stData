"use client";
import { FilmInterface, PersonsInterface, PlanetInterface } from "@/interfaces";
import { idUrl } from "@/utils/string";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Planet() {
  const { typelist, id } = useParams();

  const [item, setItem] = useState<PlanetInterface>();
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
    const fetchPerson = async () => {
      const personPromises = item?.residents?.map((resi) =>
        fetch(resi).then((res) => res.json())
      );
      if (personPromises) {
        const personData = await Promise.all(personPromises);
        setPerson(personData);
      }
    };

    const fetchFilms = async () => {
      const filmPromises = item?.films?.map((fil) =>
        fetch(fil).then((res) => res.json())
      );
      if (filmPromises) {
        const filmsData = await Promise.all(filmPromises);
        setFilms(filmsData);
      }
    };

    if (item?.residents?.length) fetchPerson();
    if (item?.films?.length) fetchFilms();
  }, [item]);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-12 border-[1px] border-[#423D3D] bg-[#29292E] w-full p-6 rounded-lg">
        <div className="text-[#A7A7A7] text-base col-span-3">Name:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.name}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">
          rotation_period:
        </div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.rotation_period}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">
          orbital_period:
        </div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.orbital_period}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">diameter:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.diameter}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">climate:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.climate}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">gravity:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.gravity}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">terrain:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.terrain}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">
          surface_water:
        </div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.surface_water}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">population:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.population}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">Residents:</div>
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

        <div className="text-[#A7A7A7] text-base col-span-3">Films:</div>
        <div className="col-span-9">
          {films?.map((fil, index) => {
            return (
              <div key={fil?.title} className="inline">
                <a
                  href={`/lists/films/${idUrl(fil?.url as string)}`}
                  className="text-[#00B37E] text-lg hover:underline"
                >
                  {fil.title}
                </a>
                {films.length > index + 1 && (
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
