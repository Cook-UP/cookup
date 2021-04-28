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

const Menu = ({ heading, menuData }) => {
  return (
    
    <MenuContainer>
       {/* The text of the heading for the menu can be found in DisplayMenu.js inside of the FoodiePages folder  */}
      <MenuHeading>{heading}</MenuHeading>  
      <MenuWrapper>
        {/* Maps through a data file of meuns and display then on the page
        to see info in the datafile go MenuData.js */}
        {menuData.map((product, index) => { 
          return (
            <MenuItemCard key={index}>
              <MenuItemImg src={product.img} alt={product.alt} />
              <MenuItemInfo>
                <MenuItemName>{product.name}</MenuItemName>
                <MenuItemDesc>{product.desc}</MenuItemDesc>
                <MenuItemPrice>{product.price}</MenuItemPrice>
                <MenuButton>{product.button}</MenuButton>
              </MenuItemInfo>
            </MenuItemCard>
          );
        })}
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu;
