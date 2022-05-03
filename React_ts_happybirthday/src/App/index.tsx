import { useEffect, useState } from "react";
import Container from "@/App/Container";
import NavBar from "@/App/NavBar";
import Loading from "@/App/Loading";
import "./App.less";
import { FlexWindowHooks } from "@/App/AppHooks/FlexWindowHooks";
import { LoadingHooks } from "@/App/AppHooks/LoadingHooks";

function App() {
    const isSmallWidth = FlexWindowHooks(700);
    const { isLoading, isMouseDown } = LoadingHooks();
    return (
        <div
            className="App"
            style={{
                background: isLoading || !isMouseDown ? "black" : "",
                justifyContent: isLoading || !isMouseDown ? "center" : "",
                alignItems: isLoading || !isMouseDown ? "center" : "",
                flexDirection: isSmallWidth ? `column-reverse` : undefined,
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
                    <Container isSmallWidth={isSmallWidth} />
                </>
            )}
        </div>
    );
}

export default App;
