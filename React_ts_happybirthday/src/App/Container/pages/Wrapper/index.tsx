import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
interface Props {
    children: React.ReactNode;
    needLogin?: boolean;
}

const Wraper: React.FC<Props> = ({ children, needLogin }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(pathname);
        if (needLogin) {
            navigate("/onces");
        }
        return () => {};
    }, []);

    return <>{children}</>;
};

export default Wraper;
