import React from "react";
import Title from "@/App/Container/pages/Onces/content/Title";
import "./content.less";
interface Props {
    count: number;
    isloading: boolean;
    BgUrl: string;
}
const index: React.FC<Props> = ({ isloading, BgUrl, count }) => {
    return (
        <div
            className="Content"
            style={{
                display: isloading ? "none" : "",
                boxShadow: isloading ? "" : `0 0 5px 5px #ccc`,
            }}
        >
            <Title count={count} />
        </div>
    );
};

export default index;
