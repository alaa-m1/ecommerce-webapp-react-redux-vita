import {loadStripe} from '@stripe/stripe-js';

export const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY ?? "");
// export const stripeOptions = {
//     clientSecret: import.meta.env.STRIPE_SK ?? "",
//   };
// export const stripeOptions = {
//     // clientSecret:  `${import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY}_secret_${import.meta.env.VITE_REACT_APP_STRIPE_SK}`
//     clientSecret:  `pi_1Gt0582eZvKYlo2CGSidzWqK_secret_oXf7YqqAuu7ZTT34ELNOKUgCB`
//   };

  export const stripeOptions: any = {
    mode: 'payment',
    currency: 'usd',
    amount: 1000,
  };