import React, { useEffect, useRef } from "react";
import "./AudioPlayer.less";
import { GrPlay } from "react-icons/gr";
import { AiOutlinePause } from "react-icons/ai";
interface Props {
    time: number;
    count: number;
    MusicUrl: string;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}
const index: React.FC<Props> = ({
    time,
    count,
    MusicUrl,
    isPlaying,
    setIsPlaying,
}) => {
    useEffect(() => {
        let timer: any;
        setIsPlaying(false);
        if (count !== 0) {
            timer = setTimeout(() => {
                setIsPlaying(true);
                audioRef.current?.play();
            }, time);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [count]);
    const audioRef = useRef<HTMLAudioElement>(null);
    return (
        <>
            {count !== 0 ? (
                isPlaying ? (
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
                )
            ) : (
                ""
            )}
            <audio ref={audioRef} src={MusicUrl} preload="auto" loop></audio>
        </>
    );
};

export default index;
