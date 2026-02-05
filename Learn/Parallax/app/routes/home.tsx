import type { Route } from "./+types/home";
import { MobileView } from "~/views/MobileView";
import { ParallaxView } from "~/views/ParallaxView";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import IconLink from "~/components/IconLink";
import PageLayout from "~/components/PageLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exit-L" },
    { name: "description", content: "Exit-L Driving School. Service available in Taree, Forster, Tuncurry, Wingham, Mid-coast area. Contact for driving lessons." },
  ];
}


export default function Home() {
  return <PageLayout>
    <ParallaxView />
    <MobileView />
    
  </PageLayout>;
}