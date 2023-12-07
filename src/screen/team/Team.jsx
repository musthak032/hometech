
import './Team.css'
import { useNavRef } from "../../context/navigation/navContext";
import { Parallax } from "react-parallax";
import { background ,food} from "../../utils/clientimg";
import CardM from '../../component/card/Card';

const Team=()=>{
    const backgroundimg = background();
  const foodimg=  food();

    const {Homesection,
        Aboutsection,
        Profilesection,
        Servicessection,
        Teamsection,
        Contactsection}=useNavRef()
return(
<div className="team-container"ref={Teamsection}>

<div className="team-banner-container">
        <div className="team-bannerImage-container  background-img" >
          <img src={foodimg[6]} alt="" />
        </div>
        <div className="team-text-section frontground">
          <h1 className="primary-heading">
       Teams
          </h1>
          <h2 className="primary-heading-white">
          We provide an extensive range of maintenance service for organizations
          </h2>
          <p className="primary-text-white">
          At Home Tech Services Pvt Ltd, we take immense pride in our team of dedicated professionals who form the backbone of our organization. Each member brings a unique set of skills, passion, and expertise, contributing to the success and growth of our company. Get to know the faces behind the commitment to excellence:
          </p>
          <div data-aos="slide-right"  className="team-card-container">
          <CardM photo={backgroundimg[12]} name={"Mr Mohamed Mahmood "} position={"CEO"} qutos={"orchestrates the strategic direction of Home Tech Services, ensuring that every aspect aligns with our mission and goals."}/>

          <CardM photo={backgroundimg[11]} name={"Mr Jinu John "} position={"Operation Manager"} qutos={"orchestrates the strategic direction of Home Tech Services, ensuring that every aspect aligns with our mission and goals."}/>

          <CardM photo={backgroundimg[11]} name={"Mr Babu V"} position={"HR"} qutos={"orchestrates the strategic direction of Home Tech Services, ensuring that every aspect aligns with our mission and goals."}/>
        
          
          </div>
       
        </div>
        <div data-aos="slide-left" className="team-image-section foreground-img">
          <img src={backgroundimg[13]} alt="" />
        </div>
      </div>
</div>)
}
export default Team;