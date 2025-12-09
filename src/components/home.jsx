import { defaultButtonStyle } from "../websiteContent";
import Button from "./button";

function Home() {
    return (
        <>  
            <section id="home" className="homePageContainer h-screen  w-full flex justify-around items-center p-6" >
                <div className="aboutMeContent">
                    <h1 className="text-[4rem] font-[900]" >Hey 👋  <br /> I'm Oussama</h1>
                    <p className="text-[1.3rem] w-[70%] my-4 font-[400] text " >Hey there, I'm Oussama Touhami, I'm a full stack web developer.</p>
                    <button className={defaultButtonStyle} >Download CV</button>
                </div>
                <div className="imageBloc">
                    <div className="homeImage ">
                    </div>
                    <div className="underShape">

                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;