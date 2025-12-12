import { useDispatch } from "react-redux";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";
import { defaultButtonStyle, sectionGlobalStyles, socialMedia } from "../../websiteContent";
import { motion } from "framer-motion";
import DarkButton from "../button/darkButton";
import SocialItem from "../socialMedia/socialItem";

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
            <motion.section
                id="aboutMe"
                initial={{ clipPath: "circle(5% at 40% 0)" }}
                whileInView={{ clipPath: "circle(200% at 0 0)" }}
                transition={{ duration: 5, ease: "easeOut" }}
                viewport={{ margin: "30px" }}

                className=" overflow-hidden bg-black " >
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
                    viewport={{ margin: "-200px", once: true }} className={`sectionTitle ${sectionGlobalStyles.titleStyle} text-[white]`} >About Me</motion.h1>

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
                        viewport={{ margin: "-200px", once: true }}
                        className="aboutMeImgContainer m-4">
                        <div className="aboutDummyNav flex items-center px-3">
                            <div className=" flex items-center gap-2">
                                <div className="h-[15px] w-[15px] bg-[#fc0000]  rounded-full"></div>
                                <div className="h-[15px] w-[15px] bg-[#ffaa00]  rounded-full"></div>
                                <div className="h-[15px] w-[15px] bg-[#26ff00]  rounded-full"></div>
                            </div>
                        </div>
                        <img className="aboutMeImg " src="/myPortfolio/images/myImage5.jpg" width={400} alt="" />
                        <div className="social gap-3 flex justify-center items-center">
                            {socialMedia.map((item,index) => {
                                return(
                                    <SocialItem 
                                        key={index} 
                                        socialIcon={item.socialIcon}
                                        socialLink={item.socialLink}
                                        />
                                )
                            })}
                        </div>
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
                        viewport={{ margin: "-200px", once: true }}
                        className="aboutMeContent w-[50%] max-lg:w-[100%]">
                        <h1 onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave} className="text-[3rem] font-[800] text-[white]" >Who I Am ?</h1>
                        <p onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave} className="my-[2rem] text-[var(--lightMode-light-text-color)]">Hi, I'm Oussama Touhami a 19-year-old web developer passionate about building useful and creative digital experiences. I work with a wide range of programming languages and modern technologies, and I love turning ideas into real projects. Problem solving, learning, facing challenges is what I like most about a such a field like this.</p>
                        <DarkButton buttonText={"Download CV"} />
                    </motion.div>
                </div>

            </motion.section>
        </>
    )
}
export default AboutMe;