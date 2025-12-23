import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax2() {
    let ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });
    const sq1 = useTransform(scrollYProgress, [0, 0.6], [100, 0]);
    const sq2 = useTransform(scrollYProgress, [0, 0.6], [500, 0]);
    const sq3 = useTransform(scrollYProgress, [0, 0.6], [800, 0]);

    let titleStyle = "jersey text-[3.5rem] max-lg:text-[3rem] max-md:text-[2.5rem]  font-[400] flex flex-col justify-center items-center text-white";
    let squareStyle = "lightWindow w-[300px] h-[200px] max-lg:w-[250px] max-lg:h-[150px] max-md:w-[85%] max-md:h-[150px] rounded-2xl  ";

    return (
        <>
            <motion.section className="min-h-[350vh] relative bg-[#111111]">
                <motion.div ref={ref} className=" min-h-[300vh] relative flex items-center justify-around gap-[1rem]">
                    <motion.div className="flex flex-wrap gap-[3rem] items-center justify-center w-full sticky top-[20%] max-sm:top-[10%]">
                        <motion.div style={{ y: sq1 }} className={squareStyle}>
                            <div className="nav flex items-center gap-[4px] ps-4">
                                {[...Array(3)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white"></div>
                                    )
                                })}
                            </div>
                            <div className="flex items-center justify-center ">
                                <h1 className={titleStyle} >
                                <div className="">#CODING</div>
                                
                            </h1>
                            </div>
                        </motion.div>
                        <motion.div style={{ y: sq2 }} className={squareStyle}>
                             <div className="nav flex items-center gap-[4px] ps-4">
                                {[...Array(3)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white"></div>
                                    )
                                })}
                            </div>
                            <h1 className={titleStyle} >
                                <div className="">#COFFEE</div>
                            </h1>
                        </motion.div>
                        <motion.div style={{ y: sq3 }} className={squareStyle}>
                             <div className="nav flex items-center gap-[4px] ps-4">
                                {[...Array(3)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white"></div>
                                    )
                                })}
                            </div>
                            <h1 className={titleStyle} >
                                <div className="">#DEBUGGING</div>
                            </h1>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}
export default Parallax2;