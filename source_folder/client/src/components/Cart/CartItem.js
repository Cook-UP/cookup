import React, { useState } from "react";
import { connect } from "react-redux";

import { Button } from "../../globalStyles";
import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/ShoppingCart/shoppingCart-Actions";

//../../redux/Shopping/shopping-actions"
import {
  CartItemQty,
  MiniMenuItemCard,
  MiniMenuItemImg,
  CartItemActions,
  CartItemInfo,
  CartItemName,
  CartItemDesc,
  CarttemPrice,
  StyledMiniInput,
} from "../../components/Menu/MenuElements";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  // handles the change when the qty of an item in the cart changes
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  return (
    <div>
      <MiniMenuItemCard>
        <MiniMenuItemImg src={item.imgS3} />

        <CartItemInfo>
          <CartItemName>{item.name}</CartItemName>

          <CarttemPrice>{item.price}</CarttemPrice>
        </CartItemInfo>
        <CartItemDesc>{item.desc}</CartItemDesc>
        <div>
          <CartItemActions>
            <CartItemQty>
              <label htmlFor="qty">Qty</label>
              <StyledMiniInput
                min="1"
                type="number"
                id="qty"
                name="qty"
                value={input}
                onChange={onChangeHandler}
              />

              <Button onClick={() => removeFromCart(item.id)}> delete</Button>
            </CartItemQty>
          </CartItemActions>
        </div>
      </MiniMenuItemCard>
    </div>
  );
};
// Coonects to the Menu component to the global state in Redux
// with this type of connection MenuItem component can put things in to the golbal state through the addToCart method

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
