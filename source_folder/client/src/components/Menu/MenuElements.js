import styled from 'styled-components';

export const MenuContainer = styled.div`
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5rem calc((100vw - 1300px) / 2); // padding between menu items
  background: linear-gradient(to bottom,  #0f006e, #d6d6a3);
  color: #f8f8ff;  // color of the text on the file 
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const MenuItemCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
  
`;

export const MenuItemImg = styled.img`
  height: 300px;
  border-radius :25px;
  box-shadow: 8px 8px #d6d6a3;
  min-width: 300px;
  max-width: 100%;
  
  
`;

export const MenuHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const MenuItemName = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const MenuItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const MenuItemDesc = styled.p`
  margin-bottom: 0.5rem;
`;

export const MenuItemPrice = styled.p`
  margin-bottom: 0.5rem;
  font-size: 2rem;
`;

export const MenuButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
