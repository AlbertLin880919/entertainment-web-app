import { useEffect, useState } from "react";

const useWindowWidth = () => {
    const [windowWidth, setWindowSize] = useState("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            const changeWindowWidth = () => {
                setWindowSize(window.innerWidth);
            };

            changeWindowWidth();

            window.addEventListener("resize", changeWindowWidth);

            return () => window.removeEventListener("resize", changeWindowWidth);
        }
    }, []);
    return windowWidth;
};

export default useWindowWidth;
