import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { imageArr } from "@/App/Container/pages/Onces/HeaderContent/OnePageModel/imageArr";
import "./DownArrow.less";
import { AppDispatch, increment, useCounterStore } from "@/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
interface Props {
    isloading: boolean;
}

const index: React.FC<Props> = ({ isloading }) => {
    const counter = useSelector(useCounterStore());
    const dispatch = useDispatch<AppDispatch>();
    return (
        <>
            {!isloading ? (
                counter < imageArr.length - 1 ? (
                    <span
                        className="downArrow"
                        onClick={() => {
                            dispatch(increment());
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
