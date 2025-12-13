import { useRef } from "react";
import LightButton from "../button/lightbutton";
import { motion, useScroll, useTransform } from "framer-motion";
import { sectionGlobalStyles } from "../../websiteContent";

function ParallaxItem() {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });

    const firstBoxY = useTransform(scrollYProgress,[0,0.3],["400px","0px"]);
    const firstBoxOpacity = useTransform(scrollYProgress,[0,0.3],[0,1]);
    const circleClipPath = useTransform(scrollYProgress,[0,0.3],["",
    "circle(200px at 50% 0)"])

    const secondBoxY = useTransform(scrollYProgress,[0.3,0.6],["400px","0px"]);
    const secondBoxOpacity = useTransform(scrollYProgress,[0.3,0.6],[0,1]);

    const thirdBoxY = useTransform(scrollYProgress,[0.6,0.8],["400px","0px"]);
    const thirdBoxOpacity = useTransform(scrollYProgress,[0.6,0.8],[0,1]);

    return (
        <>
            <section ref={ref} style={{ minHeight: "300vh" }} className="darkSec bg-black text-white " >
                <h1 className={`sectionTitle text-[2rem] text-center font-[900]`} >Skills</h1>
                <div className="parallaxContainer min-h-[300vh] relative flex items-center justify-around">
                    <div className="sticky top-[10%] h-[100vh] w-[500px] h-[500px] bg-white">

                    </div>

                    <div className="content flex flex-col gap-[20vh] ">
                        <motion.div 
                            style={{y:firstBoxY,opacity:firstBoxOpacity}} 
                            initial={{clipPath: 'circle(0px at 100% 100%)'}}
                            whileInView={{clipPath: 'circle(600px at 100% 100%)'}}
                            transition={{type:"spring",stiffness:15}}
                            className="translate-y-[300px] h-[240px] w-[400px] p-4 bg-white text-black">
                            <h1 className="text-[2rem]">Hello world</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam eos minima incidunt sapiente possimus, ullam quasi quo placeat dignissimos?</p>
                            <LightButton buttonText={"Click"} />
                        </motion.div>
                        <motion.div style={{y:secondBoxY,opacity:secondBoxOpacity}} className="translate-y-[300px] h-[240px] w-[400px] p-4 ">
                            <h1 className="text-[2rem]">Hello world</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam eos minima incidunt sapiente possimus, ullam quasi quo placeat dignissimos?</p>
                            <LightButton buttonText={"Click"} />
                        </motion.div>
                        <motion.div style={{y:thirdBoxY,opacity:thirdBoxOpacity}} className="translate-y-[300px] h-[240px] w-[400px] p-4 ">
                            <h1 className="text-[2rem]">Hello world</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam eos minima incidunt sapiente possimus, ullam quasi quo placeat dignissimos?</p>
                            <LightButton buttonText={"Click"} />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ParallaxItem;