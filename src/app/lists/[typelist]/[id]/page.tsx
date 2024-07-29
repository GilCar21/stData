import Header from "@/components/Header";
import Item from "@/components/Item";
import Tags from "@/components/Tags";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <div className="pt-16 xl:w-[1120px] w-[90%] mx-auto">
      <Header />
      <Tags />
      <Item />
    </div>
  );
}
