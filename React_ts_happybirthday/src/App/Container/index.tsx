import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Pages from "./pages/Pages";
import Loading from "@/App/Loading";
import { CSSTransition, SwitchTransition,TransitionGroup } from "react-transition-group";
import RainList from "./RainList";
import "./Contaner.less";
interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    return (
        <div className="Container">
            <RainList />
            <Suspense fallback={<Loading />}>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        classNames="Pages"
                        timeout={500}
                        key={location.pathname}
                    >
                        {Pages(isSmallWidth)}
                    </CSSTransition>
                </SwitchTransition>
            </Suspense>
        </div>
    );
};

export default index;
