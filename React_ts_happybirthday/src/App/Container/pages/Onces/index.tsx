import React, { useEffect, useState } from "react";
import AudioPlayer from "@/App/Container/pages/Onces/AudioPlayer";
import Content from "@/App/Container/pages/Onces/content";
import UpArrow from "@/App/Container/pages/Onces/UpArrow";
import DownArrow from "@/App/Container/pages/Onces/DownArrow";
import Bgfilter from "@/App/Container/pages/Onces/Bgfilter";
import { BGhooks } from "@/App/Container/pages/Onces/hookBgFilters";
import { hookMusic } from "@/App/Container/pages/Onces/hooksMusic";

import "./Onces.less";

interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    const [time, _setTime] = useState<number>(1500);
    const [count, _setCount] = useState<number>(0);
    const { isloading, DecrePage, IncrePage, BgUrl } = BGhooks(
        time,
        count,
        _setCount
    );
    const { MusicUrl, isPlaying, setIsPlaying, IncreMusic, DecreMusic } =
        hookMusic(count);
    return (
        <div
            className="Onces"
            style={{ width: isSmallWidth ? "90vw" : "70vw" }}
        >
            <Content isloading={isloading} count={count} BgUrl={BgUrl} />
            <UpArrow
                isloading={isloading}
                count={count}
                DecrePage={DecrePage}
                DecreMusic={DecreMusic}
            />
            <AudioPlayer
                time={time}
                count={count}
                MusicUrl={MusicUrl}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            <DownArrow
                isloading={isloading}
                count={count}
                IncrePage={IncrePage}
                IncreMusic={IncreMusic}
            />
            <Bgfilter BgUrl={BgUrl} isloading={isloading} time={time} />
        </div>
    );
};

export default index;
