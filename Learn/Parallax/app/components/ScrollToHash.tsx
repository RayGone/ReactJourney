import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(()=>{
        console.log(!!hash)
        if (hash) {
            // Remove the '#' and find the element
            const element = document.getElementById(hash.replace("#", ""));
            if (element) {
                console.log(element)
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // If no hash, scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, 200);
    
  }, [pathname, hash]);

  return null; // This component doesn't render anything
}