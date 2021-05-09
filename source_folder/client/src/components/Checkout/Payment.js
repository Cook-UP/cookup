import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from "react-redux";
//import "./App.css";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IpH4zHPRikjaZV9x4nCTlYk7hm0ds5X5o2QMOha8tb5xkyxcs8ktYHaFJmQVfkyHmars9bvW7h1bnoqeQlFTZwt00ylpTpZjo");

const HOSTNAME = "http://localhost:3000";

const ProductDisplay = ({ handleClick }) => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <button type="button" id="checkout-button" role="link" onClick={handleClick}>
      Checkout
    </button>
  </section>
);
const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);
function Payment({ cart }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  const handleClick = async (event) => {
    const stripe = await stripePromise;

    console.log(cart);

    const response = await fetch(`${HOSTNAME}/create-checkout-session`, {
      method: "POST",
      body: JSON.stringify({data: cart}),
      headers: {
        'Content-Type': 'application/json'
      }
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
  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Payment);
