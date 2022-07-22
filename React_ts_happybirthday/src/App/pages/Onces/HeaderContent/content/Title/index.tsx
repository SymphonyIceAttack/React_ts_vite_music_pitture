import React, { useEffect, useState } from "react";
import { speechStrArr } from "@/App/pages/Onces/HeaderContent/OnePageModel/speechStr";
import "./Title.less";
import { useCounterStore } from "@/store";
import { useSelector } from "react-redux";
interface Props {}

const index: React.FC<Props> = ({}) => {
    const counter = useSelector(useCounterStore());
    const [currentStr, setCurrentStr] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        let timer: any;
        if (currentIndex < speechStrArr[counter].length) {
            timer = setTimeout(() => {
                setCurrentStr(
                    (str) => (str += speechStrArr[counter][currentIndex])
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
    }, [counter]);

    return <p className="OncesContentTitle">{currentStr}</p>;
};

export default index;
