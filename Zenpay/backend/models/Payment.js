import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  payeeName: { type: String, required: true }, // New field for payee name
  mobileNumber: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Validation for any 10-digit number
      },
      message: props => `${props.value} is not a valid mobile number!`
    }
  }, // New field for mobile number
  amount: { 
    type: Number, 
    required: true, 
    min: [1, 'Amount must be greater than 0'] // Ensure the amount is a positive number
  }, // New field for amount
  status: { 
    type: String, 
    enum: ['successful', 'failed'], // Only 'successful' or 'failed' as valid status values
    required: true // Status must be set to either 'successful' or 'failed'
  }, // New field for payment status
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;
