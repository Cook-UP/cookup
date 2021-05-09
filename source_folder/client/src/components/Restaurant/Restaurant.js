import React from 'react';


import {
  RestaurantContainer,
  RestaurantWrapper,
  RestaurantHeading,
  RestaurantItemName,
  RestaurantItemCard,
  RestaurantItemImg,
  RestaurantItemInfo,
  RestaurantItemDesc,
  RestaurantButton
} from './RestaurantElements';



const Restaurant = ({ heading, RestaurantData} ) =>   {

    return (

        <RestaurantContainer>

        {/* The text of the heading for the menu can be found in DisplayMenu.js inside of the FoodiePages folder  */}
       <RestaurantHeading>{heading}</RestaurantHeading>  
       
       <RestaurantWrapper>
         {/* loops through of the Restaurant itmes and their details which can be found at 
         to see info in the datafile go RestaurantData.js */}
         {RestaurantData.map((RestaurantItem, index) => { 
           // there must be a key/index when a map function is done in react
           return ( 
             <RestaurantItemCard key={index}>
               <RestaurantItemImg src={RestaurantItem.img} alt={RestaurantItem.alt} />
               <RestaurantItemInfo>
                 <RestaurantItemName>{RestaurantItem.name}</RestaurantItemName>

                 <RestaurantItemDesc>{RestaurantItem.desc}</RestaurantItemDesc>
      
                
                 <RestaurantButton onClick={() => window.location= '/DisplayMenu'}>{RestaurantItem.button}</RestaurantButton>
                

                 
               </RestaurantItemInfo>
             </RestaurantItemCard>
           
            
            
             
           );
         })}
      { console.log({Greeting})}
       </RestaurantWrapper>
     </RestaurantContainer>

    );
        }
        const Greeting = props => <h1>{props.auth.user}</h1>;


export default Restaurant;