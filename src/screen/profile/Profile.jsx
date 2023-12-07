import "./Profile.css";
import { useNavRef } from "../../context/navigation/navContext";
import { Parallax } from "react-parallax";
import {background,food} from '../../utils/clientimg'

const Profile = () => {
  const backgroundimg = background();
  const { Profilesection } = useNavRef();
  const foodimg=  food();

  return (



    <div className='profile-container' ref={Profilesection}>

     <div className="profile-banner-container">
        <div className=" profile-bannerImage-container  background-img">
          <img  src={foodimg[5]} alt="" />
        </div>
        <div className="profile-text-section frontground">
          <h1 className="primary-heading">
          Profile
          </h1>
          <h2 className="primary-heading-white">
          We provide an extensive range of maintenance service for organizations
          </h2>
          <p className="primary-text-white">
          Help our clients with their manpower intensive needs especially through fulfilling their blue collar staff vacancies
          </p>
          {/* <button className="secondary-button">
            Order Now 
          </button> */}
        </div>
        <div data-aos="slide-right" className="profile-image-section foreground-img">
          <img src={backgroundimg[17]} alt="" />
        </div>
      </div>
      

    </div>
  );
};
export default Profile;
