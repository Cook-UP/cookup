
import styled, { css } from 'styled-components';

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledMiniInput = styled.input`
  ${sharedStyles}
`;
export const MenuContainer = styled.div`
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5rem calc((100vw - 1300px) / 2); // padding between menu items
  background: linear-gradient(to bottom, #0f006e, #d6d6a3);
  color: #f8f8ff; // color of the text on the file
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
  border-radius: 25px;
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

// All of these styleing will be used for the Cart Component 

export const MiniMenuItemCard = styled.div`
 margin-bottom: 2rem;
  display: flex;
  line-height: 2;
  width: 50px;
`;

export const MiniMenuItemImg = styled.img`
  height: 180px;
  border-radius: 25px;
  box-shadow: 8px 8px #d6d6a3;
  min-width: 300px;
  max-width: 100%;
  object-fit: fill;
`;

export const CartItemInfo = styled.div`
   padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--secondary-color);
`;

export const CartItemDesc = styled.p`
  /* margin-bottom: 0.5rem; */
  font-size: 0.8rem;
  display: flex;
`;
export const CarttemPrice = styled.p`
  margin-bottom: bold;
  font-size: 1rem;
  `;

export  const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  padding: 0.6rem;

`;
export  const CartItemQty = styled.div`
  display: flex;
  align-items: center;
`;
export  const CartDisplay = styled.div`
width: 20%;
max-width: 300x;
padding-left:40px;
justify-content: space-between;
padding: 1rem;
background-color: #fff;
border-radius: 15px;
box-sizing: border-box;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2); 
border-radius: 10px;

`;
export  const CartDisplayPrice = styled.div`
  display: flex;
  align-items: center;
  padding-bottom:1em;
`;

export const CartItemName = styled.h2`

  font-size: 1rem;
  font-weight: bold
`;
 





