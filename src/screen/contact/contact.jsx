import * as React from "react";
import "./Contact.css";
import TextField from "@mui/material/TextField";

import {
  AccountCircle,
  EmailOutlined,
  Message,
  PhoneAndroid,
} from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ScrollToTop from "../../navigation/ScrollToTop ";
import { useNavRef } from "../../context/navigation/navContext";

const Contact = () => {
  const {
    Homesection,
    Aboutsection,
    Profilesection,
    Servicessection,
    Teamsection,
    Contactsection,
  } = useNavRef();

  const handlesubmit = () => {};
  return (
    <>
      <div className="contact-parent " ref={Contactsection}>
        <h1> Contact us</h1>

        <form className="contat-form foregoround " onSubmit={handlesubmit}>
          <div className="contact-form-container frontground">
            <TextField
              id="input-with-icon-textfield"
              label="Enter your name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              required
              type="text"
              variant="filled"
              rows={1}

              style={{ backgroundColor:"white" }}
            />

            <TextField
              id="input-with-icon-textfield"
              label="Enter your Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                ),
              }}
              required
              type="email"
              rows={1}
              variant="filled"
              style={{ backgroundColor:"white" }}

            />
            <TextField
              id="input-with-icon-textfield"
              label="Enter your phone number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroid />
                  </InputAdornment>
                ),
              }}
              required
              type="email"
              rows={1}
              variant="filled"
              style={{ backgroundColor:"white" }}

            />

            <TextField
              id="input-with-icon-textfield"
              label="Enter your message"
              required
              type="text"
              multiline
              rows={7}
              variant="filled"
              style={{ backgroundColor:"white" }}

            />
            
          </div>
          <div style={{ textAlign: "center" }}>
            <Button type="submit" variant="contained" size="large">
              Send
            </Button>
          </div>
        </form>
      </div>
    
      {/* <ScrollToTop/> */}
    </>
  );
};
export default Contact;
