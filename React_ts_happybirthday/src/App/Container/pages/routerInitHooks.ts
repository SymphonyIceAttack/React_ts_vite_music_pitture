import { useEffect } from "react";

export const routerInitHooks = (
    setIsOn: React.Dispatch<React.SetStateAction<boolean>>
) => {
    useEffect(() => {
        let timer: any;

        timer = setTimeout(() => {
            setIsOn(true);
            clearTimeout(timer);
        }, 500);

        return () => {
            setIsOn(false);
        };
    }, []);
};
