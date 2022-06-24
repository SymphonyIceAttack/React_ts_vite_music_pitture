import React, { useEffect, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "@/App/Loading";
interface Props {
    children: React.ReactNode;
    needLogin?: boolean;
}

const Wraper: React.FC<Props> = ({ children, needLogin }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (needLogin) {
            navigate("/onces");
        }
        return () => {};
    }, []);

    return (
        <>
            <Suspense fallback={<Loading />}>{children}</Suspense>
        </>
    );
};

export default Wraper;
