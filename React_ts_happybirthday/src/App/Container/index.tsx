import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Pages from "./pages/Pages";
import Loading from "@/App/Loading";
import {
    CSSTransition,
    SwitchTransition,
} from "react-transition-group";
import RainList from "./RainList";
import "./Contaner.less";
interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    return (
        <div className="Container">
            <RainList />
            <SwitchTransition mode="out-in">
                <CSSTransition
                    classNames="Pages"
                    timeout={500}
                    key={location.pathname}
                >
                    <Suspense fallback={<Loading />}>
                        {Pages(isSmallWidth)}
                    </Suspense>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};

export default index;
