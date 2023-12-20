import About from "./About";
import Header from "../header/Header";
import Contact from "../contact/contact";
import Team from "../team/Team";

const Aboutmain=()=>{


    return(
        <div style={{marginTop:"120px"}}>
        <Header/>
        <About/>
        <Team/>
        <Contact/>
        
        </div>
    )
}

export default Aboutmain;