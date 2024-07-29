import Header from "@/components/Header";
import Tags from "@/components/Tags";
import Image from "next/image";
import capa from "../../public/sw8.jpg";

export default function Home() {
  return (
    <div className="pt-16 xl:w-[1120px] w-[90%] mx-auto pb-16">
      <Header />
      <Tags />
      <div className="flex items-center justify-center pt-6 flex-col">
        <h1 className="text-3xl font-bold mb-4">Seja bem vindo ao Star Data</h1>
        <Image
          src={capa}
          alt="aaa"
          width={100}
          height={100}
          layout="responsive"
          quality={100}
          priority
        />
        <div className="w-full grid grid-cols-3 gap-[3.33%] mt-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/sw1.jpg"
              alt="aaa"
              width={100}
              height={100}
              layout="responsive"
              quality={90}
            />
            <Image
              src="/sw5.jpg"
              alt="aaa"
              width={100}
              height={100}
              layout="responsive"
              quality={90}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/sw4.jpg"
              alt="aaa"
              width={100}
              height={100}
              layout="responsive"
              quality={90}
            />
            <Image
              src="/sw2.jpg"
              alt="aaa"
              width={100}
              height={100}
              layout="responsive"
              quality={90}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/sw6.jpg"
              alt="aaa"
              width={100}
              height={100}
              layout="responsive"
              quality={90}
            />
            <Image
              src="/sw7.jpg"
              alt="aaa"
              width={100}
              height={100}
              layout="responsive"
              quality={90}
            />
            <Image
              src="/sw3.jpg"
              alt="aaa"
              width={100}
              height={100}
              layout="responsive"
              quality={90}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
