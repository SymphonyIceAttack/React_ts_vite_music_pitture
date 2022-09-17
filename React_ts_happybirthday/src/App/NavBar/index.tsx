import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Style from  "./NavBar.module.less";

interface Props {
    isSmallWidth: boolean;
}
interface ArrRouteType {
    to: string;
    name: string;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    const ArrRoute: ArrRouteType[] = [
        {
            to: "/onces",
            name: "Onces",
        },
        {
            to: "/twice",
            name: "Twice",
        },
        {
            to: "/third",
            name: "组件库",
        },
    ];
    const [NavCursorTop, setNavCursorTop] = useState(0);
    const [LinkWidth, setLinkWidth] = useState(0);
    const [LinkActiveLeft, setLinkActiveLeft] = useState(0);
    const [LinkActiveWidth, setLinkActiveWidth] = useState(0);
    const ActiveClass = ({ isActive }: { isActive: boolean }): string => {
        if (isActive) return Style["active_link"];
        return "";
    };

    const ActiveClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        const { offsetLeft, clientWidth } = e.currentTarget;
        setLinkActiveLeft(offsetLeft);
        setLinkActiveWidth(clientWidth);
    };
    const MouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const { offsetLeft, clientWidth } = e.currentTarget;
        setNavCursorTop(offsetLeft);
        setLinkWidth(clientWidth);
    };

    const MouseLeft = () => {
        setNavCursorTop(LinkActiveLeft);
        setLinkWidth(LinkActiveWidth);
    };

    useEffect(() => {
        setTimeout(() => {
            const Alinks = document.querySelectorAll("a");
            Alinks.forEach((link) => {
                if (link.className === Style['active_link']) {
                    const initTop = link.offsetLeft;
                    const initHeight = link.clientWidth;
                    setNavCursorTop(initTop);
                    setLinkActiveLeft(initTop);
                    setLinkWidth(initHeight);
                    setLinkActiveWidth(initHeight);
                }
            });
        }, 300);
    }, []);
    useEffect(() => {
        let isNext = true;
        const resize = () => {
            if (!isNext) return;
            isNext = false;
            setTimeout(() => {
                const Alinks = document.querySelectorAll("a");
                Alinks.forEach((link) => {
                    if (link.className === Style['active_link']) {
                        const initTop = link.offsetLeft;
                        const initHeight = link.clientWidth;
                        setNavCursorTop(initTop);
                        setLinkActiveLeft(initTop);
                        setLinkWidth(initHeight);
                        setLinkActiveWidth(initHeight);
                    }
                });
                isNext = true;
            }, 500);
        };

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div
            className={Style.NavBar}
            style={{
                width: isSmallWidth ? "100vw" : "100vw",
            }}
        >
            {ArrRoute.map((route) => (
                <NavLink
                    to={route.to}
                    className={ActiveClass}
                    key={route.name}
                    onMouseEnter={(e) => MouseEnter(e)}
                    onClick={(e) => ActiveClick(e)}
                    onMouseLeave={() => MouseLeft()}
                >
                    {route.name}
                </NavLink>
            ))}

            <div
                className={Style['nav_cursor']}
                style={{
                    left: NavCursorTop + "px",
                    width: LinkWidth + "px",
                }}
            ></div>
        </div>
    );
};

export default index;
