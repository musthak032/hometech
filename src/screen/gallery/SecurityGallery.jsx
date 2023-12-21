import Header from "../header/Header";
import Footer from "../../component/footer/Footer";
import "./gallery.css";
import { useEffect, useState } from "react";
import React from "react";
import { background ,security, food } from "../../utils/clientimg";
import Slider from "react-slick";

const SecurityGallery=()=>{

    const backgroundimg = background();
    const securityimg = security();
  
    const [slideview, setslideview] = useState(5);
    const [slidecount, setslidecount] = useState(5);
    useEffect(() => {
      // Function to update slideview and slidecount based on window.innerWidth
      const updateSlideValues = () => {
        if (window.innerWidth <= 900) {
          setslideview(1);
          setslidecount(1);
        } else {
          setslideview(3);
          setslidecount(3);
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
      dots: true,
      infinite: true,
  
      slidesToShow: slideview,
      slidesToScroll: slidecount,
      centerMode:true,
    };
    
  
  
   
  
  
    return (
      <>
        <Header />
  
      
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "150px",
            gap:"25px"
          }}
        >
        <h4 className="primary-heading">Gallery</h4>
  
          <div style={{ width: "95%" }}>
            <div>
              <Slider {...settings}>
                
  
                <div>
                  <img
                    style={{ width: "95%", objectFit: "cover" }}
                    src={securityimg[6]}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "95%", objectFit: "cover" }}
                    src={securityimg[1]}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "95%", objectFit: "cover" }}
                    src={securityimg[2]}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "95%", objectFit: "cover" }}
                    src={securityimg[3]}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "95%", objectFit: "cover" }}
                    src={securityimg[4]}
                  />
                </div>
              </Slider>
            </div>
          </div>
  
  
        </div>
  
  
  
  
  
        <div className="about-container">
          <div className="about-banner-container">
            <div className="about-bannerImage-container  background-img">
              {/* <img style={{backgroundColor:"red"}} draggable="false" src={foodimg[5]} alt="" /> */}
            </div>
            <div className="profile-text-section frontground">
              <h4 className="primary-heading">Security Services</h4>
              <p className="primary-heading-white">
              Security guard services play a crucial role in facility management, ensuring the safety of occupants, assets, and information. Comprehensive security services for a secure business environment. Trained professionals ensuring peace of mind.
              </p>
  
              <h2 className="primary-heading-white">Prevention and Deterrence:  </h2>
              <p className="primary-heading-white">
              Guards serve as a deterrent to potential threats, preventing unauthorized access, theft, vandalism, and other security breaches.
              </p>
  
              <h2 className="primary-heading-white">Emergency Response:  </h2>
              <p className="primary-heading-white">
              Trained security personnel are equipped to handle emergencies, providing immediate response and assistance in critical situations.
              </p>
  
              <h2 className="primary-heading-white">Surveillance and Monitoring: </h2>
              <p className="primary-heading-white">
              Security guards utilize surveillance systems to monitor and analyze activities, maintaining a vigilant presence to identify and address potential risks.
              </p>
  
              <h2 className="primary-heading-white">
              	Access Control: 
              </h2>
              <p className="primary-heading-white">
              Implementing access control measures, guards regulate entry points, verifying credentials, and ensuring only authorized individuals gain access to the facility.
              </p>
  
              <h2 className="primary-heading-white">Risk Assessment:  </h2>
              <p className="primary-heading-white">
              Security professionals conduct regular risk assessments, identifying vulnerabilities and implementing measures to mitigate potential security threats.

Security guards adhere to industry regulations, ensuring that the facility remains in compliance with security standards and legal requirements.

              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="about-image-section foreground-img"
            >
              <img src={backgroundimg[5]} alt="" />
            </div>
          </div>
        </div>
      </>
    )
}

export default SecurityGallery;