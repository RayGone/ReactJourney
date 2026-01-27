import { useEffect, useState, type FC, type PropsWithChildren } from "react";

interface ParallaxProps{
    id: string;
    bgImg: string;
    className?: string;
}

const Parallax: FC<PropsWithChildren & ParallaxProps> = ({children, id, bgImg, className=""}) => {
    const [isIOSDevice, setIsIOSDevice] = useState(false);
    useEffect(() => {
        const isIOS = navigator.userAgent.toLocaleLowerCase().includes('mac') || navigator.userAgent.toLocaleLowerCase().includes('ipad') || navigator.userAgent.toLocaleLowerCase().includes('iphone');
        const isPrimaryPortrait = (screen.orientation.type.includes('portrait') && screen.orientation.angle==0) || (screen.orientation.type.includes('land') && screen.orientation.angle!=0)
        const isSmallDevice = (screen.height > screen.width && isPrimaryPortrait) || (screen.height < screen.width && isPrimaryPortrait)
        
        setIsIOSDevice(isIOS && isSmallDevice)        
        return () => {}
    }, [])
    
    return <div id={id} className={`w-full h-full min-h-[200px] block ${isIOSDevice ? "bg-scroll" : "bg-fixed"} bg-center bg-cover bg-no-repeat bg-origin-border ${className}`} style={{backgroundImage: `url(${bgImg})`}}>
        {children}
    </div>;
}

export default Parallax;