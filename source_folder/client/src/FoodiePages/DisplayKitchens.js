import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
// import { Container, Button } from "../globalStyles";
import Products from "../components/Products"
import { productData, productDataTwo } from "../components/Products/data"





class DisplayKitchens extends Component {
    render() {
        return (
            <div>
                 <Router>
      
      <Products heading='Choose your favorite' data={productData} />
   
      <Products heading='Sweet Treats for You' data={productDataTwo} />
   
    </Router>
            </div>
        )
        
       
}
}


export default DisplayKitchens
