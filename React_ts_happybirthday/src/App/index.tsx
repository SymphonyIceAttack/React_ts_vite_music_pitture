import { useEffect, useState } from "react";
import Container from "./Container";
import NavBar from "./NavBar";
import Loading from "@/components/Loading";
import "./App.less";
import { FlexWindowHooks } from "./AppHooks/FlexWindowHooks";
import { LoadingHooks } from "./AppHooks/LoadingHooks";
import Pages from "./pages";

function App() {
    const [isSmallWidth] = FlexWindowHooks(700);
    const [isLoading, isMouseDown] = LoadingHooks();
    return (
        <div
            className="App"
            style={{
                background: isLoading || !isMouseDown ? "black" : "",
                justifyContent: isLoading || !isMouseDown ? "center" : "",
                alignItems: isLoading || !isMouseDown ? "center" : "",
                flexDirection: isSmallWidth ? `column-reverse` : `column`,
            }}
        >
            {isLoading || !isMouseDown ? (
                <>
                    <Loading />
                    <span className="AppSpan">请点击屏幕</span>
                </>
            ) : (
                <>
                    <NavBar isSmallWidth={isSmallWidth} />
                    <Container
                        isSmallWidth={isSmallWidth}
                        Pages={Pages}
                    ></Container>
                </>
            )}
        </div>
    );
}

export default App;
