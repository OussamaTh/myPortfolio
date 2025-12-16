import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { SKILLS, SKILLS_INFO } from "../../websiteContent";
import SkillBox from "./SkillBox";

export default function SkillsSection() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const boxes = document.querySelectorAll(".skillBox");
        const dots = document.querySelectorAll(".dot");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index;

                        dots.forEach((dot) => dot.classList.remove("active"));
                        dots[index]?.classList.add("active");
                    }
                });
            },
            { threshold: 0.5, }
        );
        boxes.forEach((box) => observer.observe(box));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const skills = document.querySelector(".skills");
        const dots = document.querySelector(".dots");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        dots.classList.remove("hideDots");
                    }
                    else {
                        dots.classList.add("hideDots");
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(skills)
    }, []);


    const ref = useRef();
    const { scrollYProgress: firstProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });

    const letterSpacing = useTransform(firstProgress, [0.5, 0.6], ["15rem", "0rem"])
    const titleOpacity = useTransform(firstProgress, [0.5, 0.6], [0.1, 1])
    const rectangleClipPath = useTransform(firstProgress, [0.5, 0.6], [
        "circle(0% at 0 50%)",
        "circle(300% at 0 50%)"
    ])
    const textScale = useTransform(firstProgress, [0.5, 0.6], [0.5, 1]);


    const clipPath = useTransform(firstProgress, [0, 0.5], [
        "circle(0% at 0 50%)",
        "circle(300% at 0 50%)"
    ]);



    return (
        <section id="skillsSection" data-index={4} className="darkSec min-h-[100vh] h-auto p-0" >
            {width >= 900 && <motion.div ref={ref} style={{ clipPath }} className="h-[300vh] flex items-center  justify-center flex-col relative bg-black text-center">
                <motion.h1 style={{ letterSpacing, opacity: titleOpacity, mixBlendMode: "difference" }} className="font-[500] text-[40vh]  text-[#fff] text-center sticky top-[10%] mx-auto " >Skills</motion.h1>
                <motion.div transition={{ type: "spring" }} className="bg-white w-full h-[150px] translate-y-[300px] " style={{ mixBlendMode: "difference", clipPath: rectangleClipPath }}>

                </motion.div>
            </motion.div>}

            {width < 900 && <motion.div ref={ref} style={{ clipPath }} className="h-[300vh]  flex items-center  justify-center flex-col relative bg-black text-center">
                <motion.h1 style={{ opacity: titleOpacity, mixBlendMode: "difference", scale: textScale }} className="font-[500] text-[15vh]  text-[#fff] text-center sticky top-[30%] mx-auto " >Skills</motion.h1>
                <motion.div transition={{ type: "spring" }} className="bg-white w-full h-[150px] translate-y-[300px] " style={{ mixBlendMode: "difference", clipPath: rectangleClipPath }}>

                </motion.div>
            </motion.div>}
            <div className="skills relative w-full min-h-[100vh]">
                <div className="dots fixed flex flex-col gap-2 px-4 float-end top-[50%] right-[2%]">
                    {SKILLS.map((i) => (
                        <div key={i.skillGroupId} className="dot" data-index={i.skillGroupId}></div>
                    ))}
                </div>

                <motion.div className="py-[10rem] h-[300vh] flex flex-col gap-[30vh] justify-center items-center">
                    {SKILLS.map((skillItem,index) => {
                        return(
                            <SkillBox style={{}} key={index} skillItem={skillItem} />
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}
