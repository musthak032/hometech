import About from "../about/About";
import Contact from "../contact/contact";
import Header from "../header/Header";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Services from "../services/Services";
import Team from "../team/Team";
import { NavrefcontextProvider } from "../../context/navigation/navContext";
import Client from "../client/Client";
import Aos from "aos";
import { useEffect } from "react";
//

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../component/footer/Footer";
import { Route, Routes } from "react-router-dom";


//pages
import Housecleaning from "../gallery/Housecleaning";
import Firegallery from "../gallery/Firegallery";
import ElectricGallery from "../gallery/ElectricGallery";
import HvacGallery from "../gallery/HvacGallery";
import PestGallery from "../gallery/PestGallery";
import Aboutmain from "../about/Aboutmain";
import Cleaning from "../gallery/Cleaning";
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>

      <NavrefcontextProvider>


        {/* <Header />

        <Home />

        <Services />
        <Client />
        <Footer /> */}

        {/* <Profile /> */}

        {/* <Team /> */}

        {/* <About /> */}

        {/* <Contact /> */}

    <Routes>
       
        <Route path="/" element={ <Home/> } />
        <Route path="Housecleaninggallery" element={ <Housecleaning/> } />
        <Route path="Security" element={ <Housecleaning/> } />
        <Route path="Electric" element={ <ElectricGallery/> } />
        <Route path="Fire" element={ <Firegallery/> } />
        <Route path="Havc" element={ <HvacGallery/> } />
        <Route path="Cleaning" element={ <Cleaning/> } />
        <Route path="Pest" element={ <PestGallery/> } />

        <Route path="/hometech/aboutus" element={ <Aboutmain/> } />
    </Routes>
      </NavrefcontextProvider>
    </>
  );
};

export default Main;
