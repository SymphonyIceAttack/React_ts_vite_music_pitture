import React from "react";
import "./container_header.less";

interface Props {
    isSmallWidth: boolean;
}
const index: React.FC<Props> = ({ isSmallWidth }) => {
    return (
        <header
            className="container_header"
            style={{
                width: isSmallWidth ? "90vw" : "70vw",
                height: isSmallWidth ? "4.5vh" : "8vh",
            }}
        >
            欢迎来到我的网站,目前还在搭建中ing
        </header>
    );
};

export default index;
