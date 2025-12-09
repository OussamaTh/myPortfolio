import { useEffect, useState } from "react";
import Home from "./home";
import InfoTerminal from "./infoTerminal";
import Navbar from "./navbar";
import AboutMe from "./aboutMe";


function Portfolio() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const scrolledHeight = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight
            const scrollPercentage = (scrolledHeight / totalHeight) * 100;
            setProgress(scrollPercentage);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            <div className="appContainer w-full text-[var(--lightMode-text-color)]">
                <a href="#home" className="fixed right-[20px] bottom-[20px] bg-[var(--lightMode-text-color)] w-[50px] h-[50px] rounded-full flex items-center  justify-center cursor-pointer " ><img src="icons/whiteArrowUp.png" width={30} alt="" /></a>
                <Navbar scrollProgress={progress} />
                <Home />
                <InfoTerminal />
                <AboutMe />
            </div>
        </>
    )
}
export default Portfolio;