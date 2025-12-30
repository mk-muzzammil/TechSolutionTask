import express from 'express';
import { getAllHotels, getHotelById } from '../controllers/hotel.controller';

const router = express.Router();

// GET /api/hotels - Get all hotels
router.get('/', getAllHotels);

// GET /api/hotels/:id - Get hotel by ID
router.get('/:id', getHotelById);

export default router;
