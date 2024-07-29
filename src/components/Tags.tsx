import Tag from "./Tag";

export default function Tags() {
  return (
    <div className="flex gap-2 ">
      <Tag image={"person.svg"} name={"Persoanegem"} url="people" />
      <Tag image={"movie.svg"} name={"Filme"} url="films" />
      <Tag image={"planet.svg"} name={"Planetas"} url="planets" />
      <Tag image={"ship.svg"} name={"Naves"} url="starships" />
      <Tag image={"vehicle.svg"} name={"Veiculos"} url="vehicles" />
    </div>
  );
}
