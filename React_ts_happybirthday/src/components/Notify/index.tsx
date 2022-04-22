import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Notify.less";

interface Props {
    str: string;
    color: string;
    isNotify: boolean;
    setIsNotify: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotifyInner = ({
    color,
    str,
    setIsNotify,
}: {
    color: string;
    str: string;
    setIsNotify: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    useEffect(() => {
        let timer: any;
        timer = setTimeout(() => {
            setSelfNotify(false);
            setTimeout(() => {
                setIsNotify(false);
            }, 1000);
        }, 1200);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const [selfNotify, setSelfNotify] = useState(true);
    return (
        <div
            className="Notify"
            style={{
                animationName: selfNotify ? "NotifyStart" : "NotifyEnd",
                color: `${color}`,
            }}
        >
            <p>{str}</p>
            <span className="Loading3Quarters">
                <AiOutlineLoading3Quarters />
            </span>
        </div>
    );
};

const index: React.FC<Props> = ({ color, str, isNotify, setIsNotify }) => {
    return (
        <>
            {isNotify ? (
                <NotifyInner
                    color={color}
                    str={str}
                    setIsNotify={setIsNotify}
                />
            ) : (
                <></>
            )}
        </>
    );
};

export default index;
