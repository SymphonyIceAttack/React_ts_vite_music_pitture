import Onces from "@/App/Container/pages/Onces";
import Twice from "@/App/Container/pages/Twice";
import Third from "@/App/Container/pages/Third";
import Wraper from "./Wraper";
import { RouteObject, Navigate } from "react-router-dom";
export const Route = (
    isSmallWidth: boolean,
    setIsOn: React.Dispatch<React.SetStateAction<string>>
): RouteObject[] => [
    {
        path: "/",
        element: <Navigate to="onces" />,
    },
    {
        path: "/onces",
        element: (
            <Wraper>
                <Onces isSmallWidth={isSmallWidth} setIsOn={setIsOn} />
            </Wraper>
        ),
    },
    {
        path: "/twice",
        element: (
            <Wraper>
                <Twice isSmallWidth={isSmallWidth} setIsOn={setIsOn} />
            </Wraper>
        ),
    },
    {
        path: "/third",
        element: (
            <Wraper>
                <Third isSmallWidth={isSmallWidth} setIsOn={setIsOn} />
            </Wraper>
        ),
    },
];
