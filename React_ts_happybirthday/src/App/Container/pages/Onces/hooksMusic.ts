import { useState } from "react";
import { musicArr } from "@/App/Container/pages/Onces/OnePageModel/musicArr";

export const hookMusic = (count: number) => {
    const [MusicUrl, setMusicUrl] = useState(musicArr[count]);
    const [isPlaying, setIsPlaying] = useState(true);
    const IncreMusic = () => {
        setMusicUrl(musicArr[count + 1]);
    };
    const DecreMusic = () => {
        setMusicUrl(musicArr[count - 1]);
    };

    return {MusicUrl, isPlaying, setIsPlaying,IncreMusic, DecreMusic };
};
