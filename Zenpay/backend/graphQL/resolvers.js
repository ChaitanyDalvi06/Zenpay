import Payments from '../models/Payment.js';

export const resolvers = {
    Query: {
        GetPayments: async () => await Payments.find({}, 'payeeName amount status'),
    },
};