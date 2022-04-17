import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { imageArr } from "@/imageArr";
import "./DownArrow.less";
interface Props {
    isloading: boolean;
    count: number;
    IncrePage: () => void;
    IncreMusic: () => void;
}

const index: React.FC<Props> = ({
    isloading,
    count,
    IncrePage,
    IncreMusic,
}) => {
    return (
        <>
            {!isloading ? (
                count < imageArr.length - 1 ? (
                    <span
                        className="downArrow"
                        onClick={() => {
                            IncrePage();
                            IncreMusic();
                        }}
                    >
                        <AiOutlineArrowDown />
                    </span>
                ) : (
                    ""
                )
            ) : (
                ""
            )}
        </>
    );
};

export default index;
