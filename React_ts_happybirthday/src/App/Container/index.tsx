import React from "react";
import Pages from "./pages/Pages";
import "./Contaner.less";

interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    return <div className="Container">{Pages(isSmallWidth)}</div>;
};

export default index;
