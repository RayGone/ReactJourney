import type { Route } from "./+types/home";
import { MobileView } from "~/views/MobileView";
import { ParallaxView } from "~/views/ParallaxView";
import PageLayout from "~/components/PageLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exit-L" },
    { name: "description", content: "Exit-L Driving School" },
  ];
}


export default function Home() {
  return <PageLayout>
    <ParallaxView />
    <MobileView />
    
  </PageLayout>;
}