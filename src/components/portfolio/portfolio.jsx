import { useEffect, useState } from "react";
import Home from "../home/home";
import InfoTerminal from "../infoTerminal/infoTerminal";
import Navbar from "../navbar/navbar";
import AboutMe from "../aboutMe/aboutMe";
import Skills from "../skills/skills";
import { motion } from "framer-motion";
import { createWebSocketModuleRunnerTransport } from "vite/module-runner";
import { useSelector } from "react-redux";


function Portfolio() {
    const [progress, setProgress] = useState(0);
    const [mouseCordinates,setMouseCordinates] = useState({
        x: 0,
        y: 0
    });
    const mouseVariant = useSelector((state) => state.cursorMask.defaultVariant)
    

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
            width: 300,
            height: 300,
            x: mouseCordinates.x - 150,
            y: mouseCordinates.y - 150,
            background: "#000",
            mixBlendMode: "difference"
        }
    }

    
    
    return (
        <>
            <div className="appContainer w-full text-[var(--lightMode-text-color)]">
                <a href="#home" className="fixed right-[20px] bottom-[20px] bg-[var(--lightMode-text-color)] w-[50px] h-[50px] rounded-full flex items-center  justify-center cursor-pointer " ><img src="myPortfolio/icons/whiteArrowUp.png" width={30} alt="" /></a>
                <Navbar scrollProgress={progress} />
                <Home />
                <InfoTerminal />
                <AboutMe />
                <Skills />
                <motion.div
                    variants={variants}
                    animate={mouseVariant}
                    className="cursor"
                />
                <h1>Hello world</h1>

            </div>
        </>
    )
}
export default Portfolio;