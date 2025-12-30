import { Request, Response } from 'express';
import { Booking } from '../models/Booking.model';

/**
 * @desc    Create a new booking
 * @route   POST /api/bookings
 * @access  Public
 */
export const createBooking = async (req: Request, res: Response) => {
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
    console.error('Error creating booking:', error);

    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

    // Handle other errors
    res.status(500).json({
      success: false,
      message: 'Server error. Unable to create booking.',
      error: error.message,
    });
  }
};

/**
 * @desc    Get all bookings
 * @route   GET /api/bookings
 * @access  Public (can be protected later with auth middleware)
 */
export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error: any) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Unable to fetch bookings.',
      error: error.message,
    });
  }
};

/**
 * @desc    Get single booking by ID
 * @route   GET /api/bookings/:id
 * @access  Public (can be protected later with auth middleware)
 */
export const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error: any) {
    console.error('Error fetching booking:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Unable to fetch booking.',
      error: error.message,
    });
  }
};
