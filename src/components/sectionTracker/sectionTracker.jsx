import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

export default function SectionTracker({ activeSection,scrollProgress }) {
    const [sectionName, setSectionName] = useState("Home");

    let sectionData = [
        { sectionId: "home", sectionName: "Home", isDark: false },
        { sectionId: "quickInfo", sectionName: "Terminal", isDark: false },
        { sectionId: "aboutMe", sectionName: "About Me", isDark: true },
        { sectionId: "moreAboutMe", sectionName: "More", isDark: true },
        { sectionId: "skillsSection", sectionName: "Skills", isDark: false },
        { sectionId: "experience", sectionName: "Experience", isDark: false },
    ];
    let currentActiveSection = sectionData.find((item) => item.sectionId == activeSection);
    useEffect(() => {
        if (currentActiveSection) {
            setSectionName(currentActiveSection.sectionName);
        }
    }, [activeSection])
    

    return (
        <>
            {sectionName !== "Home" && <motion.div initial={{scale: 0.8, opacity: 0}} animate={{scale: 1,opacity:1,transition: {type: "spring",stiffness:40,delay: 2}}} className="overflow-hidden bg-[#4b4b4b5a] backdrop-blur-[20px] text-white w-[250px] h-[48px] flex items-center justify-center fixed left-1/2 top-[90%] -translate-x-1/2 z-[9999] rounded-full font-[400] text-[1rem] border-2 border-[#c8c8c847] tracking-[2px] ">
                {sectionName}
                <div style={{width: `${scrollProgress}%`,mixBlendMode:"difference"}} className={`bg-white h-[60px]  absolute left-0`}>

                </div>
            </motion.div>}
        </>
    )
}
