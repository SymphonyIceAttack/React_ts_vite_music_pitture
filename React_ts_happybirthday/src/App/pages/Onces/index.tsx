import React from "react";
import HeaderContent from "./HeaderContent";
import MainContent from "./MainContent";
interface Props {
    isSmallWidth: boolean;
}
const index: React.FC<Props> = ({ isSmallWidth }) => {
    // 由于这个div的父元素的布局为flex，所以div的宽度不在占满一行
    // HeaderContent的宽度已经撑开了div所以，div的宽度默认就是它的宽度
    // MainContent的宽度是占满div的一行的，所以宽度也是一样的
    return (
        <div>
            <HeaderContent isSmallWidth={isSmallWidth} />
            <MainContent  isSmallWidth={isSmallWidth} />
        </div>
    );
};

export default index;
