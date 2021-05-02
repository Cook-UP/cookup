import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Auth } from "aws-amplify";
import {
  Nav,
  NavbarContainer,
  NavLogo,

  HambugerMenuIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  LogoImg,
} from './Navbar.elements';


function Navbar(props) {
  async function handleSignOut() {
    try {
        await Auth.signOut();
        props.auth.setAuthStatus(false);
        props.auth.setUser(null);
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  console.log(props.auth.userIsAuthenticated);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
     {!props.auth.userIsAuthenticated && (
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
            <LogoImg></LogoImg>
              Cookup
            </NavLogo>
            <HambugerMenuIcon onClick={handleClick}>
              {/* HamberMenu Icons */}
              {click ? <FaTimes /> : <FaBars />}
            </HambugerMenuIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/aboutUs' onClick={closeMobileMenu}>
                 About Us 
                </NavLinks>
              </NavItem>
              
              {props.auth.userIsAuthenticated && props.auth.user && (
               <NavItem>
               <NavLinks to='/aboutUs' onClick={closeMobileMenu}>
                <p>
                  Hello 
                  {/* {props.auth.user.username} */}
                </p>
                </NavLinks>
               </NavItem>
                
              )}
              
              <NavItem>
                <NavLinks to='/login' onClick={closeMobileMenu}>
                  Sign In 
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/register'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/register'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
     )}
{/* Displays if the user is signed in */}
{props.auth.userIsAuthenticated && (
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
            <LogoImg></LogoImg>
              Cookup
            </NavLogo>
            <HambugerMenuIcon onClick={handleClick}>
              {/* HamberMenu Icons */}
              {click ? <FaTimes /> : <FaBars />}
            </HambugerMenuIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact' onClick={closeMobileMenu}>
                 Contact US
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Cart' onClick={closeMobileMenu}>
                 Cart ({props.auth.cart.length})
                </NavLinks>
              </NavItem>
                {/* Display the users firstname on NavBar when logged in */}
              {props.auth.userIsAuthenticated && props.auth.user && (
               <NavItem>
               <NavLinks to='/contact' onClick={closeMobileMenu}>
                <p>
                
                  Hello {props.auth.user.attributes.given_name}
                  
                </p>
                </NavLinks>
               </NavItem>
                
              )}
              
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to=''>
                  
                   <Button onClick={handleSignOut} primary>SIGN OUT  </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to=''>
                    <Button onClick={() => {closeMobileMenu(); handleSignOut(); }}fontBig primary> 
                      SIGN OUT
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
     )}
      
    </>
                
  );
}
// Cition 
// briancodex (2021) Recoil [https://github.com/briancodex/react-website-styled-components-v1]
export default Navbar;

