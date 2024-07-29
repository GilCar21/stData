"use client";
import {
  FilmInterface,
  PersonsInterface,
  PlanetInterface,
  StarshipsInterface,
} from "@/interfaces";
import { idUrl } from "@/utils/string";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Person() {
  const { typelist, id } = useParams();

  const [item, setItem] = useState<PersonsInterface>();
  const [films, setFilms] = useState<FilmInterface[]>([]);
  const [starships, setStarships] = useState<StarshipsInterface[]>([]);
  const [planet, setPlanet] = useState<PlanetInterface>();

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

  // Efeito para buscar item ao carregar o componente ou mudar de id/typelist
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

    const fetchStarships = async () => {
      const starshipPromises = item?.starships?.map((sta) =>
        fetch(sta).then((res) => res.json())
      );
      if (starshipPromises) {
        const starshipsData = await Promise.all(starshipPromises);
        setStarships(starshipsData);
      }
    };

    const fetchPlanet = async () => {
      if (item?.homeworld) {
        const response = await fetch(item.homeworld);
        const planetData = await response.json();
        setPlanet(planetData);
      }
    };

    if (item?.films?.length) fetchFilms();
    if (item?.starships?.length) fetchStarships();
    if (item?.homeworld) fetchPlanet();
  }, [item]);

  console.log(films);
  return (
    <div className="mt-4">
      <div className="grid grid-cols-12 border-[1px] border-[#423D3D] bg-[#29292E] w-full p-6 rounded-lg">
        <div className="text-[#A7A7A7] text-base col-span-3">Nome:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.name}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">Altura:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.height}cm
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">Peso:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.mass}kg</div>

        <div className="text-[#A7A7A7] text-base col-span-3">Genero:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">{item?.gender}</div>

        <div className="text-[#A7A7A7] text-base col-span-3">eye_color:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.eye_color}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">skin_color:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.skin_color}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">birth_year:</div>
        <div className="col-span-9 text-[#C4C4CC] text-lg">
          {item?.birth_year}
        </div>

        <div className="text-[#A7A7A7] text-base col-span-3">homeworld:</div>
        <div className="col-span-9 text-[#00B37E] text-lg  hover:underline">
          <a href={`/lists/planets/${idUrl(planet?.url as string)}`}>
            {planet?.name}
          </a>
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
