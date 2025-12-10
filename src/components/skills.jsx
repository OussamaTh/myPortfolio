import { motion } from "framer-motion";
import { defaultButtonStyle, sectionGlobalStyles, SKILLS_INFO } from "../websiteContent";
import SkillsCard from "./skillsCard";

function Skills() {


    return (
        <>
            <section>
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
                    viewport={{ margin: "-200px", once: true }} className={`sectionTitle ${sectionGlobalStyles.titleStyle}`} >Skills</motion.h1>
                    <p className="text-center text-[var(--lightMode-light-text-color)]">This is a bunch of programming languages and tools that I master </p>
                    <div className="w-full p-4 pt-[8rem]">
                        <div className="skillsContainer flex justify-center flex-wrap gap-[2rem]">
                            {SKILLS_INFO.map((item,index) => {
                                return(
                                    <SkillsCard key={index} skills={item} />
                                )
                            })}
                        </div>
                    </div>
            </section>
        </>
    )
}
export default Skills;