import { useEffect, useState } from "react";
export const LoadingHooks = () => {
    const MouseDown = () => {
        setIsMouseDown(true);
    };

    const [isLoading, setIsLoading] = useState(true);
    const [isMouseDown, setIsMouseDown] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => {};
    }, []);

    useEffect(() => {
        if (!isMouseDown) {
            window.addEventListener("mousedown", MouseDown);
        }
        return () => {
            window.removeEventListener("mousedown", MouseDown);
        };
    }, [isMouseDown]);

    return {
        isLoading,
        isMouseDown,
    };
};
