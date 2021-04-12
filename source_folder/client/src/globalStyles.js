import styled from 'styled-components';



export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
/*
     *    Title: react-website-styled-components-v1
     *    Author: briancodex
     *    Date: 2021
     *    Availability: https://github.com/briancodex/react-website-styled-components-v1]
     */