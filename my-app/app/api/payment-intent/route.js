import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { cartItems } = await req.json();
  let amount = 0;
  for (const item of cartItems) {
    const res = await fetch(`https://dummyjson.com/products/${item.id}`);
    const product = await res.json();
    const priceInCents = Math.round(product.price * 100);
    amount += priceInCents * item.quantity;
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
