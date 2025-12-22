import { a } from "framer-motion/m";
import DarkButton from "../button/darkButton";
import Parallax1 from "../parallaxEffects/parallax1";
import LightButton from "../button/lightbutton";
import { projectCards } from "../../websiteContent";
import ProjectCard from "./projectCard";
import { useState } from "react";

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    let projects = 2;

    let indexOfLastProject = currentPage * projects;
    let projectsToShow = projectCards.slice(0, indexOfLastProject);

    function handleLoadMore() {
        setCurrentPage((prev) => prev + 1);
    }

    let isEndOfProjects = projectCards.length == projectsToShow.length;

    return (
        <>
            <section id="projects" data-index={5} className="darkSection min-h-[100vh] h-auto py-[3rem]" >
                <Parallax1 />
                <div className="lightSection min-h-[100vh] bg-[white] p-[2rem] py-[3rem]">
                    <h1 className="text-center  text-[2.5rem] font-[700]">All Projects</h1>
                    <div className="projectsContainer flex items-center justify-center gap-[3rem] py-[4rem] flex-wrap">
                        {projectsToShow.map((project) => {
                            return (
                                <ProjectCard key={project.id} project={project} />
                            )
                        })}
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleLoadMore} disabled={isEndOfProjects} className={`${isEndOfProjects ? "bg-[#e3e3e3] text-[#787878] cursor-not-allowed" : "bg-black text-white"}  p-2 px-5 rounded-[10px]`}>{isEndOfProjects ? "That's All": "Load More"}</button>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Projects;