import Onces from "@/App/Container/pages/Onces";
import Twice from "@/App/Container/pages/Twice";
import { useRoutes, Navigate } from "react-router-dom";
import "./Pages.less";
export default (isSmallWidth: boolean) =>
    useRoutes([
        {
            path: "/onces",
            element: <Onces isSmallWidth={isSmallWidth} />,
        },
        {
            path: "/twice",
            element: <Twice isSmallWidth={isSmallWidth} />,
        },

        {
            path: "/",
            element: <Navigate to="/onces" />,
        },
    ]);
