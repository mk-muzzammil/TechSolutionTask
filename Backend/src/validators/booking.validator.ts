import { Request, Response, NextFunction } from 'express';

export const validateBooking = (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, phoneNumber, selectType, selectRoom, checkIn, checkOut } = req.body;

  // Validation errors array
  const errors: string[] = [];

  // First Name validation
  if (!firstName || firstName.trim().length < 2) {
    errors.push('First name must be at least 2 characters');
  }

  // Last Name validation
  if (!lastName || lastName.trim().length < 2) {
    errors.push('Last name must be at least 2 characters');
  }

  // Email validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Please enter a valid email address');
  }

  // Phone Number validation
  if (!phoneNumber || phoneNumber.trim().length < 10) {
    errors.push('Phone number must be at least 10 digits');
  }

  // Select Type validation
  const validTypes = ['single', 'double', 'family', 'suite'];
  if (!selectType || !validTypes.includes(selectType)) {
    errors.push('Please select a valid type');
  }

  // Select Room validation
  const validRooms = ['deluxe', 'junior', 'family', 'presidential'];
  if (!selectRoom || !validRooms.includes(selectRoom)) {
    errors.push('Please select a valid room');
  }

  // Check-In validation
  if (!checkIn) {
    errors.push('Please select check-in date');
  }

  // Check-Out validation
  if (!checkOut) {
    errors.push('Please select check-out date');
  }

  // Date comparison validation
  if (checkIn && checkOut) {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    
    if (checkOutDate <= checkInDate) {
      errors.push('Check-out date must be after check-in date');
    }
  }

  // If there are validation errors, return them
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  // Validation passed, proceed to next middleware
  next();
};
