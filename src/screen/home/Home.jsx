
import './Home.css'
import { useNavRef } from "../../context/navigation/navContext";
import Client from '../client/Client';
import { clientimg } from '../../utils/clientimg';
import homepng from '../../assets/home/home.png'
import { Parallax } from 'react-parallax';
import {background,food} from '../../utils/clientimg'

const Home=()=>{
    const backgroundimg=  background();
    const foodimg=  food();
    
    const {Homesection,
        Aboutsection,
        Profilesection,
        Servicessection,
        Teamsection,
        Contactsection}=useNavRef()


      
return(
    <div className='home-container card-shodow' ref={Homesection}>

     <div className="home-banner-container">
        <div className="home-bannerImage-container  background-img ">
          <img src={foodimg[4]} alt="" />
        </div>
        <div className="home-text-section frontground">
        <h1 className="primary-heading">
         Home
          </h1>
          <h2 className="primary-heading-white">
          We provide an extensive range of maintenance service for organizations
          </h2>
          <p className="primary-text-white-h">
          Help our clients with their manpower intensive needs especially through fulfilling their blue collar staff vacancies
          Home Tech Services Pvt Ltd aspires to be the premier service provider in India's dynamically evolving facility management sector.
          </p>
          {/* <button className="secondary-button">
            Order Now 
          </button> */}
        </div>
        <div data-aos="slide-left"   className="home-image-section foreground-img ">
          <img   src={backgroundimg[0]} alt="" />
        </div>
      </div>
      

    </div>
)
}

export default Home;
// Revolutionizing facility management, setting new industry standards for excellence and sustainability.