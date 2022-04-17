import React, { useEffect } from "react";
import Title from "./Title";

import "./Pages.less";

interface Props {
    BgUrl: string;
    isloading: boolean;
    time: number;
    count: number;
}
const index: React.FC<Props> = ({ BgUrl, isloading, time, count }) => {
    return (
        <div
            className="Pages"
            style={{
                backgroundImage: ` url("${BgUrl}")`,
                boxShadow: isloading
                    ? ""
                    : `inset 0 0 10px 1000px rgb(2, 230, 215),
            0 0 5px 5px #ccc`,
            }}
        >
            <Title count={count} />
        </div>
    );
};

export default index;
