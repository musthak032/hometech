import Cardc from "../../component/card/Cardc";
import "./Services.css";
import { useNavRef } from "../../context/navigation/navContext";

import { Parallax } from "react-parallax";
import { background, food,electric,cleaning,fire,havc,pest,housekeeping,security } from "../../utils/clientimg";
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
const Services = () => {
  const backgroundimg = background();
  const foodimg = food();
  const housekeepingimg = housekeeping();
  const securityimg = security();
  const electricimg = electric();
  const cleaningimg = cleaning();
  const fireimg = fire();
  const havcimg = havc();
  const pestimg = pest();



  const {
    Homesection,
    Aboutsection,
    Profilesection,
    Servicessection,
    Teamsection,
    Contactsection,
  } = useNavRef();

  const navigation =useNavigate();

  const [slideview,setslideview]=useState(3)
  const [slidecount,setslidecount]=useState(3)
  useEffect(() => {
    // Function to update slideview and slidecount based on window.innerWidth
    const updateSlideValues = () => {
      if (window.innerWidth <= 900) {
        setslideview(1);
        setslidecount(1);
      } else {
        setslideview(4);
        setslidecount(4);
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
    slidesToScroll:slidecount,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

  };


 
  return (
    <div className="services-container" ref={Servicessection}>
      <div className="services-banner-container">
     

        <div className="services-text-section frontground">
          <h4 className="primary-heading">Our Services</h4>
          <p className="primary-heading-white">
            We provide an extensive range of Facility Management service for
            organizations.
          </p>
    

        </div>
          <div data-aos="slide-right" className="service-card-container">
            <div className="service-card-slider">
              <Slider {...settings}>
                <Cardc img={housekeepingimg[11]} servicename="HOUSE KEEPING" content="Maintain a pristine workplace with our top-tier housekeeping services" />
                <Cardc img={securityimg[3]} servicename="SECURITY" content="Security guard services play a crucial role in facility management"  />
                <Cardc img={electricimg[3]} servicename="ELECTRICALS" content="Electrical systems are pivotal in facility management, requiring regular checks."  />
                <Cardc img={fireimg[3]} servicename="FIRE CREW" content="Ensure workplace safety with certified fire safety officers. "  />
                <Cardc img={havcimg[7]} servicename="HVAC" content=" Ensuring a comfortable and productive environment."  />
                <Cardc img={pestimg[1]} servicename="PEST CONTROL" content=" Employing a holistic approach, IPM is a key facet of facility management"  />
                <Cardc img={cleaningimg[1]} servicename="CLEANING MATERIALS" content="Quality cleaning for a spotless environment."  />
              </Slider>
            </div>
          </div>

      
      </div>
    </div>
  );
};



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,   color:"black " }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color:"black"}}

      onClick={onClick}
    />
  );
}
export default Services;


