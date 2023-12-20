import Header from "../header/Header";
import Footer from "../../component/footer/Footer";
import "./gallery.css";
import { useEffect, useState } from "react";
import React from "react";
import { background ,fire, food } from "../../utils/clientimg";
import Slider from "react-slick";

const Firegallery = () => {
  const backgroundimg = background();
  const fireimg = fire();

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
                  src={fireimg[0]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={fireimg[1]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={fireimg[2]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={fireimg[3]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={fireimg[4]}
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
            <h4 className="primary-heading">Fire Safety</h4>
            <p className="primary-heading-white">
              Maintain a pristine workplace with our top-tier housekeeping
              services. Housekeeping services within facility management cover a
              broad spectrum, including daily cleaning, sanitation, and upkeep
              of interior spaces.
            </p>

            <h2 className="primary-heading-white">Comprehensive Cleaning </h2>
            <p className="primary-heading-white">
              Housekeeping services in Facility Management cover thorough
              cleaning of interiors, maintaining a pristine and sanitized
              environment.
            </p>

            <h2 className="primary-heading-white">Scheduled Maintenance </h2>
            <p className="primary-heading-white">
              Regular schedules ensure consistent cleaning routines, preventing
              the accumulation of dust, dirt, and germs in various spaces.
            </p>

            <h2 className="primary-heading-white">Professional Staff: </h2>
            <p className="primary-heading-white">
              Trained and skilled housekeeping professionals handle tasks
              efficiently, utilizing industry best practices and quality
              cleaning agents.
            </p>

            <h2 className="primary-heading-white">
              Surface and Material Expertise:{" "}
            </h2>
            <p className="primary-heading-white">
              Knowledgeable in handling various surfaces and materials,
              housekeeping services cater to the specific cleaning needs of
              different areas within the facility.
            </p>

            <h2 className="primary-heading-white">Health and Safety: </h2>
            <p className="primary-heading-white">
              Prioritizing the health and safety of occupants, housekeeping
              services adhere to hygiene standards, reducing the risk of
              infections and promoting a healthy environment.
            </p>

            <h2 className="primary-heading-white"> Waste Management </h2>
            <p className="primary-heading-white">
              Housekeeping services are equipped to respond to unexpected
              situations promptly, maintaining a clean and safe environment even
              during emergencies.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="about-image-section foreground-img"
          >
            <img  src={fireimg[13]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Firegallery;





 
