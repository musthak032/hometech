import Cardc from "../../component/card/Cardc";
import "./Services.css";
import { useNavRef } from "../../context/navigation/navContext";

import { Parallax } from "react-parallax";
import {background,food} from '../../utils/clientimg'



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Services = () => {
  const backgroundimg = background();
  const foodimg=  food();

  const {
    Homesection,
    Aboutsection,
    Profilesection,
    Servicessection,
    Teamsection,
    Contactsection,
  } = useNavRef();
  return (
    <div className="services-container"  ref={Servicessection}>
     
     <div className="services-banner-container">
        <div className="services-bannerImage-container  background-img">
          <img src={foodimg[6]} alt="" />
        </div>
        <div className="services-text-section frontground">
          <h1 className="primary-heading">
        Services
          </h1>
          <h2 className="primary-heading-white">
          We provide an extensive range of maintenance service for organizations
          </h2>
          {/* <p className="primary-text-white">
          Help our clients with their manpower intensive needs especially through fulfilling their blue collar staff vacancies
          </p> */}
          <div data-aos="slide-right"  className="service-card-container">

              <Cardc servicename="Cleaning service"/>
              <Cardc servicename="Security service"/>
              {/* <Cardc/> */}

          </div>
       
        </div>
        <div data-aos="slide-left"  className="services-image-section foreground-img">
          <img src={backgroundimg[14]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
