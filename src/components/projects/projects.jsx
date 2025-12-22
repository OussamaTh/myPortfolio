import { a } from "framer-motion/m";
import DarkButton from "../button/darkButton";
import Parallax1 from "../parallaxEffects/parallax1";
import LightButton from "../button/lightbutton";
import { projectCards } from "../../websiteContent";
import ProjectCard from "./projectCard";
import { useEffect, useState } from "react";

function Projects() {
    const [isProjectSection,setIsProjectSection] = useState(false);

    useEffect(() => {
        const projectSection = document.querySelector(".projectSection");
        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting){
                        setIsProjectSection(true);
                    }
                })
            }
        )
        

        return () => observer.disconnect();        
    },[]);
    
    


    return (
        <>
            <section id="projects" data-index={5} className="darkSection min-h-[100vh] h-auto" >
                <Parallax1 />
                <div className="lightSection min-h-[100vh] bg-[white] p-[2rem] py-[3rem]">
                    <h1 className="text-center  text-[2.5rem] font-[700]">All Projects</h1>
                    <div className="projectsContainer flex items-center justify-center gap-[3rem] py-[4rem] flex-wrap">
                        {projectCards.map((project) => {
                            return(
                                <ProjectCard key={project.id} project={project} />
                            )
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}
export default Projects;