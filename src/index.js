import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

(async () => {
  // const { publishableKey } = await fetch("/config").then((r) => r.json());

  const stripePromise = loadStripe('pk_test_51JzqU5IgrivdaqSjMdJcSOqHwJKytn0aBbKUtEUJSJG1f6VZUlxBJr5A8ahLkv9sABqf8UtDamgySrCIl3mtY1Ng00ViMrLoy3');

  ReactDOM.render(
    <React.StrictMode>
      <Elements stripe={stripePromise} >
        <App />
      </Elements>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
