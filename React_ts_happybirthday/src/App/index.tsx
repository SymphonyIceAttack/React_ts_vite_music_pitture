import { useEffect, useState } from "react";
import Container from "@/App/Container";
import NavBar from "@/App/NavBar";
import Loading from "@/App/Loading";
import "./App.less";
import { FlexWindowHooks } from "@/App/FlexWindowHooks";

function App() {
    const isSmallWidth = FlexWindowHooks(700);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => {};
    }, []);

    return (
        <div
            className="App"
            style={{
                background: isLoading ? "black" : "",
                justifyContent: isLoading ? "center" : "",
                alignItems: isLoading ? "center" : "",
                flexDirection: isSmallWidth ? `column-reverse` : undefined,
            }}
        >
            {isLoading ? (
                <Loading />
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
