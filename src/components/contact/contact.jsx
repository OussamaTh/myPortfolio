import Parallax1 from "../parallaxEffects/parallax1";
import Parallax2 from "../parallaxEffects/parallax2";

function Contact(){
    

    return(
        <>
            <section id="contact" data-index={6} className=" min-h-[100vh] h-auto" >
                {/* <Parallax1 sectionName={"Contact"} /> */}
                <Parallax2/>
                <Parallax1 sectionName={"Contact"} />
                <div className="h-[100vh]"></div>
            </section>
        </>
    )
}
export default Contact;