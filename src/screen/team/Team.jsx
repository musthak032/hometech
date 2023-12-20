import "./Team.css";
import { useNavRef } from "../../context/navigation/navContext";
import { Parallax } from "react-parallax";
import { background, food } from "../../utils/clientimg";
import CardM from "../../component/card/Card";

import Slider from "react-slick";

import { useEffect,useState } from "react";

const Team = () => {
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

  const [slideview,setslideview]=useState(2)
  const [slidecount,setslidecount]=useState(2)
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
    arrows: true,
    // fade: true,
    // autoplay: true,
    // speed: 5000,
    // autoplaySpeed:500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="team-container" ref={Teamsection}>
      <div className="team-banner-container">
        <div className="team-bannerImage-container  background-img">
          <img src={foodimg[6]} alt="" />
        </div>
        <div className="team-text-section frontground">
          <h1 className="primary-heading">Teams</h1>
          <h2 className="primary-heading-white">
            We provide an extensive range of maintenance service for
            organizations
          </h2>
          <p className="primary-text-white">
            At Home Tech Services Pvt Ltd, we take immense pride in our team of
            dedicated professionals who form the backbone of our organization.
            Each member brings a unique set of skills, passion, and expertise,
            contributing to the success and growth of our company. Get to know
            the faces behind the commitment to excellence:
          </p>
          <div data-aos="slide-right" className="team-card-container">
            <div className="team-crad-slider">
              <Slider {...settings}>
                <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Mohamed Mahmood "}
                  position={"CEO"}
                  qutos={
                    "orchestrates the strategic direction of Home Tech Services, ensuring that every aspect aligns with our mission and goals."
                  }
                />

                <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Jinu John "}
                  position={"Operation Manager"}
                  qutos={
                    "orchestrates the strategic direction of Home Tech Services, ensuring that every aspect aligns with our mission and goals."
                  }
                />

                <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Babu V"}
                  position={"HR"}
                  qutos={
                    "orchestrates the strategic direction of Home Tech Services, ensuring that every aspect aligns with our mission and goals."
                  }
                />

             <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Babu V"}
                  position={"HR"}
                  qutos={
                    "orchestrates the strategic direction of Home Tech Services, ensuring that every aspect aligns with our mission and goals."
                  }
                />
              </Slider>
            </div>
          </div>
        </div>
        <div
          data-aos="slide-left"
          className="team-image-section foreground-img"
        >
          <img src={backgroundimg[13]} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Team;

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
