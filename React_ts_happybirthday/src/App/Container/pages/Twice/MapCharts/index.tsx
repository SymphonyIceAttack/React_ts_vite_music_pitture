import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./MapCharts.less";

interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    const [option, setOption] = useState({
        title: {
            text: "目前前端技术栈情况",
            left: "center",
            top: "top",
            textStyle: {
                fontSize: 20,
                overflow: "break",
            },
        },
        legend: {
            top: "bottom",
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
            },
        },
        series: [
            {
                name: "Nightingale Chart",
                type: "pie",
                selectedMode: "single",
                radius: [50, 250],
                center: ["50%", "50%"],
                roseType: "area",
                itemStyle: {
                    borderRadius: 8,
                },
                label: {
                    position: isSmallWidth ? "inner" : "",
                    fontSize: 14,
                },
                data: [
                    { value: 30, name: "Vite", selected: true },
                    { value: 28, name: "Vue3" },
                    { value: 32, name: "React" },
                    { value: 30, name: "TypeScript" },
                    { value: 28, name: "Node" },
                    { value: 28, name: "JavaScript" },
                ],
            },
        ],
    });

    return (
        <div className="MapCharts">
            <ReactEcharts
                option={option}
                style={{ height: "100%", width: "100%" }}
            />
        </div>
    );
};

export default index;
