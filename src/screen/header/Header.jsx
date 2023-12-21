
import  "./Header.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import hometech from '../../assets/hometech.png'
import { useNavRef } from "../../context/navigation/navContext";

import { useNavigate } from "react-router-dom";

const pages = ['Home', 'About', 'Services','Profile','Team','Contact'];


const Header=()=>{
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const navigate=useNavigate();
    const {Homesection,
      Aboutsection,
      Profilesection,
      Servicessection,
      Teamsection,
      Contactsection}=useNavRef()

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };


const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  handleCloseNavMenu()
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });
  handleCloseNavMenu()
};

const scrollDown = (ref) => {

  try{

    window.scrollTo({
      top: ref.current.offsetTop-100,
      // top:document.documentElement.scrollHeight,
      behavior: 'smooth',
  
    });
  

  }catch(e){


 scrollToTop()

  }
  
 
  handleCloseNavMenu();
};
  
    return(
      <AppBar className="header-nav" position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <img src={hometech} className="img"  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
             
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={()=>{
                    if(page==="About"){
                      // scrollToTop()
                      
                      navigate("/hometech/aboutus")
                      scrollDown(Aboutsection) 
  
                      }
                      if(page==="Home"){
                        // scrollToTop()
                        
                        navigate("/")
                        scrollDown(Homesection) 
                       }
                       if(page==="Services"){
                         // scrollToTop()
                         
                         navigate("/")

                         scrollDown(Servicessection) 
  
                       }
  
                       if(page==="Profile"){
                        // scrollDown(Profilesection) 
                      scrollToTop()

                        navigate("/")
  
                       }
                       if(page==="Team"){
                         // scrollToTop()
                         
                         navigate("/hometech/aboutus")
                         scrollDown(Teamsection) 
                        
                       }
                       if(page==="Contact"){
                         // scrollToTop()
                         
                         navigate("/hometech/aboutus")
                         scrollDown(Contactsection) 

  
                       }
  
                  }}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <img src={hometech} className="img1"  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize:'.7rem'
              }}
            >
              HOME TECH SERVICES
            </Typography>
            {/* menu */}
            

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={()=>{
                    if(page==="About"){
                      // scrollToTop()
                      
                      navigate("/hometech/aboutus")
                      scrollDown(Aboutsection) 

                    }
                    if(page==="Home"){
                      // scrollToTop()
                      navigate("/")
                      scrollDown(Homesection) 

                     }
                     if(page==="Services"){
                      //  scrollToTop()
                       navigate("/")
                       scrollDown(Servicessection) 

                     }

                     if(page==="Profile"){
                      //  scrollToTop()
                       navigate("/")
                       scrollDown(Profilesection) 

                     }
                     if(page==="Team"){
                      //  scrollToTop()
                      navigate("/hometech/aboutus")
                      scrollDown(Teamsection) 


                     }
                     if(page==="Contact"){
                      //  scrollToTop()
                      navigate("/hometech/aboutus")
                      scrollDown(Contactsection) 

                      // window.scrollTo({ top: 0, behavior: 'smooth' });
                     }

                      
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
  
         
          </Toolbar>
        </Container>
      </AppBar>
    )
    }
    
    export default Header;