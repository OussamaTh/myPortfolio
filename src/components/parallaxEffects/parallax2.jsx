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

    let titleStyle = "jersey text-[3rem] max-md:text-[2rem]  font-[400] flex flex-col justify-center items-center text-black";
    let squareStyle = "w-[300px] h-[300px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[200px] max-md:h-[200px] bg-white rounded-2xl flex items-center justify-center";

    return (
        <>
            <motion.section className="min-h-[350vh] relative bg-black">
                <motion.div ref={ref} className=" min-h-[300vh] relative flex items-center justify-around gap-[1rem]">
                    <motion.div className="flex max-sm:flex-col gap-[1rem] items-center justify-around w-full sticky top-[20%] max-sm:top-[10%]">
                        <motion.div style={{ y: sq1 }} className={squareStyle}>
                            <h1 className={titleStyle} >
                                <div className="">#CODING</div>
                                <img src="/myPortfolio/icons/laptop.png" className="w-[80px] max-md:w-[50px] max-sm:w-[40px]" alt="" />
                            </h1>
                        </motion.div>
                        <motion.div style={{ y: sq2 }} className={squareStyle}>
                            <h1 className={titleStyle} >
                                <div className="">#COFFEE</div>
                                <img src="/myPortfolio/icons/coffee.png" className="w-[80px] max-md:w-[50px] max-sm:w-[40px]" alt="" />
                            </h1>
                        </motion.div>
                        <motion.div style={{ y: sq3 }} className={squareStyle}>
                            <h1 className={titleStyle} >
                                <div className="">#DEBUGGING</div>
                                <img src="/myPortfolio/icons/bug.png" className="w-[80px] max-md:w-[50px] max-sm:w-[40px]" alt="" />
                            </h1>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}
export default Parallax2;