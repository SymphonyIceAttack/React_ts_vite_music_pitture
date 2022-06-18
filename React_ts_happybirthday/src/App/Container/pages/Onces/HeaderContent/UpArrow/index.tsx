import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { musicArr } from "@/App/Container/pages/Onces/HeaderContent/OnePageModel/musicArr";
import "./UpArrow.less";
import { AppDispatch, decrement, useCounterStore } from "@/store";
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
                counter > 0 ? (
                    <span
                        className="upArrow"
                        onClick={() => {
                            dispatch(decrement());
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
