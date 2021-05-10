import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";

//Makes footer and connects links to webpages

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "blue", textAlign: "center", marginTop: "-50px" }}>
        Cookup
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About</Heading>
            <FooterLink href="AboutUs">Learn about our mission!</FooterLink>
          </Column>
          <Column>
            <Heading>Navigate</Heading>
            <FooterLink href="/">Homepage</FooterLink>
            <FooterLink href="Register">Sign Up</FooterLink>
            <FooterLink href="Login">Sign In</FooterLink>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="">Location: Albany, New York</FooterLink>
            <FooterLink href="">Telephone: (123)456-7890</FooterLink>
            <FooterLink href="">Email: jdoe@albany.edu</FooterLink>
          </Column>
        </Row>
        <Row>
          <div classname="footer-bottom">
            <p classname="text-xs-center">
              &copy;{new Date().getFullYear()} Cookup - All Rights Reserved
            </p>
          </div>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
