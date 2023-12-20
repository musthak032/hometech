import CardM from "../../component/card/Card";
import "./Client.css";
import { useNavRef } from "../../context/navigation/navContext";
import { clientimg } from "../../utils/clientimg";

import { Parallax } from "react-parallax";

import homepng from "../../assets/home/home2.png";
import { background, food } from "../../utils/clientimg";
import { useEffect,useState } from "react";
import Slider from "react-slick";
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




  const [slideview,setslideview]=useState(3)
  const [slidecount,setslidecount]=useState(3)
  useEffect(() => {
    // Function to update slideview and slidecount based on window.innerWidth
    const updateSlideValues = () => {
      if (window.innerWidth <= 900) {
        setslideview(1);
        setslidecount(1);
      } else {
        setslideview(2);
        setslidecount(2);
      }
    };
  
    // Initial update
    updateSlideValues();
  
    // Event listener for window resize
    window.addEventListener('resize', updateSlideValues);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlideValues);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    
    slidesToShow: slideview,
    slidesToScroll: slidecount,
    arrows: false,
    
    autoplay: true,
    speed: 5000,
    autoplaySpeed:500,
    cssEase: "linear"
  };

  return (
    <div className="client-container">
      <div className="client-banner-container">
        <div className="client-bannerImage-container background-img ">
          {/* <img className=" background-img" src={foodimg[5]} alt="" /> */}
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
