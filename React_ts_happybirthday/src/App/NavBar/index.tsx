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
                flexDirection: isSmallWidth ? "row" : "column-reverse",
                width:isSmallWidth?"100vw":"8rem"
            }}
        >
            <NavLink to="/onces" className={ActiveClass}>
                Onces
            </NavLink>
            <NavLink to="/home" className={ActiveClass}>
                Home
            </NavLink>
        </div>
    );
};

export default index;