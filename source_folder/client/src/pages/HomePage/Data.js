// Strcture fot the Frist section of the homepage with a white background
export const homeSectionOne = {
  primary: false,
  lightBg: true, // Trues determine whether the background is white or blue true means white
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Cookup",
  headline: "Homecooked Meals Delivered To Your Door",
  buttonLabel: "Get Stated",
  imgStart: "start",
  img: require("../../images/FoodStock.jpeg").default,
  alt: "Vault",
  start: "true", // start being true determine that the image will appear on the left
  linkTo:"/DisplayRestaurant"
};
// For the Second section with a bluebackgground
export const homeSectionTwo = {
  primary: false,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Us",
  headline:
    "The leading delivery service for home cooked meals Cookup is innovating the industry",
  description: "Available on the web and mobile devices",
  buttonLabel: "Learn More",
  imgStart: "",
  img: require("../../images/CookupLogo.png").default,
  alt: "Credit Card",
  start: "",
};

export const homeSectionThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  headline: "Enjoy All The Flavors Your Nieghborhood Has To Offer And Give Them A Review",
  imgStart: "start",
  img: require("../../images/multicultural_food.jpg").default,
  alt: "Vault",
  start: "true",
  buttonLabel: "Review",
  linkTo:"/Review"
};



