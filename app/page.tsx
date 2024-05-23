import Brands from "@/components/sections/brands";
import Continent from "@/components/sections/continent";
import Explaintation from "@/components/sections/explaintation";
import Hero from "@/components/sections/hero";
import Status from "@/components/sections/status";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex justify-center pt-[120px]">
        <Hero />
      </div>
      <div className="w-full bg-[#EDEDED] py-12 my-12">
        <Brands />
      </div>
      <div className="w-full flex justify-center ">
        <Continent />
      </div>
      <div className="relative w-full flex justify-center bg-[#EDEDED] before:contents-[''] before:absolute before:bg-white before:w-full before:h-1/2 before:top-0 before:left-0">
        <Status />
      </div>
      <div className="flex justify-center bg-[#EDEDED] py-12">
        <Explaintation />
      </div>
    </>
  );
}
