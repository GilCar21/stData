"use client";
import { useContext, useEffect, useState } from "react";
import CardPerson from "./persons/CardPerson";
import { useParams } from "next/navigation";
import CardFilm from "./films/CardFilm";
import CardPlanet from "./planets/CardPlanet";
import CardStarsShips from "./starships/CardStarships";
import { Context } from "@/context/context";
import {
  FilmInterface,
  PersonsInterface,
  PlanetInterface,
  StarshipsInterface,
  VehiclesInterface,
} from "@/interfaces";
import Loading from "./Loading";

export default function List() {
  const { typelist } = useParams();

  const { setList, list, setCount, count } = useContext(Context);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/${typelist}`)
      .then((data) => data.json())
      .then((res) => {
        setList(res.results);
        res.count != undefined && setCount(res.count);
        setLoading(false);
      })
      .catch((err) => {
        setList([]);
      });
  }, [typelist, setList, setCount, setLoading]);

  function buscarMais() {
    setLoading(true);
    fetch(`https://swapi.dev/api/${typelist}/?page=${pagina + 1}`)
      .then((data) => data.json())
      .then((res) => {
        setList((prev: []) =>
          prev !== undefined ? [...prev, ...res.results] : [...res.results]
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log("error:" + err);
        setList([]);
      });
    setPagina((prev) => prev + 1);
  }

  return (
    <div className="mb-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 flex-wrap gap-4 mt-4">
        {loading && <Loading />}
        {typelist == "people" &&
          list?.map((person: PersonsInterface) => {
            return (
              <CardPerson
                key={person.name}
                name={person.name}
                height={person.height}
                mass={person.mass}
                gender={person.gender}
                url={person.url}
              />
            );
          })}
        {typelist == "films" &&
          list?.map((film: FilmInterface) => {
            return (
              <CardFilm
                key={film.title}
                title={film.title}
                director={film.director}
                producer={film.producer}
                episode_id={film.episode_id}
                url={film.url}
              />
            );
          })}
        {typelist == "planets" &&
          list?.map((planet: PlanetInterface) => {
            return (
              <CardPlanet
                key={planet.name}
                name={planet.name}
                orbital_period={planet.orbital_period}
                rotation_period={planet.rotation_period}
                climate={planet.climate}
                url={planet.url}
              />
            );
          })}
        {typelist == "starships" &&
          list?.map((starship: StarshipsInterface) => {
            return (
              <CardStarsShips
                key={starship.name}
                name={starship.name}
                model={starship.model}
                manufacturer={starship.manufacturer}
                cost_in_credits={starship.cost_in_credits}
                url={starship.url}
              />
            );
          })}
        {typelist == "vehicles" &&
          list?.map((vehicle: VehiclesInterface) => {
            return (
              <CardStarsShips
                key={vehicle.name}
                name={vehicle.name}
                model={vehicle.model}
                manufacturer={vehicle.manufacturer}
                cost_in_credits={vehicle.cost_in_credits}
                url={vehicle.url}
              />
            );
          })}
      </div>
      <button
        className="mx-auto mt-4  flex gap-2 items-center bg-[#00875F] px-6 py-3 rounded-[8px] text-lg font-bold text-white disabled:opacity-50"
        disabled={count / pagina <= 10}
        onClick={buscarMais}
      >
        Mais
      </button>
    </div>
  );
}
