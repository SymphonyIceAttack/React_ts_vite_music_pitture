import React, { useEffect, useRef, useState } from "react";
import style from "./RainSingle.module.less";

interface Props {
    Boxheight: number;
    Boxwidth: number;
}

const index: React.FC<Props> = ({ Boxheight, Boxwidth }) => {
    const [RandomTop, setRandomTop] = useState<number>(
        window.innerHeight * Math.random() - 200
    );
    const initTop = useRef<any>();
    initTop.current = window.innerHeight * Math.random();
    const [RandomLeft, setRandomLeft] = useState<number>(
        window.innerWidth * Math.random() * 1.2 + 200
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setRandomTop((top) => top + window.innerHeight + 200);
        }, 0);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const BoxStyle: React.CSSProperties = {
        height: Boxheight,
        width: Boxwidth,
        position: "absolute",
        top: RandomTop,
        left: RandomLeft,
        backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(22, 140, 190, 1))",
        transition: "all 5s",
    };
    return <div style={BoxStyle}></div>;
};

export default index;
