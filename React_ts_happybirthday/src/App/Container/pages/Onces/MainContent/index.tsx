import React, { useEffect, useState } from "react";
import BoxScrollVisable from "@/components/BoxScrollVisable";
import { StrSliceHooks } from "./StrSliceHooks";
import style from "./MainContent.module.less";
import StringBoxScroll from "./StringBoxScroll";
import srcImg from "/images/pexels-soubhagya-maharana-5245865.jpg";

const index = () => {
    const { StrArr } = StrSliceHooks();
    return (
        <div
            style={{
                minHeight: `${StrArr.length * 85}px`,
                backgroundImage: `url(${srcImg})`,
            }}
            className={style["MainContent"]}
        >
            {StrArr.map((str) => (
                <BoxScrollVisable
                    key={new Date().toString() + Math.random() * 1000}
                >
                    <StringBoxScroll str={str} />
                </BoxScrollVisable>
            ))}
        </div>
    );
};

export default index;
