import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.less";
import { GrPlay } from "react-icons/gr";
import { AiOutlinePause } from "react-icons/ai";
import { useCounterStore } from "@/store";
import { useSelector } from "react-redux";

interface Props {
    time: number;
    MusicUrl: string;
}
const index: React.FC<Props> = ({ time, MusicUrl }) => {
    const counter = useSelector(useCounterStore());
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        let timer: any;
        setIsPlaying(false);
        timer = setTimeout(() => {
            setIsPlaying(true);
            audioRef.current?.play();
        }, time);

        return () => {
            clearTimeout(timer);
        };
    }, [counter]);
    const audioRef = useRef<HTMLAudioElement>(null);
    return (
        <>
            {isPlaying ? (
                <span
                    className="PlayMusic"
                    onClick={() => {
                        audioRef.current?.pause();
                        setIsPlaying(false);
                    }}
                >
                    <AiOutlinePause />
                </span>
            ) : (
                <span
                    className="PlayMusic"
                    onClick={() => {
                        audioRef.current?.play();
                        setIsPlaying(true);
                    }}
                >
                    <GrPlay />
                </span>
            )}
            <audio ref={audioRef} src={MusicUrl} preload="auto" loop></audio>
        </>
    );
};

export default index;
