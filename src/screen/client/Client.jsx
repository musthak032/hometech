import CardM from "../../component/card/Card";
import "./Client.css";
import { useNavRef } from "../../context/navigation/navContext";
import { clientimg } from "../../utils/clientimg";

import { Parallax } from "react-parallax";

import homepng from "../../assets/home/home2.png";
import { background, food } from "../../utils/clientimg";

const Client = () => {
  const backgroundimg = background();
  const foodimg = food();
  const clienticon = clientimg();

  const {
    Homesection,
    Aboutsection,
    Profilesection,
    Servicessection,
    Teamsection,
    Contactsection,
  } = useNavRef();
  const clientImages = clientimg();
  return (
    <div className="client-container">
      <div className="client-banner-container">
        <div className="client-bannerImage-container background-img ">
          <img className=" background-img" src={foodimg[5]} alt="" />
        </div>

        <div className="client-text-section frontground">
          <h1 className="primary-heading ">
            Client
          </h1>
          <h2 className="primary-heading-white ">
          Trusted By 100 + satisfied clients
          </h2>
          <p className="primary-text-white">
            Help our clients with their manpower intensive needs especially
            through fulfilling their blue collar staff vacancies
          </p>
          {/* <button className="secondary-button">
           show more
          </button> */}
          <div className="client-icon-container">
            {
              clienticon.map((img,index)=>
               <img  className="animated infinite pulse" key={index} src={img.log} alt="logo"/>
              )
            }
          </div>
        </div>

        <div data-aos="slide-right"   className="client-image-section foreground-img">
          <img src={backgroundimg[16]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Client;
