import React from "react";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../redux/ShoppingCart/shoppingCart-Actions";


import {
  MenuItemName,
  MenuItemCard,
  MenuItemImg,
  MenuItemInfo,
  MenuItemDesc,
  MenuItemPrice,
  MenuButton,
} from "./MenuElements"
const MenuItem = ({ product, addToCart }) => {
  return (
    <MenuItemCard>
      <MenuItemImg src={product.imgS3} />
      <MenuItemInfo>
        <MenuItemName>{product.name}</MenuItemName>
        <MenuItemDesc>{product.desc}</MenuItemDesc>
        <MenuItemPrice>{product.price}</MenuItemPrice>
        <MenuButton
          onClick={() => addToCart(product.id)}
        >
          Add To Cart
        </MenuButton>
      </MenuItemInfo>
    </MenuItemCard>
  );
};
// Coonects to the Menu component to the global state in Redux 
// with this type of connection MenuItem component can put things in to the golbal state through the addToCart method 
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(MenuItem);
