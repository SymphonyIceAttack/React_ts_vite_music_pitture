import React, { useEffect, useRef } from "react";
import "./AudioPlayer.less";
import { GrPlay } from "react-icons/gr";
import { AiOutlinePause } from "react-icons/ai";
interface Props {
    count: number;
    MusicUrl: string;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}
const index: React.FC<Props> = ({
    count,
    MusicUrl,
    isPlaying,
    setIsPlaying,
}) => {
    useEffect(() => {
        setTimeout(() => {
            audioRef.current?.play();
        }, 2000);
    });
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
