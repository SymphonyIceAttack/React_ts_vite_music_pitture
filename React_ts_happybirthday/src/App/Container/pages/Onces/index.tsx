import React from "react";
import HeaderContent from "./HeaderContent";
interface Props {
    isSmallWidth: boolean;
}
const index: React.FC<Props> = ({ isSmallWidth }) => {
    return (
        <div>
            <HeaderContent isSmallWidth={isSmallWidth} />
            <div style={{ height: "3vh", backgroundColor: "white" }}>todo</div>
        </div>
    );
};

export default index;
