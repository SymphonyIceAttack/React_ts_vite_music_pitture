import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { musicArr } from "@/musicArr";
import "./UpArrow.less";
interface Props {
    isloading: boolean;
    count: number;
    DecrePage: () => void;
    DecreMusic: () => void;
}

const index: React.FC<Props> = ({
    isloading,
    count,
    DecrePage,
    DecreMusic,
}) => {
    return (
        <>
            {!isloading ? (
                count > 0 ? (
                    <span
                        className="upArrow"
                        onClick={() => {
                            DecrePage();
                            DecreMusic();
                        }}
                    >
                        <AiOutlineArrowUp />
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
