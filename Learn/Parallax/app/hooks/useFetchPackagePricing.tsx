import { useEffect, useState } from "react";
import type { Pricing } from "..";

const useFetchPackagePricing = () => {
  const [packagePrice, setPackagePrice] = useState<Pricing[] | []>([]);
    
   useEffect(()=>{
        fetch("/pricing.json")
            .then((response)=> response.json())
            .then((json)=>{
                // console.log(json);
                setPackagePrice(json)
            })
            .catch((error) => {
                console.log(error);
                setPackagePrice([])
            })
    },[]);

    return [packagePrice, setPackagePrice];
}

export default useFetchPackagePricing;