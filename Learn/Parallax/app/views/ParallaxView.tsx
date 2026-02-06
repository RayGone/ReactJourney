import type { FC } from "react";
import ExitL from "~/components/ExitL";
import Footer from "~/components/Footer";
import GlassCard from "~/components/GlassCard";
import Parallax from "~/components/Parallax";
import PricingPage from "./PricingPage";
import ProductPage from "./ProductPage";
import IntroSection from "./IntroSection";
import AboutInstructor from "./AboutInstructor";
import TestimonialView from "./TestimonialView";
import PageTitle from "~/components/PageTitle";
import UsefulLinksPage from "./UsefulLinksPage";
import useDeviceType from "~/hooks/useDeviceType";

export const ParallaxView: FC = () => {
  const [isIOSDevice] = useDeviceType();

  return (<div className="w-full h-full min-h-[600px] hidden md:block dark:text-white dark:bg-gray-900 scroll-smooth">
    <Parallax id='home' bgImg="/exitl.png" className="flex justify-center align-start">
      <GlassCard className="w-[75%] mt-32 p-16 flex flex-col">
        <IntroSection />
      </GlassCard>
    </Parallax>
    <Parallax id='about' bgImg="/instructor.png"  className="flex flex-col gap-1 justify-between snap-start scroll-mt-20">
      <div className="flex flex-row justify-center align-center">
        <GlassCard className="w-[80%] mt-4 p-4">
          <PageTitle title="About Your Instructor" />
        </GlassCard>
      </div>
      <AboutInstructor />
    </Parallax>
    <Parallax id="vehicle" bgImg="/exitl.png" className={"relative snap-start scroll-mt-5 "+ (!isIOSDevice ? "!h-[25%] " : "!h-[50%] " )}>
      {/* <div className="absolute w-full h-full dark:bg-gray-800/60 bg-gray-200/60">
      </div> */}
    </Parallax>
    <ProductPage />
    {!isIOSDevice && <Parallax id="vehicle" bgImg="/exitl.png" className="relative !h-[25%]">
      {/* <div className="absolute w-full h-full dark:bg-gray-800/60 bg-gray-200/60">
      </div> */}
    </Parallax>}
    <PricingPage />
    <TestimonialView />
    <UsefulLinksPage />
    <Footer />
  </div>);
}