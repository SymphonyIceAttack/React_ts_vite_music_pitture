import React, { useRef, useEffect } from "react";
import Title from "@/App/pages/Onces/HeaderContent/content/Title";
import { Bounce } from "./Buonce";
import "./content.less";
interface Props {
    isloading: boolean;
    BgUrl: string;
}
const index: React.FC<Props> = ({ isloading, BgUrl }) => {
    const [ContentRef] = Bounce();

    return (
        <div
            ref={ContentRef}
            className="Content"
            style={{
                display: isloading ? "none" : "",
                boxShadow: isloading ? "" : `0 0 5px 5px #ccc`,
            }}
        >
            <Title />
        </div>
    );
};

export default index;
