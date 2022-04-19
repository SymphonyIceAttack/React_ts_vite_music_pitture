import React from "react";
import MapCharts from "@/App/Container/pages/Twice/MapCharts";
import { routerInitHooks } from "@/App/Container/pages/routerInitHooks";
import "./Twice.less";
interface Props {
    isSmallWidth: boolean;
    setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}
const index: React.FC<Props> = ({ isSmallWidth, setIsOn }) => {
    routerInitHooks(setIsOn);

    return (
        <div
            className="Twice"
            style={{ width: isSmallWidth ? "90vw" : "70vw" }}
        >
            <MapCharts isSmallWidth={isSmallWidth} />
        </div>
    );
};

export default index;
