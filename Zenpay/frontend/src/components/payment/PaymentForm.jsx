import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/stripe-js/pure';
import { processPayment } from '../../services/paymentService';

function PaymentForm({ amount, onSuccess, onError }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
      if (!stripe) throw new Error('Failed to load Stripe');

      const cardElement = document.querySelector('#card-element');
      if (!cardElement) throw new Error('Card element not found');

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        throw new Error(error.message);
      }

      await processPayment(amount, paymentMethod.id);
      onSuccess();
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <iframe src="http://localhost:5173" width="100%" height="1000px"></iframe>

    </>
    
  );
}

export default PaymentForm;

