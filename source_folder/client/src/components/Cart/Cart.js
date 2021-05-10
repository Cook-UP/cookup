import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
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

const stripePromise = loadStripe(
  "pk_test_51IpH4zHPRikjaZV9x4nCTlYk7hm0ds5X5o2QMOha8tb5xkyxcs8ktYHaFJmQVfkyHmars9bvW7h1bnoqeQlFTZwt00ylpTpZjo"
);

const HOSTNAME = "http://localhost:3000";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [user, setUser] = useState(0);

  useEffect(() => {
    // get the Users Info from Amazon Conginto Local Storage
    Auth.currentSession()
      .then((data) => setUser(data.idToken.payload)) // saves  cognito user into into state
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

  const mongoDBCreateOrder = () => {
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

  const sendCartDataToStripe = async (event) => {
    const stripe = await stripePromise;

    console.log(cart);

    const response = await fetch(`${HOSTNAME}/create-checkout-session`, {
      method: "POST",
      body: JSON.stringify({ data: cart }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    //redirect--
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  const handleClick = () => {
    sendCartDataToStripe();
    mongoDBCreateOrder();
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
          <Button onClick={handleClick}>Checkout</Button>
          {/* <Link to="/Checkout">
            <Button>Proceed To Checkout</Button>
          </Link> */}
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
