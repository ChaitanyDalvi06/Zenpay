import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export async function createPaymentMethod(cardElement) {
  const stripe = await stripePromise;
  if (!stripe) throw new Error('Stripe failed to load');

  const { paymentMethod, error } = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
  });

  if (error) {
    throw new Error(error.message);
  }

  return paymentMethod;
}

export async function processPayment(amount, paymentMethodId) {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/payments/process`, {
    amount,
    paymentMethodId,
  });
  return response.data;
}

