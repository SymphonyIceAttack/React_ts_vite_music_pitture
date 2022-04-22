import React, { useState } from "react";
import { routerInitHooks } from "@/App/Container/pages/routerInitHooks";
import Notify from "@/components/Notify";

import "./Third.less";

interface Props {
    isSmallWidth: boolean;
    setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const index: React.FC<Props> = ({ isSmallWidth, setIsOn }) => {
    const [isNotify, setIsNotify] = useState(false);
    routerInitHooks(setIsOn);
    return (
        <div
            className="Third"
            style={{ width: isSmallWidth ? "90vw" : "70vw" }}
        >
            <button
                onClick={() => {
                    setIsNotify(true);
                }}
            >
                change
            </button>
            <Notify
                color={"red"}
                str="信息展示区"
                isNotify={isNotify}
                setIsNotify={setIsNotify}
            />
        </div>
    );
};

export default index;
