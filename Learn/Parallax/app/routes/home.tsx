import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Route } from "./+types/home";
import { NavBar } from "~/components/NavBar";
import { MobileView } from "~/views/MobileView";
import { ParallaxView } from "~/views/ParallaxView";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import IconLink from "~/components/IconLink";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exit-L" },
    { name: "description", content: "Exit-L Driving School" },
  ];
}


export default function Home() {
  return <div className="w-full h-[100dvh] dark:bg-gray-900 min-w-[350px] overflow-auto">
    <NavBar />
    <ParallaxView />
    <MobileView />
    
    <div className="absolute md:hidden bottom-6 right-5">
      <IconLink link="https://wa.me/61469805899" className="p-2 bg-lime-400 rounded-full shadow-md shadow-black/40 z-50 hover:shadow-sm dark:shadow-gray-400" faIcon={faWhatsapp} faIconClass="text-green-800/80"/>
    </div>
  </div>;
}