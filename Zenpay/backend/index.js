import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import paymentRoutes from './routes/payment.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { paymentTypeDefs } from './graphQL/typedefs.js';
import { resolvers } from './graphQL/resolvers.js';

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/Slice')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api', profileRoutes);
app.use('/api/payment', paymentRoutes);

// Apollo Server
const server = new ApolloServer({
    typeDefs: paymentTypeDefs,
    resolvers: resolvers,
});
await server.start();
app.use('/graphql',expressMiddleware(server));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});