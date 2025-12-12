import { motion } from "framer-motion";
import { defaultButtonStyle, sectionGlobalStyles, SKILLS_INFO } from "../../websiteContent";
import SkillsCard from "../skillsCard/skillsCard";
import { useDispatch } from "react-redux";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";

function Skills() { 
    const dispatch = useDispatch();


    const handleTextLeave = () => dispatch(textLeave());
    const handleTextEnter = () => dispatch(textEnter());

    return (
        <>
            <section className="overflow-x-hidden" >
                <motion.h1
                    onMouseEnter={handleTextEnter}
                    onMouseLeave={handleTextLeave}
                    className={`sectionTitle ${sectionGlobalStyles.titleStyle}`} >Skills</motion.h1>
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