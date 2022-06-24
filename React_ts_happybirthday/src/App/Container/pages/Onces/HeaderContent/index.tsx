import React, { useEffect, useState } from "react";
import AudioPlayer from "@/App/Container/pages/Onces/HeaderContent/AudioPlayer";
import Content from "@/App/Container/pages/Onces/HeaderContent/content";
import UpArrow from "@/App/Container/pages/Onces/HeaderContent/UpArrow";
import DownArrow from "@/App/Container/pages/Onces/HeaderContent/DownArrow";
import Bgfilter from "@/App/Container/pages/Onces/HeaderContent/Bgfilter";
import { BGhooks } from "@/App/Container/pages/Onces/HeaderContent/hookBgFilters";
import { hookMusic } from "@/App/Container/pages/Onces/HeaderContent/hooksMusic";
import style from "./HeaderContent.module.less";

interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    const [time, _setTime] = useState<number>(1500);
    const { isloading, BgUrl } = BGhooks(time);
    const { MusicUrl } = hookMusic();

    return (
        <div
            className={`${style.Onces}`}
            style={{ width: isSmallWidth ? "90vw" : "75vw" }}
        >
            <Content isloading={isloading} BgUrl={BgUrl} />
            <UpArrow isloading={isloading} />
            <AudioPlayer time={time} MusicUrl={MusicUrl} />
            <DownArrow isloading={isloading} />
            <Bgfilter BgUrl={BgUrl} isloading={isloading} time={time} />
        </div>
    );
};

export default index;
