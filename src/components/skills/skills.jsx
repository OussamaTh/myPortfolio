import { motion } from "framer-motion";
import { defaultButtonStyle, sectionGlobalStyles, SKILLS_INFO } from "../../websiteContent";
import SkillsCard from "../skillsCard/skillsCard";
import { useDispatch } from "react-redux";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";

function Skills({data}) { 
    const dispatch = useDispatch();


    const handleTextLeave = () => dispatch(textLeave());
    const handleTextEnter = () => dispatch(textEnter());

    return (
        <>
            <div className="flex items-center justify-center flex-wrap gap-[2rem] p-[2rem] py-[4rem] w-[70%] max-sm:w-[100%] mx-auto" >
                {data?.map((skill) => {
                    return(
                        <div className="bg-[#2e2e2e] p-4 min-w-[110px] min-h-[110px] flex items-center justify-center rounded-[10px]">
                            <img src={skill.imgPath} width={60} alt="" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Skills;