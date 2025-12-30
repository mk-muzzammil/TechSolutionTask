import express from 'express';
import { createBooking, getAllBookings, getBookingById } from '../controllers/booking.controller';
import { validateBooking } from '../validators/booking.validator';

const router = express.Router();

// @route   POST /api/bookings
// @desc    Create a new booking
// @access  Public
router.post('/', validateBooking, createBooking);

// @route   GET /api/bookings
// @desc    Get all bookings
// @access  Public (can be protected later)
router.get('/', getAllBookings);

// @route   GET /api/bookings/:id
// @desc    Get single booking by ID
// @access  Public (can be protected later)
router.get('/:id', getBookingById);

export default router;
