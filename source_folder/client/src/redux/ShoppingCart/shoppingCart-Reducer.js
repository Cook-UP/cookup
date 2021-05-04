import * as actionTypes from "./shoppingCart-Types";
//  reducers are connected to the store so that the store can be manipulated and change the global state in store 
const INITIAL_STATE = {
  products: [
    {
      
      alt: 'lasagna',
      name: 'Lasagna',
      desc:
        'Marinara sauce, basil, ground beef, roma tomatoes',
      price: 19.99,
      button: 'Add to Cart',
      id:1,
      imgS3:  "https://cookup-s3.s3.us-east-2.amazonaws.com/7664292.jpg", // Link to the image that is stored in S3 
    },
    {
      
      alt: 'ziti',
      name: 'Baked Ziti',
      desc:
        ' Marinara sauce, basil, italian sausage, roma tomatoes ',
      price: 15.99,
      button: 'Add to Cart',
      id:2,
      imgS3:"https://cookup-s3.s3.us-east-2.amazonaws.com/5635931.jpg"
    },
    {
     
      alt: 'Pizza',
      name: ' Classic Spaghetti',
      desc:
        ' Marinara sauce, basil, italian sausage, roma tomatoes',
      price: 12.99,
      button: 'Add to Cart',
      id:3,
      imgS3:" https://cookup-s3.s3.us-east-2.amazonaws.com/6871093.jpg"
    },
    {
      
      alt: 'Donuts',
      name: 'Doughlicious',
      desc:
        'Belgian chocolate glazed donuts covered in icing with sprinkles',
      price: 9.99,
      button: 'Add to Cart',
      id:4,
      imgS3:"https://cookup-s3.s3.us-east-2.amazonaws.com/2238715.jpg"
    },
    {
     
      alt: 'Ice Cream',
      name: 'Chocolate Lava Cake',
      desc:
        'Vanilla ice cream covered with chocolate glaze',
      price: 11.99,
      button: 'Add to Cart',
      id:5,
      imgS3:"https://cookup-s3.s3.us-east-2.amazonaws.com/4535286.jpg"
    },
    {
      
      alt: 'Brownie',
      name: 'Brownies',
      desc:
        'Double fudge brownie squares with a gooey  center',
      price: 9.99,
      button: 'Add to Cart',
      id:6,
      imgS3:"https://cookup-s3.s3.us-east-2.amazonaws.com/365585.jpg"
    }

  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
