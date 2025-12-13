"use client";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // 1. Create Payment Intent (server)
    const res = await fetch("/api/payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 2000 }),
    });

    const { clientSecret } = await res.json();

    // 2. Confirm card payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    setLoading(false);

    if (result.error) {
      alert(result.error.message);
    } else {
      alert("Payment Successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-5 mb-40">
      <label className="font-semibold">Card Details</label>
      <div className="border p-3 rounded-lg">
        <CardElement />
      </div>

      <button
        disabled={!stripe || loading}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}
