import "./Home.css";
import { useNavRef } from "../../context/navigation/navContext";
import Client from "../client/Client";
import { clientimg } from "../../utils/clientimg";
import homepng from "../../assets/home/home.png";
import { Parallax } from "react-parallax";
import { background, food } from "../../utils/clientimg";

import Slider from "react-slick";

import { useEffect, useState } from "react";

import Header from "../header/Header";
import Services from "../services/Services";
import Footer from "../../component/footer/Footer";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}

      onClick={onClick}
    />
  );
}
function Dotes(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}

      onClick={onClick}
    />
  );
}
const Home = () => {


  const backgroundimg = background();
  const foodimg = food();

  const {
    Homesection,
    Aboutsection,
    Profilesection,
    Servicessection,
    Teamsection,
    Contactsection,
  } = useNavRef();
  const [slideview, setslideview] = useState(3);
  const [slidecount, setslidecount] = useState(3);
  useEffect(() => {
    // Function to update slideview and slidecount based on window.innerWidth
    const updateSlideValues = () => {
      if (window.innerWidth <= 900) {
        setslideview(1);
        setslidecount(1);
      } else {
        setslideview(1);
        setslidecount(1);
      }
    };

    // Initial update
    updateSlideValues();

    // Event listener for window resize
    window.addEventListener("resize", updateSlideValues);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlideValues);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slideview,
    slidesToScroll: slidecount,
    fade: true,
    autoplay:true,
    speed:2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots:false,
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots:<Dotes/>

  };

  return (
    // <div className='home-container card-shodow' ref={Homesection}>

    //  <div className="home-banner-container">
    //     <div className="home-bannerImage-container  background-img ">
    //       <img src={foodimg[4]} alt="" />
    //     </div>
    //     <div className="home-text-section frontground">
    //     <h1 className="primary-heading">
    //      Home
    //       </h1>
    //       <h2 className="primary-heading-white">
    //       We provide an extensive range of maintenance service for organizations
    //       </h2>
    //       <p className="primary-text-white-h">
    //       Help our clients with their manpower intensive needs especially through fulfilling their blue collar staff vacancies
    //       Home Tech Services Pvt Ltd aspires to be the premier service provider in India's dynamically evolving facility management sector.
    //       </p>
    //       {/* <button className="secondary-button">
    //         Order Now
    //       </button> */}
    //     </div>
    //     <div data-aos="slide-left"   className="home-image-section foreground-img ">
    //       <div style={{width:"500px"}  }>
    //         <Slider {...settings}>

    //         <img   src={backgroundimg[21]} alt="" />
    //         <img   src={backgroundimg[25]} alt="" />
    //           <img   src={backgroundimg[24]} alt="" />
    //           </Slider>

    //       </div>
    //     </div>
    //   </div>

    // </div>
<>

<Header/>
    <div className="home-container" ref={Homesection}>
      <div className="home-banner-container">
        <div className="home-text-section frontground">
          <h4 className="primary-heading-white">Home Tech Services Pvt Ltd</h4>
          <h6 className="primary-heading-white">
            All Your Facility Requirement Under One Roof
          </h6>
          <p className="primary-text-white-h">
            We help our clients with their manpower intensive needs especially
            through fulfilling their blue collar staff vacancies Home Tech
            Services Pvt Ltd aspires to be the premier service provider in
            India's dynamically evolving facility management sector.
          </p>
          {/* <button className="secondary-button">
           Order Now
         </button> */}
        </div>
        <div
          data-aos="zoom-in"
          className="home-image-section foreground-img "
        >
          <div style={{ width: "930px" }}>
            <Slider {...settings}>
              <img src={backgroundimg[21]} alt="" />
              <img src={backgroundimg[25]} alt="" />
              <img src={backgroundimg[24]} alt="" />
              <img src={backgroundimg[20]} alt="" />
              <img src={backgroundimg[19]} alt="" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
    <Services/>

<Client/>
<Footer/>
</>
  );
};

export default Home;
// Revolutionizing facility management, setting new industry standards for excellence and sustainability.
