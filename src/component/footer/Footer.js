import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* <h4>LinkedIn</h4>
        <h4>Instagram</h4>
        <h4>Facebook</h4> */}

        <div className="footer-about">

        <h6>About Us</h6>
        <p>Why US</p>
        <p>Contact Us</p>
        <p>Career</p>
        <p>Blog</p>
        </div>

        <div className="footer-services" >
            
        <h6>Services Us</h6>
        <p>House Keeping</p>
        <p>Security</p>
        <p>Electrical</p>
        <p>Pest</p>
        <p>HAVC</p>
        </div>
      <div className="footer-contactus">

      <h6>Need Help</h6>
        <p>Getting Started</p>
        <p>Contact Us</p>
        <p>FAQ</p>

      </div>
        

      </div>

      


    </>
  );
};
export default Footer;
