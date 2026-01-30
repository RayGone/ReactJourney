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
        <div id="testimonials" className="h-[250px] w-full p-4 overflow-hidden">
            <div className="w-fit h-full animate-scroll flex flex-row items-center justify-start gap-3">
                
                {testimonial?.testimonies.map((t: any)=>{
                    return <Testimonial iconUrl="" name={t?.name} testimony={t?.testimony} rating={t?.rating} />
                })}
                {testimonial?.testimonies.map((t: any)=>{
                    return <Testimonial iconUrl="" name={t?.name} testimony={t?.testimony} rating={t?.rating} />
                })}

            </div>
        </div>
     </div>;
}