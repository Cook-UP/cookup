const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config({path: path.join(__dirname,'.env')});

//Route objects
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const kitchenRouter = require('./routes/kitchen');
const ordersRouter = require('./routes/orders');

const dbutils = require('./dbutil');
const Kitchen = require('./models/kitchenModel');

var app = express();

console.log("express loaded");


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
	origin: '*'
}));

app.use('/', indexRouter);// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade')

//API ROUTES
app.use('/kitchen',kitchenRouter);
app.use('/orders',ordersRouter);
app.use('/users', usersRouter);

// stripeData
const stripe = require('stripe')('sk_test_51IpH4zHPRikjaZV99Dfa0I7xy7jrw5Yvr9TnvEqGLvJX46ycZuYOArmaLxY06soQvo2wuPHrjHVtNkxqVwurBEM400MLxfZTMh');


const YOUR_DOMAIN = 'http://localhost:3001';

app.post('/create-checkout-session', async (req, res) => {
  const cartData = req.body.data; // Post data

  console.log("cart data:");
  console.log(cartData);

  // console.log("\nparsed:");
  // console.log(JSON.parse(cartData));

  //Restructure POST data into format accepted by Stripe
  const lineItems = cartData.map(cartItem => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: cartItem.name,
          images: [
            cartItem.imgS3
          ],
        },
        unit_amount: Math.floor(cartItem.price*100)
      },
      quantity: cartItem.qty
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,  //From cartData
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ id: session.id });
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});





module.exports = app;
