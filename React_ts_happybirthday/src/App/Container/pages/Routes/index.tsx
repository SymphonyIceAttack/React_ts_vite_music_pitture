import Onces from "@/App/Container/pages/Onces";
import Twice from "@/App/Container/pages/Twice";
import Third from "@/App/Container/pages/Third";
import Wraper from "../Wrapper";
import { RouteObject, Navigate } from "react-router-dom";
export const Route = (
    isSmallWidth: boolean,
): RouteObject[] => [
    {
        path: "/",
        element: <Navigate to="onces" />,
    },
    {
        path: "/onces",
        element: (
            <Wraper>
                <Onces isSmallWidth={isSmallWidth} />
            </Wraper>
        ),
    },
    {
        path: "/twice",
        element: (
            <Wraper>
                <Twice isSmallWidth={isSmallWidth} />
            </Wraper>
        ),
    },
    {
        path: "/third",
        element: (
            <Wraper>
                <Third isSmallWidth={isSmallWidth} />
            </Wraper>
        ),
    },
];
