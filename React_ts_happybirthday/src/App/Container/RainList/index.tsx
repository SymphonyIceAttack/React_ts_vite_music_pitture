import React, { useState, useEffect } from "react";
import RainSingle from "./RainSingle";
type RainType = {
    id: string;
};
const index = () => {
    const [RainArr, setRainArr] = useState<RainType[]>([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (RainArr.length > 50) {
                RainArr.shift();
            }
            RainArr.push({
                id: new Date().getTime().toString(),
            });
            const newRainArr = [...RainArr];
            setRainArr(newRainArr);
        }, 100);
        return () => {
            clearTimeout(timer);
        };
    }, [RainArr]);
    return (
        <>
            {RainArr.map((rain) => {
                return (
                    <RainSingle key={rain.id} Boxwidth={5} Boxheight={150} />
                );
            })}
        </>
    );
};

export default index;
