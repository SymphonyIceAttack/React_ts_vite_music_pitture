import React, { useState } from "react";
import Pages from "./pages/Pages";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import "./Contaner.less";

interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    const [isOn, setIsOn] = useState(true);
    return (
        <div className="Container">
            <SwitchTransition mode="out-in">
                <CSSTransition
                    classNames="Pages"
                    timeout={500}
                    key={isOn ? "on" : "off"}
                >
                    {Pages(isSmallWidth, setIsOn)}
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};

export default index;
