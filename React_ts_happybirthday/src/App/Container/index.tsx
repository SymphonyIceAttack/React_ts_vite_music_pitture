import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import RainList from "./RainList";
import "./Contaner.less";
interface Props {
    children?: React.ReactNode;
    isSmallWidth: boolean;
    Pages: (
        isSmallWidth: boolean
    ) => React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
    > | null;
}

const index: React.FC<Props> = ({ children, isSmallWidth, Pages }) => {
    return (
        <div className="Container">
            <RainList />
            <SwitchTransition mode="out-in">
                <CSSTransition
                    classNames="Pages"
                    timeout={500}
                    key={location.pathname}
                >
                    {Pages(isSmallWidth)}
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};

export default index;
