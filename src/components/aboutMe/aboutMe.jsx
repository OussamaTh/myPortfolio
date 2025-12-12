import { useDispatch } from "react-redux";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";
import { defaultButtonStyle, sectionGlobalStyles } from "../../websiteContent";
import { motion } from "framer-motion";

function AboutMe() {
    const dispatch = useDispatch();

    function handleTextEnter() {
        dispatch(textEnter())
    }
    function handleTextLeave() {
        dispatch(textLeave())
    }
    return (
        <>
            <section className=" overflow-hidden z-0" >
                <motion.h1
                    onMouseEnter={handleTextEnter}
                    onMouseLeave={handleTextLeave}
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
                        viewport={{ margin: "-200px",once:true }}
                        className="m-4">
                        <img className="aboutMeImg rounded-xl" src="myPortfolio/images/myImage5.jpg" width={500} alt="" />
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
                        viewport={{ margin: "-200px",once:true }}
                        className="aboutMeContent w-[50%] max-lg:w-[100%]">
                        <h1  onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave} className="text-[3rem] font-[800]" >Who I Am ?</h1>
                        <p onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave} className="my-[2rem] text-[var(--lightMode-light-text-color)]">Hi, I'm Oussama Touhami a 19-year-old web developer passionate about building useful and creative digital experiences. I work with a wide range of programming languages and modern technologies, and I love turning ideas into real projects. Problem solving, learning, facing challenges is what I like most about a such a field like this.</p>
                        <button className={`btn ${defaultButtonStyle}`} >Download CV</button>
                    </motion.div>
                </div>
                
            </section>
        </>
    )
}
export default AboutMe;