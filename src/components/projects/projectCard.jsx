import { img } from "framer-motion/m";
import DarkButton from "../button/darkButton";
import LightButton from "../button/lightbutton";

function ProjectCard({project}){
    return(
        <>
            <div className="bg-[#fff] projectItem rounded-[10px] relative overflow-hidden max-w-[450px]">
                            <div className="projectOverview overflow-hidden flex relative">
                                <img src={project.thumbnail} className="w-[450px] rounded-t-[10px] transition-all duration-500 h overflow-hidden " alt="" />
                                <div className="blurOverlay absolute text-white left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full transition-all duration-700 flex items-center justify-center  ">
                                    <a href={project.url} target="_blank">
                                        <DarkButton buttonText={"Visit website"} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-[1.5rem] px-[1.5rem] min-h-[120px] z-[999]">
                                <div className="flex items-center justify-between">
                                    <div className="">
                                       {project.projectTechs.map((item) => {
                                        return <img key={item.id} src={item.img} width={25} alt={item.id} />
                                       })}
                                    </div>
                                    <div className="date font-[600] text-[#bababa]">
                                        {project.date}
                                    </div>
                                </div>
                                <h1 className="text-[2rem] font-[700] my-[0.5rem]">{project.name}</h1>
                                <p className="my-3" >
                                    {project.description}
                                </p>
                                <a href={project.url} target="_blank">
                                    <LightButton buttonText={"Visit website"} />
                                </a>
                            </div>
                        </div>
        </>
    )
}
export default ProjectCard;