import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax1() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });

const firstCircle = useTransform(scrollYProgress,[0,0.8],["-400%","400%"])
const secondCircle = useTransform(scrollYProgress,[0,0.8],["400%","-400%"])
    

    return (
        <>
            <motion.section className="darkSec min-h-[100vh] bg-black" >
                <motion.div ref={ref} className="h-[250vh] flex items-center justify-center gap-[2rem] relative  ">
                    <motion.div style={{x: firstCircle,mixBlendMode: "difference"}} className="w-[500px]  h-[500px] bg-[white] sticky top-[10%] rounded-2xl "></motion.div>
                    <motion.div style={{x: secondCircle,mixBlendMode: "difference"}} className="w-[500px] h-[500px] bg-[white] sticky top-[10%] rounded-2xl "></motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}