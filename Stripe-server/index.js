const express = require('express');
require("dotenv").config()
const bodyParser = require('body-parser')

const app = express();
const cors = require("cors");

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
app.use(cors())
//json hantera
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())


app.post('/create-checkout-session', async (req, res) => {
  
console.log("req body" , req.body)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: req.body.name,
          },
          unit_amount: req.body.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/card',
    cancel_url: 'http://localhost:4242/cancel.html',
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));
