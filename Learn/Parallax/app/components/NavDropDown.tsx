import { useEffect, useId } from "react";
import { Link } from "react-router";
import { scrollToElement } from "~/scripts";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
    const thisId = useId();

    function toggleDropDown(){
        document.querySelector("#"+thisId)?.classList.toggle("absolute"); 
        document.querySelector("#"+thisId)?.classList.toggle("hidden");
    }

    function handleNavClick(action: string){
        scrollToElement(action);
        toggleDropDown();
    }

    useEffect(() => { 
        const handler = (event: PointerEvent) => { 
            const target = event.target as HTMLElement | null; 
            if (!target?.closest("#"+thisId+"_btn")) { /*!target?.matches("#"+thisId+"_btn")*/
                document.querySelector("#"+thisId)?.classList.remove("absolute"); 
                document.querySelector("#"+thisId)?.classList.add("hidden");
            }; 
        } 
           
        window.addEventListener("click", handler); 
        return () => window.removeEventListener("click", handler);
    }, []);

    return (<div className="relative md:hidden p-2 select-none">
            <FontAwesomeIcon id={thisId+"_btn"} icon={faBars} className="p-2" size="2xl"
                onClick={()=>toggleDropDown()} />
            <div id={thisId} className="w-auto z-50 hidden top-10 right-5 bg-gray-200 dark:bg-gray-800 rounded shadow-md shadow-black/40">
              <ul className="flex flex-col text-2xl w-fit text-shadow-sm text-gray-800 dark:text-gray-300">
                <li className="hover:bg-gray-400/20 active:bg-gray-400/40 px-3 pt-2 pb-1 border-b-1 hover:text-blue-600" onClick={()=>handleNavClick("#home")}><Link to="#home" className="">Home</Link></li>
                <li className="hover:bg-gray-400/20 px-3 pt-2 pb-1 border-b-1 hover:text-blue-600" onClick={()=>handleNavClick("#about")}><Link to="#about" >About</Link></li>
                <li className="hover:bg-gray-400/20 px-3 pt-2 pb-1 border-b-1 hover:text-blue-600" onClick={()=>handleNavClick("#vehicle")}><Link to="#vehicle" >Vehicle</Link></li>
                <li className="hover:bg-gray-400/20 px-3 pt-2 pb-1 border-b-1 hover:text-blue-600" onClick={()=>handleNavClick("#package")}><Link to="#package" >Pricing & Packages</Link></li>
                <li className="hover:bg-gray-400/20 px-3 pt-2 pb-1 hover:text-blue-600" onClick={()=>handleNavClick("#contact")}><Link to="#contact">Contact</Link></li>
              </ul>
            </div>
          </div>);

}