import { Route } from "./Routes";
import { useRoutes, Navigate } from "react-router-dom";
export default (
    isSmallWidth: boolean,
    setIsOn: React.Dispatch<React.SetStateAction<string>>
) => {
    const RouteArr = Route(isSmallWidth, setIsOn);
    return useRoutes(RouteArr);
};
