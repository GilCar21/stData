import Header from "@/components/Header";
import List from "@/components/List";
import Search from "@/components/Search";
import Tags from "@/components/Tags";

export default async function Lists() {
  return (
    <div className="pt-16 xl:w-[1120px] w-[90%] mx-auto">
      <Header />
      <Search />
      <Tags />
      <List />
    </div>
  );
}
