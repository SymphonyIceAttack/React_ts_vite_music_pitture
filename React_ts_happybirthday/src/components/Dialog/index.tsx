import React, { Children } from "react";
import "./Dialog.less";

interface Props {
    isDialog: boolean;
    setIsDialog: React.Dispatch<React.SetStateAction<boolean>>;
    render: () => any;
}

const DialogInner = ({
    setIsDialog,
    render,
}: {
    setIsDialog: React.Dispatch<React.SetStateAction<boolean>>;
    render: () => any;
}) => {
    return (
        <div className="Dialog">
            <button
                onClick={() => {
                    setIsDialog(false);
                }}
            >
                关闭组件
            </button>
            {render()}
        </div>
    );
};

const index: React.FC<Props> = ({ isDialog, setIsDialog, render }) => {
    return (
        <>
            {isDialog ? (
                <DialogInner setIsDialog={setIsDialog} render={render} />
            ) : (
                <></>
            )}
        </>
    );
};

export default index;
