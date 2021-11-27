import React from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

function PaymentForm() {
  const elements = useElements();
  const stripe = useStripe();
  const onSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements.getElement(CardElement);


    if (!stripe || !elements) {
      return;
    }

    console.log("payment intent created");

    //create payment intent on server

    const { clientSecret } = await fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        paymentMethodType: "card",
        currency: "eur",
      }),
    }).then((r) => r.json());

    //confirm payment on the client

    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    console.log(`paymentIntent (${paymentIntent.id}): ${paymentIntent.status}`);

    
  };
  return (
    <form onSubmit={onSubmit}>
      <CardElement />
      <button>Pay</button>
    </form>
  );
}

export default PaymentForm;
