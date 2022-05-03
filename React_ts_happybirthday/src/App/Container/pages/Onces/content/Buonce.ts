import { useEffect, useRef } from "react";

export const Bounce = () => {
    const ContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ContentRef.current?.addEventListener("click", (e) => {
            let x = e.clientX - ContentRef.current!.offsetLeft;
            let y = e.clientY - ContentRef.current!.offsetTop;
            let circle = document.createElement("span");
            circle.style.top = y + "px";
            circle.style.left = x + "px";
            ContentRef.current?.appendChild(circle);
            setInterval(function () {
                circle.remove();
            }, 1000);
        });
    }, []);

    return [ContentRef];
};
