import { useRef } from "react";
import { defaultButtonStyle } from "../../websiteContent";
import { useDispatch } from "react-redux";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";
import LightButton from "../button/lightbutton";
import { motion } from "framer-motion";

function Home({ onMouseEnter, onMouseLeave }) {
    const cardRef = useRef(null);
    const dispatch = useDispatch();

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) - 0.5;
        const yPercent = (y / rect.height) - 0.5;

        const rotateX = yPercent * 30;
        const rotateY = -xPercent * 30;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.97)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    function handleTextEnter() {
        dispatch(textEnter())
    }
    function handleTextLeave() {
        dispatch(textLeave())
    }


    let variants = {
        initial: {
            x: "0"
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                duration: 15,
                repeatType: "mirror"
            },
        }
    }

    return (
        <>
            <section id="home" className="  min-h-[140vh] max-sm:min-h-[110vh]" >
                <div className="homePageContainer h-screen  w-full flex justify-around items-center p-6">
                    <div className="homeContent">
                        <h1 className="text-[4rem] font-[900]" onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave} >Hey 👋,  <br /> I'm Oussama</h1>
                        <p className="text-[1.3rem] w-[70%] my-4 font-[400] text " >Hey there, I'm Oussama Touhami, I'm a full stack web developer.</p>
                        <LightButton buttonText={"Download CV"} />
                    </div>
                    <div className="imageBloc">
                        <div ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                perspective: "300px",
                                transformStyle: "preserve-3d",
                                transition: "transform 0.15s ease",
                            }} className="homeImage ">
                        </div>
                        <div className="underShape">

                        </div>
                    </div>
                </div>
                <motion.div onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave} variants={variants} initial={"initial"} animate={"animate"} className="py-6 textSlider absolute bottom-[-400px] text-[40vh] whitespace-nowrap w-[60%] max-sm:hidden text-[#1d1d1d16] font-[700] cursor-none">
                    Oussama Touhami - Oussama Touhami - Oussama Touhami - Oussama Touhami
                </motion.div>
            </section>
        </>
    )
}
export default Home;