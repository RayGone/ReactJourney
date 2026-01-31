import { useEffect, useState } from "react";
import PageTitle from "~/components/PageTitle";
import SubCard from "~/components/SubCard";
import Testimonial from "~/components/TestimonialCard";

export default ({}: {}) => {
    const [testimonial, setTestimonial] = useState<any>({error: true});
    useEffect(()=>{
        fetch("./testimonial.json")
            .then((response)=> response.json())
            .then((json)=>{
                json['error'] = false;
                // console.log(json);
                setTestimonial(json)
            })
            .catch((error) => {
                console.log(error);
                setTestimonial({error: true, msg: error})
            })
    },[]);

    return !testimonial.error && <div className="m-auto pb-10 w-[95%] lg:w-[80%] border-t-1">
        <br />
        <PageTitle title="Testimonials" />
        <br />
        <SubCard otherClass="!border-l-6 border-r-6 rounded-r-none mb-8">
            <p className="flex flex-col md:flex-row justify-between">
                <span><span className="text-3xl font-bolder pl-3">{testimonial?.success?.total}</span>/{testimonial?.success?.passed} passed</span> 
                <span><span className="text-3xl font-bolder pl-3">{((testimonial?.success?.passed/testimonial?.success?.total)*100).toPrecision(2)}%</span> success rate.</span>
                <span><span className="text-3xl font-bolder pl-3">{testimonial?.success?.first_attempt}</span> passed on first attempt.</span> 
            </p>
        </SubCard>
        <div id="testimonials" className="w-full relative p-4 bg-gray-100 dark:bg-gray-700 overflow-hidden lg:shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-0 z-10 h-full min-w-[60px] lg:min-w-[120px] bg-linear-to-r from-white via-white/40 dark:from-gray-900 dark:via-gray-900/40 to-white/0 dark:to-gray-900/0"></div>
            <div className="absolute top-0 right-0 z-10 h-full min-w-[60px] lg:min-w-[120px] bg-linear-to-l from-white via-white/40 dark:from-gray-900 dark:via-gray-900/40 to-white/0 dark:to-gray-900/0"></div>
            <div className="w-fit h-full animate-scroll flex flex-row items-center justify-start gap-3">
                {testimonial?.testimonies.map((t: any)=>{
                    return <Testimonial iconUrl="" name={t?.name} testimony={t?.testimony} rating={t?.rating} review_url={t?.url}/>
                })}
                {testimonial?.testimonies.map((t: any)=>{
                    return <Testimonial iconUrl="" name={t?.name} testimony={t?.testimony} rating={t?.rating}  review_url={t?.url}/>
                })}

            </div>
        </div>
     </div>;
}