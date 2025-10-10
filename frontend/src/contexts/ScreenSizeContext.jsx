import { useState, useEffect, createContext } from "react";

export const ScreenSizeContext = createContext();

export const ScreenSizeContextProvider = ({children}) => {
    const [responsiveness, setResponsiveness] = useState({ desktop: false, tablet: false, mobile: false });

    useEffect(() => {

        const MOBILE_MAX = 375;
        const TABLET_MAX = 768;

        const handleResize = () => {
            let width = window.innerWidth;
            switch (true){
                case(width > TABLET_MAX):
                    setResponsiveness({desktop: true, tablet: false, mobile: false});
                    break;
                case(width > MOBILE_MAX && width <= TABLET_MAX):
                    setResponsiveness({desktop: false, tablet: true, mobile: false});
                    break;
                case(width < MOBILE_MAX):
                    setResponsiveness({desktop: false, tablet: false, mobile: true});
                    break;         
            };
        };
        
        handleResize();    
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return <ScreenSizeContext.Provider value={responsiveness}>{children}</ScreenSizeContext.Provider>
};