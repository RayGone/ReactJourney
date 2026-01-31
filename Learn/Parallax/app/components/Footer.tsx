import Brand from "./Brand";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faAddressBook } from "@fortawesome/free-regular-svg-icons";
import IconLink from "./IconLink";

const Footer = () => {
    return <footer id='contact' className="footer bg-white dark:bg-gray-900 py-4 px-5 dark:text-white border-t-2">
        <div className="flex flex-col justify-center items-between gap-4 md:flex-row md:justify-between md:items-center">
            <Brand size="1.2rem" />
            <div className="text-center text-lg">
                <p>©2023 EXIT-L Driving School.<br />All Rights Reserved.</p>
            </div>
            <div className="flex flex-col text-justify">
                <h3 className="text-lg underline font-bold">Contact Us:</h3>
                <div className="text-sm p-1">
                    <div className="py-1"><FontAwesomeIcon icon={faAddressBook} size="xl" className="dark:text-white"/>&nbsp; Contact no.:&nbsp;<a href="tel:469805899" className="dark:text-white underline text-base font-bold">+61 469805899</a></div>
                    <div className="py-1"><FontAwesomeIcon icon={faEnvelope} size="xl" className="dark:text-white"/>&nbsp;&nbsp;Email:&nbsp;<a href="mailto:exit.learn@gmail.com" className="dark:text-white underline text-base font-bold">exit.learn@gmail.com</a></div>
                </div>
                <a href="https://www.google.com/maps/place/Exit-L/@-31.9112652,152.4444136,19.87z/data=!4m15!1m8!3m7!1s0x6b75b62c9a8ed075:0x3c502bb601afdc0a!2sBurri+St,+Taree+NSW+2430,+Australia!3b1!8m2!3d-31.9110106!4d152.4439733!16s%2Fg%2F1td4dqjl!3m5!1s0x8075febeffcbf609:0x99310b0e00eea8f!8m2!3d-31.9110679!4d152.4444491!16s%2Fg%2F11vzfk7yjp?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D" 
                    target="_blank" className="p-1 underline text-shadow-xs">Burri St, Taree NSW 2430, Australia</a>
                <div className="flex flex-row justify-between">
                    <IconLink link="https://www.facebook.com/exitldrivingschool" className="p-2 bg-indigo-400 rounded-full shadow-xs hover:shadow-sm dark:shadow-gray-400" faIcon={faFacebookF} faIconClass="text-blue-800/80"/>
                    <IconLink link="https://www.instagram.com/exitldrivingschool" className="p-2 bg-rose-400 rounded-full shadow-xs hover:shadow-sm dark:shadow-gray-400" faIcon={faInstagram} faIconClass="text-red-800/80"/>
                    <IconLink link="https://wa.me/61469805899" className="p-2 bg-lime-400 rounded-full shadow-xs hover:shadow-sm dark:shadow-gray-400" faIcon={faWhatsapp} faIconClass="text-green-800/80"/>
                </div>
            </div>
        </div>
    </footer>;
}

export default Footer;