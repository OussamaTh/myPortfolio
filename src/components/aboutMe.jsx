import { defaultButtonStyle, sectionGlobalStyles } from "../websiteContent";
import { motion } from "framer-motion";

function AboutMe() {
    return (
        <>
            <section className=" overflow-hidden" >
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ margin: "-200px", once: true }} className={`sectionTitle ${sectionGlobalStyles.titleStyle}`} >About Me</motion.h1>

                <div className="aboutMeSection p-[2rem] py-[4rem] w-full flex items-center justify-between">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ margin: "-200px", }}
                        className="m-4">
                        <img className="rounded-xl" src="images/myImage5.jpg" width={500} alt="" />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 100
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ margin: "-200px", }}
                        className="aboutMeContent w-[50%] max-lg:w-[100%]">
                        <h1 className="text-[3rem] font-[800]" >Who I Am ?</h1>
                        <p className="my-[2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repudiandae, minus rem rerum sunt suscipit quibusdam sit dolorum sequi molestias distinctio consectetur quidem excepturi adipisci consequatur quam similique numquam fuga enim eveniet magnam! Numquam iusto nemo voluptatum harum incidunt nostrum cumque, excepturi necessitatibus, omnis minus consequuntur optio vel minima.</p>
                        <button className={defaultButtonStyle} >Download CV</button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
export default AboutMe;