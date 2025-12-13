import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // add your secret key in .env

export async function POST(req) {
  const { amount } = await req.json(); // amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
