import { useState, useEffect } from "react";
import { imageArr } from "@/imageArr";

export const BGhooks = (
    time:number,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
) => {
    useEffect(() => {
        if (isloading) {
            setTimeout(() => {
                setLoading(false);
            }, time);
        }
    });

    const [BgUrl, setBgUrl] = useState<string>(imageArr[count]);
    const [isloading, setLoading] = useState<boolean>(true);

    const DecrePage = () => {
        setCount((count) => count - 1);
        setBgUrl(imageArr[count - 1]);
        setLoading(true);

        if (isloading) {
            setTimeout(() => {
                setLoading(false);
            }, time);
        }
    };

    const IncrePage = () => {
        setCount((count) => count + 1);
        setBgUrl(imageArr[count + 1]);
        setLoading(true);
        if (isloading) {
            setTimeout(() => {
                setLoading(false);
            }, time);
        }
    };

    return { isloading, count, DecrePage, IncrePage, BgUrl };
};
