import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// This componets will placed in the navbar and display how many items are in the carts
const CartCounter = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0); // set counter to a state so it keeps refeshing

  // updates  the state value based on weahter the cart quantity of items changes
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return <div>Cart ({cartCount})</div>;
};
// connnects this component to the Redux global state
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(CartCounter);
