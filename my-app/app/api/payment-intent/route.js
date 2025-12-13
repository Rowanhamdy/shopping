import Stripe from "stripe";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { amount } = await req.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
