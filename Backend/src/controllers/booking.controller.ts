import { Request, Response, NextFunction } from 'express';
import { Booking } from '../models/Booking.model';
import { AppError } from '../middlewares/errorHandler';

/**
 * @desc    Create a new booking
 * @route   POST /api/bookings
 * @access  Public
 */
export const createBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, email, phoneNumber, selectType, selectRoom, checkIn, checkOut, message } = req.body;

    // Create new booking
    const booking = await Booking.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      selectType,
      selectRoom,
      checkIn,
      checkOut,
      message: message || '',
    });

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: booking,
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * @desc    Get all bookings
 * @route   GET /api/bookings
 * @access  Public (can be protected later with auth middleware)
 */
export const getAllBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * @desc    Get single booking by ID
 * @route   GET /api/bookings/:id
 * @access  Public (can be protected later with auth middleware)
 */
export const getBookingById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return next(new AppError('Booking not found', 404));
    }

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error: any) {
    next(error);
  }
};
