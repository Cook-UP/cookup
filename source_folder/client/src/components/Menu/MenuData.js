
import lasagna from '../../images/lasagna.jpeg';
import ziti from '../../images/ziti.jpeg';
import spaghetti from '../../images/spaghetti.jpeg';
import chocolateLavaCake from '../../images/chocolateLavaCake.jpeg';
import Donut from '../../images/Donut.jpg';
import brownie from '../../images/brownie.jpeg';

export const MenuData1 = [
  {
    img: lasagna ,
    alt: 'lasagna',
    name: 'Lasagna',
    desc:
      'Marinara sauce, basil, ground beef, roma tomatoes',
    price: '$19.99',
    button: 'Add to Cart',
    id:1,
    imgS3:  "https://cookup-s3.s3.us-east-2.amazonaws.com/7664292.jpg", // Link to the image that is stored in S3 
  },
  {
    img: ziti,
    alt: 'ziti',
    name: 'Baked Ziti',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes ',
    price: '$15.99',
    button: 'Add to Cart',
    id:2,
    imgS3:"https://cookup-s3.s3.us-east-2.amazonaws.com/5635931.jpg"
  },
  {
    img: spaghetti,
    alt: 'Pizza',
    name: ' Classic Spaghetti',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes',
    price: '$12.99',
    button: 'Add to Cart',
    id:3,
    imgS3:" https://cookup-s3.s3.us-east-2.amazonaws.com/6871093.jpg"
  }
];

export const MenuData2 = [
  {
    img: Donut,
    alt: 'Donuts',
    name: 'Doughlicious',
    desc:
      'Belgian chocolate glazed donuts covered in icing with sprinkles',
    price: '$9.99',
    button: 'Add to Cart',
    id:4,
    imgS3:"https://cookup-s3.s3.us-east-2.amazonaws.com/2238715.jpg"
  },
  {
    img: chocolateLavaCake,
    alt: 'Ice Cream',
    name: 'Chocolate Lava Cake',
    desc:
      'Vanilla ice cream covered with chocolate glaze',
    price: '$11.99',
    button: 'Add to Cart',
    id:5,
    imgS3:"https://cookup-s3.s3.us-east-2.amazonaws.com/4535286.jpg"
  },
  {
    img: brownie,
    alt: 'Brownie',
    name: 'Brownies',
    desc:
      'Double fudge brownie squares with a gooey  center',
    price: '$9.99',
    button: 'Add to Cart',
    id:6,
    imgS3:"https://cookup-s3.s3.us-east-2.amazonaws.com/365585.jpg"
  }
];
