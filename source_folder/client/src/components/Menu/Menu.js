import React from 'react';

import {
  MenuContainer,
  MenuWrapper,
  MenuHeading,
  MenuItemName,
  MenuItemCard,
  MenuItemImg,
  MenuItemInfo,
  MenuItemDesc,
  MenuItemPrice,
  MenuButton
} from './MenuElements';


const Menu = ({ heading, menuData} ) =>   {
  

  return (
   
   
    <MenuContainer>

       {/* The text of the heading for the menu can be found in DisplayMenu.js inside of the FoodiePages folder  */}
      <MenuHeading>{heading}</MenuHeading>  
      
      <MenuWrapper>
        {/* loops through of the Menu itmes and their deatials which can be found at 
        to see info in the datafile go MenuData.js */}
        {menuData.map((menuItem, index) => { 
          // there must be a key/index when a map function is done in react
          return ( 
            <MenuItemCard key={index}>
              <MenuItemImg src={menuItem.img} alt={menuItem.alt} />
              <MenuItemInfo>
                <MenuItemName>{menuItem.name}</MenuItemName>
                <MenuItemDesc>{menuItem.desc}</MenuItemDesc>
                <MenuItemPrice>{menuItem.price}</MenuItemPrice>
                <MenuButton>{menuItem.button}</MenuButton>
                {/* <MenuButton onClick={() => addToCart(menuItem)}>{menuItem.button}</MenuButton> */}
              </MenuItemInfo>
            </MenuItemCard>
          
           
           
            
          );
        })}
     { console.log({Greeting})}
      </MenuWrapper>
    </MenuContainer>
    
  );
      }
      const Greeting = props => <h1>{props.auth.user}</h1>;


export default Menu;
