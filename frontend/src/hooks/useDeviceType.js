import { useContext } from "react";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext";

export const useDeviceType = () => {
    const currentScreenSize = useContext(ScreenSizeContext);

    const {desktop, tablet, mobile} = currentScreenSize;
    if(desktop) return "desktop";
    if(tablet) return "tablet";
    if(mobile) return "mobile";
    return "unknown";
}