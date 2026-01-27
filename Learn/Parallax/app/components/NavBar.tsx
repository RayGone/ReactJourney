import { useState, type FC } from "react"
import { Link } from "react-router";
import Brand from "./Brand";
import NavDropDown from "./NavDropDown";

// function setIntersectionObserver(element: HTMLElement | null){
//   if(!element) return;

//   const observer = new IntersectionObserver(([entry]) => {
//     if (entry.isIntersecting) {
//       console.log('Element is visible on screen', element.id);
//     } else {
//       console.log('Element is NOT visible');
//     }
//   }, {
//     threshold: 0.2
//   });

//   observer.observe(element)
// }

// setIntersectionObserver(document.querySelector('#home'));
// setIntersectionObserver(document.querySelector('#about'));

export const NavBar: FC = () => {
    let [mode, setMode] = useState<Boolean>(localStorage.getItem('themeMode') === 'dark');

    function handleThemeChange(){
        localStorage.setItem('themeMode', localStorage.getItem('themeMode') === 'dark' ? 'light' : 'dark')
        document.body.classList.toggle('dark');
        setMode(!mode);
    }

    return  <nav id="topnav" className="w-full fixed top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-l shadow-sm dark:text-white text-black border-b-1">
        <div className="px-4 py-3 flex items-center justify-between md:justify-start">
          <Brand />

          <ul className="md:flex hidden gap-6 text-base font-medium m-auto">
            <li><Link to="#home" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="#about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="#vehicle" className="hover:text-blue-600">Vehicle</Link></li>
            <li><Link to="#package" className="hover:text-blue-600">Pricing & Packages</Link></li>
            <li><Link to="#contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>

          <div onClick={handleThemeChange} className="theme-toggle-button flex border-1 border-gray-800 dark:border-slate-500 rounded w-16 justify-center items-center">
            <svg id='light' style={{maxHeight:"42px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-8 p-1  ${mode ? '' : 'inactive'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <svg id="dark" style={{maxHeight: "42px"}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-8 p-1 ${mode ? 'inactive' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </div>

          <NavDropDown />
          
        </div>
      </nav>;
}