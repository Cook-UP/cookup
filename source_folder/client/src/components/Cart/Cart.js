import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "../../globalStyles";
import CartItem from "./CartItem";
import { Auth } from "aws-amplify";
import axios from "axios";
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
  const [user, setUser] = useState(0);

  useEffect(() => {
    // get the Users Info
    Auth.currentSession()
      .then((data) => setUser(data.idToken.payload))
      //.then((data) => console.log(data.idToken.payload.email))
      .catch((err) => console.log(err));
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

  const mySubmitHandler = () => {
    // url to the create order api
    let Api = "http://3.85.44.54:3000/orders/create";
    // place the name and qty of each  item in the cart into an array
    let items = cart.map((item) => {
      return {
        name: item.name,
        quantity: item.qty,
      };
    });

    let randomOrderID = parseInt(Math.random() * 10000000);

    // send the order to the Mongobd database
    axios
      .post(Api, {
        oID: randomOrderID,
        name: user.given_name,
        address: user.address.formatted,
        uID: user.sub,
        kID: "155",
        items: items,
        price: totalPrice,
      })
      .then(
        (response) => {
          console.log("The order has been created");
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

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
            <span>$ {Math.round(totalPrice * 100) / 100}</span>
          </CartDisplayPrice>

          {/* <Button onClick={mySubmitHandler}>Proceed To Checkout</Button> */}
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
