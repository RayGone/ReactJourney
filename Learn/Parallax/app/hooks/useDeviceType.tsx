import { useEffect, useState } from "react";

const useDeviceType = () => {
    const [isIOSDevice, setIsIOSDevice] = useState(false);
    useEffect(() => {
        const isIOS = navigator.userAgent.toLocaleLowerCase().includes('mac') || navigator.userAgent.toLocaleLowerCase().includes('ipad') || navigator.userAgent.toLocaleLowerCase().includes('iphone');
        const isPrimaryPortrait = (screen.orientation.type.includes('portrait') && screen.orientation.angle==0) || (screen.orientation.type.includes('land') && screen.orientation.angle!=0)
        const isSmallDevice = (screen.height > screen.width && isPrimaryPortrait) || (screen.height < screen.width && isPrimaryPortrait)
        
        setIsIOSDevice(isIOS && isSmallDevice)        
        return () => {}
    }, []);

    return [isIOSDevice, setIsIOSDevice];
}

export default useDeviceType;

