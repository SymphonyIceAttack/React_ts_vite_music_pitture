import React, { useEffect, useState } from "react";
import "./Bgfilter.less";

interface Props {
    BgUrl: string;
    isloading: boolean;
    time: number;
}

const index: React.FC<Props> = ({ BgUrl, isloading, time }) => {
    return (
        <div
            className="AppAfter"
            style={{
                backgroundImage: ` url("${BgUrl}")`,
                animation: isloading
                    ? `move ${time / 1000}s linear 1`
                    : "",
            }}
        ></div>
    );
};

export default index;
