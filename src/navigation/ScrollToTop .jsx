import React, { useState, useEffect } from "react";


import { Button } from "@mui/material";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                
                <Button onClick={goToTop}>top</Button>
            )}{" "}
        </div>
    );
};
export default ScrollToTop;