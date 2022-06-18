import { useState, useEffect } from "react";
import { imageArr } from "@/App/Container/pages/Onces/HeaderContent/OnePageModel/imageArr";
import { useCounterStore } from "@/store";
import { useSelector } from "react-redux";

export const BGhooks = (time: number) => {
    const counter = useSelector(useCounterStore());
    const [BgUrl, setBgUrl] = useState<string>(imageArr[counter]);
    const [isloading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setBgUrl(imageArr[counter]);

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, time);
    }, [counter]);

    return { isloading, BgUrl };
};
