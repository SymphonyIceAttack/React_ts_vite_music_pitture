import { lazy } from "react";
import Wraper from "../Wrapper";
import { RouteObject, Navigate } from "react-router-dom";
const Onces = lazy(() => import("../Onces"));
const Twice = lazy(() => import("../Twice"));
const Third = lazy(() => import("../Third"));

export const Route = (isSmallWidth: boolean): RouteObject[] => [
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
