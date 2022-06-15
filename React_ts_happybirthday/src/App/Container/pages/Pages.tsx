import { Route } from "./Routes";
import { useRoutes, Navigate } from "react-router-dom";
export default (
    isSmallWidth: boolean,
) => {
    const RouteArr = Route(isSmallWidth);
    return useRoutes(RouteArr);
};
