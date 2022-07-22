import { useState, useEffect, useCallback } from "react";

export const FlexWindowHooks = (size: number) => {
    const [windowWith, setWindowWith] = useState(window.innerWidth);
    const [isSmallWidth, setIsSmallWidth] = useState(windowWith < size);
    const resize = useCallback((e: UIEvent) => {
        setWindowWith(window.innerWidth);
    }, []);
    useEffect(() => {
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    useEffect(() => {
        setIsSmallWidth(windowWith < size);
        return () => {};
    }, [windowWith]);

    return [isSmallWidth];
};
