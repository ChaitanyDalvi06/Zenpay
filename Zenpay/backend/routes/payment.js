import express from 'express';
import { createPayment, getPayments, getPaymentById } from '../controllers/paymentController.js';

const router = express.Router();

// Route to create a payment
router.post('/payment', createPayment);

// Route to get all payments
router.get('/payments', getPayments);

// Route to get a payment by ID
router.get('/payment/:id', getPaymentById);

export default router;
