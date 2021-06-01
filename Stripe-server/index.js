const express = require('express');

const app = express();
const cors = require("cors");

const stripe = require('stripe')('sk_test_51Ix6SoCe3oEtfvQvan5olRkX31xi66bt8zNlhUpnYSUoF9vTtstMJZ0hd8Jo0RSdhjjXjDqfBOfX8NvzPe1AdohM004k1OfLbf')

app.use(cors())


app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
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
