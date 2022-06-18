import { useState, useEffect } from "react";
import { musicArr } from "@/App/Container/pages/Onces/HeaderContent/OnePageModel/musicArr";
import { useCounterStore } from "@/store";
import { useSelector } from "react-redux";
export const hookMusic = () => {
    const counter = useSelector(useCounterStore());
    const [MusicUrl, setMusicUrl] = useState(musicArr[counter]);
    useEffect(() => {
        setMusicUrl(musicArr[counter]);
        return () => {};
    }, [counter]);

    return { MusicUrl };
};
