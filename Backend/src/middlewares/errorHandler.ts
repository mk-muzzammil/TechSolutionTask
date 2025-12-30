import { Request, Response, NextFunction } from 'express';

/**
 * Custom Error class with status code
 */
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}


export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Default error values
  let statusCode = 500;
  let message = 'Internal Server Error';
  let errors: string[] | undefined;

  // Check if it's our custom AppError
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err.name === 'ValidationError') {
    // Mongoose validation error
    statusCode = 400;
    message = 'Validation Error';
    errors = Object.values((err as any).errors).map((e: any) => e.message);
  } else if (err.name === 'CastError') {
    // Mongoose bad ObjectId
    statusCode = 400;
    message = 'Invalid ID format';
  } else if ((err as any).code === 11000) {
    // Mongoose duplicate key error
    statusCode = 400;
    message = 'Duplicate field value entered';
  } else if (err.name === 'JsonWebTokenError') {
    // JWT error
    statusCode = 401;
    message = 'Invalid token';
  } else if (err.name === 'TokenExpiredError') {
    // JWT expired
    statusCode = 401;
    message = 'Token expired';
  } else {
    // Generic error
    message = err.message || message;
  }

  // Log error in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error 💥:', err);
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    message,
    errors,
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
      error: err,
    }),
  });
};


export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(
    `Route ${req.originalUrl} not found`,
    404
  );
  next(error);
};

/**
 * Async handler wrapper
 * Wraps async route handlers to catch errors and pass to error handler
 */
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
