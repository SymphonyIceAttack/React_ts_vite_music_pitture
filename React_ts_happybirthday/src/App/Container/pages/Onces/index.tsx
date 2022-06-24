import React from "react";
import HeaderContent from "./HeaderContent";
import MainContent from "./MainContent";
interface Props {
    isSmallWidth: boolean;
}
const index: React.FC<Props> = ({ isSmallWidth }) => {
    return (
        <div>
            <HeaderContent isSmallWidth={isSmallWidth} />
            <MainContent />
        </div>
    );
};

export default index;
