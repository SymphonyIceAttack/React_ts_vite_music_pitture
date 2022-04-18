import Onces from "@/App/Container/pages/Onces";
import { useRoutes, Navigate } from "react-router-dom";
export default (isSmallWidth: boolean) =>
    useRoutes([
        {
            path: "/onces",
            element: <Onces isSmallWidth={isSmallWidth} />,
        },
        {
            path: "/",
            element: <Navigate to="/onces" />,
        },
    ]);
