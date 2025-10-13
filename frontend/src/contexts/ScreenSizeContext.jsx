import { createContext } from "react";
import { useResponsiveness } from "../hooks/useResponsiveness";

export const ScreenSizeContext = createContext();

export const ScreenSizeContextProvider = ({children, useResponsiveHook = useResponsiveness}) => {
    const responsiveness = useResponsiveHook();
    
    return <ScreenSizeContext.Provider value={responsiveness}>{children}</ScreenSizeContext.Provider>
};