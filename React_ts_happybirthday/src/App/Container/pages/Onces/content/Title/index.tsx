import React, { useEffect, useState } from "react";
import { speechStrArr } from "@/App/Container/pages/Onces/OnePageModel/speechStr";
import "./Title.less";

interface Props {
    count: number;
}

const index: React.FC<Props> = ({ count }) => {
    const [currentStr, setCurrentStr] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        let timer: any;
        if (currentIndex < speechStrArr[count].length) {
            timer = setTimeout(() => {
                setCurrentStr(
                    (str) => (str += speechStrArr[count][currentIndex])
                );
                setCurrentIndex((currentIndex) => (currentIndex += 1));
            }, 200);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [currentStr]);

    useEffect(() => {
        setCurrentStr("");
        setCurrentIndex(0);
        return () => {};
    }, [count]);

    return <p>{currentStr}</p>;
};

export default index;
