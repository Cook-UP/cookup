import React from "react";
// Redux
import { connect } from "react-redux";

import MenuItem from "./MenuItem";
import {
  MenuContainer,
  MenuWrapper,
  MenuHeading,
} from "../../components/Menu/MenuElements";

const Menu = ({ products }) => {
  return (
    <MenuContainer>
      <MenuHeading>Menu</MenuHeading>
      <MenuWrapper>
        {products.map((product) => (
          <MenuItem key={product.id} product={product} heading="Menu" />
        ))}
      </MenuWrapper>
    </MenuContainer>
  );
};
// Coonects to the Menu compoonent to the global state in Redux
// it can only read from state it can put anything in state
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Menu);
