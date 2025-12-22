import { a } from "framer-motion/m";
import DarkButton from "../button/darkButton";
import Parallax1 from "../parallaxEffects/parallax1";
import LightButton from "../button/lightbutton";
import { projectCards } from "../../websiteContent";
import ProjectCard from "./projectCard";
import { useState } from "react";

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const notesPerPage = 3;

   
    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = projectCards.slice(indexOfFirstNote, indexOfLastNote);
    const totalPages = Math.ceil(projectCards.length / notesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };


    return (
        <>
            <section id="projects" data-index={5} className="darkSection min-h-[100vh] h-auto" >
                <Parallax1 />
                <div className="lightSection min-h-[100vh] bg-[white] p-[2rem] py-[3rem]">
                    <h1 className="text-center  text-[2.5rem] font-[700]">All Projects</h1>
                    <div className="projectsContainer flex items-center justify-center gap-[3rem] py-[4rem] flex-wrap">
                        {currentNotes.map((project) => {
                            return(
                                <ProjectCard key={project.id} project={project} />
                            )
                        })}
                    </div>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="p-2  disabled:opacity-30 cursor-pointer rounded-full hover:bg-gray-300 transition-all ease duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="gray" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>


                    </button>
                    <span className="self-center text-[#858585] text-[0.8rem]">Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="p-2 disabled:opacity-30 cursor-pointer rounded-full hover:bg-gray-300 transition-all ease duration-200"
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="gray" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                </div>
            </section>

        </>
    )
}
export default Projects;