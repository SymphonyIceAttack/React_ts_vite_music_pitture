import { useEffect, useState } from "react";
import UpArrow from "@/App/UpArrow";
import DownArrow from "@/App/DownArrow";
import Pages from "@/App/pages";
import BgFilter from "@/App/Bgfilter";
import AudioPlayer from "@/App/AudioPlayer";
import { BGhooks } from "@/App/hookBgFilters";
import { hookMusic } from "@/App/hooksMusic";

import "./App.less";

function App() {
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
        <div className="App">
            <Pages
                BgUrl={BgUrl}
                isloading={isloading}
                time={time}
                count={count}
            />
            <UpArrow
                isloading={isloading}
                count={count}
                DecrePage={DecrePage}
                DecreMusic={DecreMusic}
            />
            <AudioPlayer
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
            <BgFilter BgUrl={BgUrl} isloading={isloading} time={time} />
        </div>
    );
}

export default App;
