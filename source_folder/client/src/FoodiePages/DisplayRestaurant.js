import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Restaurant from "../components/Restaurant/Restaurant"
import { RestaurantData1, RestaurantData2, RestaurantData3 } from "../components/Restaurant/RestaurantData"

// All of this file corresponds to the Menu folder 
class DisplayRestaurant extends Component {
    render() {
        return (
            <div>
                 <Router>
        {/* // create an instance of the restaurant component using the data from /components/Restaurant/RestaurantData" for the RestaurantData  */}
      <Restaurant heading='Restaurant' RestaurantData={RestaurantData1} />
      <Restaurant heading='Restaurant' RestaurantData={RestaurantData2} />
      <Restaurant heading='Restaurant' RestaurantData={RestaurantData3} />
   
    </Router>
            </div>
        )
        
       
}
}


export default DisplayRestaurant