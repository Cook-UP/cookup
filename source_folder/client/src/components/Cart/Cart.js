import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
} from "../../components/PageStructure/FormStyle/Form.elements";

import {
  CartDisplay,
  CartDisplayPrice,
} from "../../components/Menu/MenuElements";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    /* dynamically Displays the total # of items and total price of the cart */
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div>
      <GlobalFormStyle />
      <StyledFormWrapper>
        <StyledForm>
          {/* Displays all itmes in the cart on the left side */}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </StyledForm>
        <CartDisplay>
          {/* Displays the Cart Summar on the right  side */}
          <h4>Cart Summary</h4>
          <CartDisplayPrice>
            <span>TOTAL: ({totalItems} items)</span>
            <span>$ { Math.round(totalPrice * 100) / 100}</span>
             
          </CartDisplayPrice>
          <Link to="/Checkout">
            <Button>Proceed To Checkout</Button>
          </Link>
        </CartDisplay>
      </StyledFormWrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
