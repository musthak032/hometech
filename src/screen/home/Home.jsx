import "./Home.css";
import { useNavRef } from "../../context/navigation/navContext";
import Client from "../client/Client";
import {  cleaning,electric,fire,havc,housekeeping,pest} from "../../utils/clientimg";

import Slider from "react-slick";

import { useEffect, useState } from "react";

import Header from "../header/Header";
import Services from "../services/Services";
import Footer from "../../component/footer/Footer";
import { handlepost } from "../../component/services/Api";
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


  const cleaningimg = cleaning();
  const electricimg = electric();
  const fireimg = fire();
  const havcimg = havc();
  const housekeepingimg = housekeeping();
  const pestimg = pest();


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

/////fetch service /////

  const [data, setData] = useState({});
    const newData={
      "home":{
          "header":"Home content",
          "content":" We help ."

      },

      "about":{
        "header":"about",
        "content":" Wer."

    }}


  // useEffect(() => {
  //   // Fetch data from the API
  //   axios.get('http://localhost:4000/home')
  //   .then(response => setData(response.data))
  //   .catch(error => console.error('Axios error:', error));
  // }, []);

  // const handleUpdateData = async () => {
  //   try {
  //     const response = await axios.put('http://localhost:4000/home', { message: newData });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error updating data:', error);
  //   }
  // };

  ///// end /////



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
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay:true,
    speed:2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots:<Dotes/>

  };

  return (

<>

<Header/>
    <div className="home-container" ref={Homesection}>
      <div className="home-banner-container" >
        <div className="home-text-section frontground" data-aos="slide-right">
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

          className="home-image-section foreground-img "
        >
          <div style={{ width: "930px" }}>
            <Slider {...settings}>
              <img src={cleaningimg[2]} alt="" />
              <img src={housekeepingimg[14]} alt="" />
              <img src={fireimg[4]} alt="" />
              <img src={havcimg[2]} alt="" />
              <img src={electricimg[8]} alt="" />
              <img src={fireimg[5]} alt="" />
              <img src={pestimg[5]} alt="" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
    <Services/>

<Client/>
{/* <button onClick={()=>handlepost('home',newData)}>stop</button> */}
<Footer/>
</>
  );
};

export default Home;
// Revolutionizing facility management, setting new industry standards for excellence and sustainability.
