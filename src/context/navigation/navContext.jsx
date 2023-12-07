import React, { useState, createContext, useContext } from "react";
import { useEffect,useRef } from "react"


const navrefContext = createContext();

export function useNavRef() {
  return useContext(navrefContext);
}
export function NavrefcontextProvider({ children }) {
   


      const Homesection = useRef(null);
      const Aboutsection = useRef(null);
      const Servicessection = useRef(null);
      const Profilesection = useRef(null);
      const Teamsection = useRef(null);
      const Contactsection = useRef(null);

      useEffect(()=>{
       console.log(Homesection.current);
      },[])

  const value = {
    Homesection,
    Aboutsection,
    Profilesection,
    Servicessection,
    Teamsection,
    Contactsection
  };

  return (
    <navrefContext.Provider value={value}>
      {children}
    </navrefContext.Provider>
  );
}