import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.less";

interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    const ActiveClass = ({ isActive }: { isActive: boolean }): string => {
        if (isActive) return "active_link";
        return "";
    };
    return (
        <div
            className="NavBar"
            style={{
                marginTop: isSmallWidth ? "1rem" : "",
                flexDirection: isSmallWidth ? "row" : `column`,
                width: isSmallWidth ? "100vw" : "8rem",
            }}
        >
            <NavLink to="/onces" className={ActiveClass}>
                Onces
            </NavLink>
            <NavLink to="/twice" className={ActiveClass}>
                Twice
            </NavLink>
            <NavLink to="/third" className={ActiveClass}>
                组件库
            </NavLink>
        </div>
    );
};

export default index;
