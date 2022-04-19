import Onces from "@/App/Container/pages/Onces";
import Twice from "@/App/Container/pages/Twice";
import { useRoutes, Navigate } from "react-router-dom";
import "./Pages.less";
export default (
    isSmallWidth: boolean,
    setIsOn: React.Dispatch<React.SetStateAction<boolean>>
) =>
    useRoutes([
        {
            path: "/onces",
            element: <Onces isSmallWidth={isSmallWidth} setIsOn={setIsOn} />,
        },
        {
            path: "/twice",
            element: <Twice isSmallWidth={isSmallWidth} setIsOn={setIsOn} />,
        },

        {
            path: "/",
            element: <Navigate to="/onces" />,
        },
    ]);
