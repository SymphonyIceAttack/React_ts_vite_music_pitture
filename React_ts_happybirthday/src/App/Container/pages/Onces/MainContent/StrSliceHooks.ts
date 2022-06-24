import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCounterStore } from "@/store";
import { speechStrArr } from "../HeaderContent/OnePageModel/speechStr";

export const StrSliceHooks = () => {
    const pageCount = useSelector(useCounterStore());
    const [StrArr, setStrArr] = useState<string[]>([]);
    useEffect(() => {
        const EndStrArr: string[] = [];
        let str = speechStrArr[pageCount].split("");
        let i = 0;
        while (i < str.length) {
            const newArr: string[] = [];
            let j = i + 10;
            newArr.push(...str.slice(i, j));
            i += 10;
            const endStr = newArr.join("");
            EndStrArr.push(endStr);
        }

        setStrArr(EndStrArr);
    }, [pageCount]);
    return { StrArr };
};
