import React, { useState,Component,} from "react";

import { BrowserRouter as Router } from 'react-router-dom';
//import Menu from "../components/Menu/Menu"
import { MenuData1, MenuData2 } from "../components/Menu/MenuData"
import {
    MenuContainer,
    MenuWrapper,
    MenuHeading,
    MenuItemName,
    MenuItemCard,
    MenuItemImg,
    MenuItemInfo,
    MenuItemDesc,
    MenuItemPrice,
    MenuButton
  } from '../components/Menu/MenuElements';


// All of this file corresponds to the Menu folder 
class DisplayMenu2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ItemName: "",
            Price: "",
            IMG: "",
            Desc:""
        }
    }
     
   

     
    render() {
        // console.log(this.props.auth.cart)
        return (
            <div>
                  <Router> 
        {/* // create an instance of the menu component using the data from /components/Menu/MenuData" for the menuData  */}
       <Menu heading='Menu' menuData={MenuData1} cart ={this.props.auth.cart} /> 
       
       <Menu heading='Menu' menuData={MenuData2} cart ={this.props.auth.cart} />
   
     </Router> 
            </div>
        )
        
       
}
}



const Menu = ({ heading, menuData,cart} ) =>   {

const [menuItemName, setMenuItemName] = useState("2");
const [menuItemPrice, setMenuItemPrice] = useState("");
const [menuItemImg, setMenuItemImg] = useState("");
const [menuItemDesc, setMenuItemDesc] = useState("");
const [cartTotal, setCartTotal] = useState(0);

console.log(cart)

    let updateState = menuItem =>{
        setMenuItemName(menuItem.name)
        setMenuItemPrice(menuItem.price)
        setMenuItemImg(menuItem.img)
        setMenuItemDesc(menuItem.desc)
        setCartTotal(prevCartTotal => prevCartTotal + parseFloat(menuItem.price.substring(1)))

    }
      let addToCart = menuItem => {
        updateState(menuItem)
     
       cart.push( [{
                "Item": menuItemName,
                 "Price": menuItemPrice,
                 "IMG": menuItemImg,
                 "Desc": menuItemDesc
               }])
        console.log(cart)
     
       
      }
    
   

    return (
     
     
      <MenuContainer>
  
         {/* The text of the heading for the menu can be found in DisplayMenu.js inside of the FoodiePages folder  */}
        <MenuHeading>{heading}</MenuHeading>  
        
        <MenuWrapper>
          {/* loops through of the Menu itmes and their deatials which can be found at 
          to see info in the datafile go MenuData.js */}
          {menuData.map((menuItem, index) => { 
            // there must be a key/index when a map function is done in react
            return ( 
              <MenuItemCard key={index}>
                <MenuItemImg src={menuItem.img} alt={menuItem.alt} />
                <MenuItemInfo>
                  <MenuItemName>{menuItem.name}</MenuItemName>
                  <MenuItemDesc>{menuItem.desc}</MenuItemDesc>
                  <MenuItemPrice>{menuItem.price}</MenuItemPrice>
                    {/* {<MenuButton  onClick={() => addToCart(menuItem)} >{menuItem.button}</MenuButton> }   */}
                    {/* {console.log(cartTotal)}  */}
                    
                    {<MenuButton  onClick={() =>  addToCart(menuItem) } >{menuItem.button}</MenuButton> } 
                    {console.log(cartTotal)} 
                    {/* { {console.log(menuItemDesc,menuItemName,menuItemPrice)} */}
                  
                   
                   
                </MenuItemInfo>
              </MenuItemCard>
            
            
             
              
            );
          })}
    
        </MenuWrapper>
      </MenuContainer>
      
    );
        }


export default DisplayMenu2