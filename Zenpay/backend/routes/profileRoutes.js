import express from 'express';
import { createProfile } from '../controllers/authController.js';

const router = express.Router();

router.post('/profile', createProfile);

export default router;