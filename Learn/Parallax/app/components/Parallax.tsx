import { type FC, type PropsWithChildren } from "react";
import useDeviceType from "~/hooks/useDeviceType";

interface ParallaxProps{
    id: string;
    bgImg: string;
    className?: string;
}

const Parallax: FC<PropsWithChildren & ParallaxProps> = ({children, id, bgImg, className=""}) => {
    const [isIOSDevice] = useDeviceType();
    
    return <div id={id} className={`w-full h-full min-h-[200px] block ${isIOSDevice ? "bg-scroll" : "bg-fixed"} bg-center bg-cover bg-no-repeat bg-origin-border ${className}`} style={{backgroundImage: `url(${bgImg})`}}>
        {children}
    </div>;
}

export default Parallax;