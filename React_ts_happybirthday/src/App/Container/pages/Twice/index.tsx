import React from "react";
import MapCharts from "@/App/Container/pages/Twice/MapCharts";
import "./Twice.less";
interface Props {
    isSmallWidth: boolean;
}
const index: React.FC<Props> = ({ isSmallWidth }) => {
    return (
        <div
            className="Twice"
            style={{ width: isSmallWidth ? "90vw" : "70vw" }}
        >
            <MapCharts isSmallWidth={isSmallWidth} />
            <span>todo</span>
        </div>
    );
};

export default index;
