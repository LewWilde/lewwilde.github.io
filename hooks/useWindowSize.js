import { useState, useEffect, useLayoutEffect } from "react";

export const useWindowSize = () => {
    const [width, setWidth] = useState(0)
    const isDesktop = width / 16 >= 70;
    const isMobile = width / 16 >= 48 && !isDesktop;
    const isTablet = width / 16 < 48;

    useLayoutEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        let timer;
        const handleResize = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setWidth(window.innerWidth)
            }, 300)
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timer);
        }
    }, []);

    return { width, isDesktop, isTablet, isMobile }
}


