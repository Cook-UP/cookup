import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from "../components/Menu/Menu"
import { MenuData1, MenuData2 } from "../components/Menu/MenuData"



// All of this file corresponds to the Menu folder 
class DisplayMenu extends Component {
    render() {
        return (
            <div>
                 <Router>
      
      <Menu heading='Menu' menuData={MenuData1} />
    
      <Menu heading='Menu' menuData={MenuData2} />
   
    </Router>
            </div>
        )
        
       
}
}


export default DisplayMenu
