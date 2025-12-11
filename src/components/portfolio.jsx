import { useEffect, useState } from "react";
import Home from "./home";
import InfoTerminal from "./infoTerminal";
import Navbar from "./navbar";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import HoverBox from "./hoverBox";
import { motion } from "framer-motion";
import { createWebSocketModuleRunnerTransport } from "vite/module-runner";


function Portfolio() {
    const [progress, setProgress] = useState(0);
    const [mouseCordinates,setMouseCordinates] = useState({
        x: 0,
        y: 0
    });
    const [mouseVariants,setMouseVariants] = useState("default")

    console.log(mouseCordinates);
    useEffect(() => {
        const mouse = (e) => {
            setMouseCordinates({
                x: e.clientX,
                y: e.clientY
            })
        };

        window.addEventListener("mousemove",mouse)
        return () => {
            window.removeEventListener("mousemove",mouse);
        }
    },[])

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


    let variants = {
        default: {
            x: mouseCordinates.x,
            y: mouseCordinates.y,
        },
        text: {
            width: 200,
            height: 200,
            x: mouseCordinates.x - 100,
            y: mouseCordinates.y - 100,
            background: "#000",
            mixBlendMode: "difference"
        }
    }

    const textEnter = () => setMouseVariants("text");
    const textLeave = () => setMouseVariants("default");
    
    return (
        <>
            <div className="appContainer w-full text-[var(--lightMode-text-color)]">
                <a href="#home" className="fixed right-[20px] bottom-[20px] bg-[var(--lightMode-text-color)] w-[50px] h-[50px] rounded-full flex items-center  justify-center cursor-pointer " ><img src="public/icons/whiteArrowUp.png" width={30} alt="" /></a>
                <Navbar scrollProgress={progress} />
                <Home onMouseEnter={textEnter} onMouseLeave={textLeave} />
                <InfoTerminal />
                <AboutMe />
                <Skills />
                <motion.div
                    variants={variants}
                    animate={mouseVariants}
                    className="cursor"
                />
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} >Hello world</h1>

            </div>
        </>
    )
}
export default Portfolio;