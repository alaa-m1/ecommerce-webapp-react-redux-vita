require("dotenv").config();
const stripe = require("stripe")(import.meta.env.VITE_REACT_APP_STRIPE_SK);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentProcess = await stripe.paymentIntents.create({
      amount: parseInt(amount),
      currency: "usd",
      // payment_method_type: ["card"],
      // automatic_payment_methods: {enabled: false},
    });
    return { statusCode: 200, body: JSON.stringify(paymentProcess) };
  } catch (error) {
    console.log(error);
    return { statusCode: 400, body: JSON.stringify({ error }) };
  }
};
