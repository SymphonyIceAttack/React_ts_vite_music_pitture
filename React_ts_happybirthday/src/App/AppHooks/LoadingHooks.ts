import { useEffect, useState, useCallback } from "react";
export const LoadingHooks = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const MouseDown = useCallback(() => {
        setIsMouseDown(true);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => {};
    }, []);

    useEffect(() => {
        window.addEventListener("mousedown", MouseDown);

        return () => {
            window.removeEventListener("mousedown", MouseDown);
        };
    }, []);

    return [isLoading, isMouseDown];
};
