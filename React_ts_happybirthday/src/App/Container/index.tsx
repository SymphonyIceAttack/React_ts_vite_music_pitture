import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Pages from "./pages/Pages";
import Loading from "@/App/Loading";
import ContainerHeader from "./Container_header";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import RainList from "./RainList";
import "./Contaner.less";

interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    const [isOn, setIsOn] = useState("Onces");

    return (
        <div className="Container">
            <RainList />
            <ContainerHeader isSmallWidth={isSmallWidth} />
            <Suspense fallback={<Loading />}>
                <SwitchTransition mode="out-in">
                    <CSSTransition classNames="Pages" timeout={500} key={isOn}>
                        {Pages(isSmallWidth, setIsOn)}
                    </CSSTransition>
                </SwitchTransition>
            </Suspense>
        </div>
    );
};

export default index;
