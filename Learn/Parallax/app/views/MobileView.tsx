import type { FC } from "react";
import Footer from "~/components/Footer";
import PricingPage from "./PricingPage";
import ProductPage from "./ProductPage";
import IntroSection from "./IntroSection";
import AboutInstructor from "./AboutInstructor";
import TestimonialView from "./TestimonialView";
import UsefulLinksPage from "./UsefulLinksPage";

export const MobileView: FC = () => (<div className="w-full h-[100dvh] block md:hidden dark:text-white dark:bg-gray-900">
    <div id='home' className="w-full mt-16 pb-4 flex flex-col scroll-mt-32 border-b-1 select-none">
        <img loading="lazy" src="/exitl.png" alt="car image" />
        <br />
        <div className="w-[70%] m-auto">
            <IntroSection />
        </div>
    </div>
    <div id='about' className="w-full pb-4 flex flex-col scroll-mt-20 border-b-1 select-none">
        <img loading="lazy" src="/instructor.png" alt="car image" />
        <br />
        <div className="w-[95%] m-auto">
            <AboutInstructor />
        </div>
    </div>
    <div id='vehicle' className="mt-8 scroll-mt-20 pb-4 border-b-1">
        <ProductPage />
    </div>
    <PricingPage />
    <TestimonialView />
    <UsefulLinksPage />
    <Footer />
</div>)