import { useEffect } from "react";

export const routerInitHooks = (
    setIsOn: React.Dispatch<React.SetStateAction<string>>,
    which: string
) => {
    useEffect(() => {
        setIsOn(which);

        return () => {
            setIsOn("");
        };
    }, []);
};
