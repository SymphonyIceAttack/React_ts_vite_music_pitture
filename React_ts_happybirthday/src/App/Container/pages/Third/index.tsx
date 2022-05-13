import React, { useState } from "react";
import { routerInitHooks } from "@/App/Container/pages/routerInitHooks";
import Notify from "@/components/Notify";
import Dialog from "@/components/Dialog";
import "./Third.less";

interface Props {
    isSmallWidth: boolean;
    setIsOn: React.Dispatch<React.SetStateAction<string>>;
}

const index: React.FC<Props> = ({ isSmallWidth, setIsOn }) => {
    const [isNotify, setIsNotify] = useState(false);
    const [isDialog, setIsDialog] = useState(false);
    routerInitHooks(setIsOn,"Third");
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
                通知弹窗组件
            </button>
            <button
                onClick={() => {
                    setIsDialog(true);
                }}
            >
                弹窗组件
            </button>
            <Dialog
                isDialog={isDialog}
                setIsDialog={setIsDialog}
                render={() => (
                    <div className="DialogDivtest">
                        <p>dawd</p>
                        <span>23323</span>
                    </div>
                )}
            />
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
