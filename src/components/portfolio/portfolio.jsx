import { useEffect, useState } from "react";
import Home from "../home/home";
import InfoTerminal from "../infoTerminal/infoTerminal";
import Navbar from "../navbar/navbar";
import AboutMe from "../aboutMe/aboutMe";
import Skills from "../skills/skills";
import { motion } from "framer-motion";
import { createWebSocketModuleRunnerTransport } from "vite/module-runner";
import { useSelector } from "react-redux";
import { useLenis } from "lenis/react";
import MoreAboutMe from "../aboutMe/moreAboutMe";
import SkillsSection from "../skills/SkillsSection";
import SectionTracker from "../sectionTracker/sectionTracker";
import { section } from "framer-motion/client";
import Parallax1 from "../parallaxEffects/parallax1";


function Portfolio() {
    useLenis();
    const [progress, setProgress] = useState(0);
    const [mouseCordinates, setMouseCordinates] = useState({
        x: 0,
        y: 0
    });
    const [activeSection,setActiveSection] = useState(undefined);

    const [isInView, setIsInView] = useState({
        isAboutSection: false,

    });

    useEffect(() => {
        const sections = document.querySelectorAll(".darkSec");

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView((prev) => {
                    return{
                        ...prev,
                        isAboutSection: entry.isIntersecting
                    }
                }); 
            },
            {threshold: 0.5,rootMargin: "10% 0% 10% 0%"}            
        );
        sections.forEach((section) => {
            if (section) observer.observe(section);
        })
        

        return () => observer.disconnect();
    }, []);



    const mouseVariant = useSelector((state) => state.cursorMask.defaultVariant)


    useEffect(() => {
        const mouse = (e) => {
            setMouseCordinates({
                x: e.clientX,
                y: e.clientY
            })
        };

        window.addEventListener("mousemove", mouse)
        return () => {
            window.removeEventListener("mousemove", mouse);
        }
    }, [])

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
            background: isInView.isAboutSection ? "#fff" : "#000",
            mixBlendMode: "difference"
        }
    }

    

    useEffect(() => {
        let sections = document.querySelectorAll("section");
        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting){
                        let index = entry.target.dataset.index;
                        setActiveSection(sections[index].id);
                    }
                })
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect();
    },[])

    return (
        <>
            <div className="appContainer w-full text-[var(--lightMode-text-color)]">
                <a href="#home" className="fixed right-[20px] bottom-[20px] bg-[var(--lightMode-text-color)] w-[50px] h-[50px] rounded-full flex items-center  justify-center cursor-pointer " ><img src="/myPortfolio/icons/whiteArrowUp.png" width={30} alt="" /></a>
                <SectionTracker activeSection={activeSection} scrollProgress={progress} />
                <Navbar scrollProgress={progress} isDark={isInView.isAboutSection} />
                <Home />
                <InfoTerminal />
                <AboutMe />
                <MoreAboutMe/> 
                <SkillsSection/>
                <Parallax1 />
            
                <motion.div
                    variants={variants}
                    transition={{type: "tween"}}
                    animate={mouseVariant}
                    className="cursor max-sm:hidden"
                />
            </div>
        </>
    )
}
export default Portfolio;