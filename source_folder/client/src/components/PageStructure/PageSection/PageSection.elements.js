import styled from "styled-components";
// background color of the section
export const Section = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#0f006e")};
`;
// everything horizontal within the Section
export const PageRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) =>
    imgStart
      ? "row-reverse"
      : "row"}; // place the image on the left or right of the page
`;
// column for every img or text section within the section
export const PageColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

// div style  for text
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
// div style  for Img
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) =>
    start
      ? "flex-start"
      : "flex-end"}; // style for putting img to the left or right of the section depeding on start boolean
`;

// Top Line of the section
export const TopLine = styled.div`
  color: ${({ lightTopLine }) =>
    lightTopLine ? "#a9b3c1" : "#4B59F7"}; //  detemine topline color
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 100%;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

// Cition
/*
 *    Title: react-website-styled-components-v1
 *    Author: briancodex
 *    Date: 2021
 *    Availability: https://github.com/briancodex/react-website-styled-components-v1]
 */
