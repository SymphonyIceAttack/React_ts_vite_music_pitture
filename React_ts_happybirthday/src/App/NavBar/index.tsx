import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.less";

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
    const [LinkHeight, setLinkHeight] = useState(0);
    const [LinkActiveTop, setLinkActiveTop] = useState(0);
    const [LinkActiveHeight, setLinkActiveHeight] = useState(0);
    const ActiveClass = ({ isActive }: { isActive: boolean }): string => {
        if (isActive) return "active_link";
        return "";
    };

    const ActiveClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        const { offsetTop, clientHeight } = e.currentTarget;
        setLinkActiveTop(offsetTop);
        setLinkActiveHeight(clientHeight);
    };
    const MouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const { offsetTop, clientHeight } = e.currentTarget;
        setNavCursorTop(offsetTop);
        setLinkHeight(clientHeight);
    };

    const MouseLeft = () => {
        setNavCursorTop(LinkActiveTop);
        setLinkHeight(LinkActiveHeight);
    };

    useEffect(() => {
        setTimeout(() => {
            const Alinks = document.querySelectorAll("a");
            Alinks.forEach((link) => {
                if (link.className === "active_link") {
                    const initTop = link.offsetTop;
                    const initHeight = link.clientHeight;
                    setNavCursorTop(initTop);
                    setLinkActiveTop(initTop);
                    setLinkHeight(initHeight);
                    setLinkActiveHeight(initHeight);
                }
            });
        }, 500);

        return () => {};
    }, []);

    return (
        <div
            className="NavBar"
            style={{
                marginTop: isSmallWidth ? "1rem" : "",
                flexDirection: isSmallWidth ? "row" : `column`,
                width: isSmallWidth ? "100vw" : "8rem",
            }}
        >
            {ArrRoute.map((route) => (
                <NavLink
                    to={route.to}
                    className={ActiveClass}
                    key={route.name}
                    style={{ marginRight: isSmallWidth ? `0.5rem` : "" }}
                    onMouseEnter={(e) => MouseEnter(e)}
                    onClick={(e) => ActiveClick(e)}
                    onMouseLeave={() => MouseLeft()}
                >
                    {route.name}
                </NavLink>
            ))}
            {isSmallWidth ? (
                <></>
            ) : (
                <div
                    className={"nav_cursor"}
                    style={{
                        top: NavCursorTop + "px",
                        height: LinkHeight + "px",
                    }}
                ></div>
            )}
        </div>
    );
};

export default index;
