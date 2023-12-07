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

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <NavrefcontextProvider>
        <Header />

        <Home />

        <Client />

        <Services />

        <Profile />

        <Team />

        <About />

        <Contact />
      </NavrefcontextProvider>
    </>
  );
};

export default Main;
