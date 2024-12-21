import Payment from '../models/Payment.js'; // Import the Payment model

// Controller for creating a payment
export const createPayment = async (req, res) => {
  try {
    const { payeeName, mobileNumber, amount, status } = req.body;

    // Create a new payment instance
    const newPayment = new Payment({
      payeeName,
      mobileNumber,
      amount,
      status
    });

    // Save the payment to the database
    const savedPayment = await newPayment.save();

    return res.status(201).json({
      message: 'Payment created successfully!',
      payment: savedPayment
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating payment', error: error.message });
  }
};

// Controller for fetching all payments
export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find(); // Fetch all payments from the database
    return res.status(200).json({ payments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching payments', error: error.message });
  }
};

// Controller for fetching a specific payment by ID
export const getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    return res.status(200).json({ payment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching payment', error: error.message });
  }
};
