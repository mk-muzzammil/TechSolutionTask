// Express app configuration
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { config } from './config/config';
import bookingRoutes from './Routes/booking.routes';
import staffRoutes from './Routes/staff.routes';
import hotelRoutes from './Routes/hotel.routes';
import { errorHandler, notFound } from './middlewares/errorHandler';

const app: Application = express();

// CORS Configuration - Allow requests from frontend
app.use(
  cors({
    origin: config.frontendUrl,
    credentials: true,
  })
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// API Routes - Add your routes here
app.get('/api', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API is working' });
});

// Booking routes
app.use('/api/bookings', bookingRoutes);

// Staff routes
app.use('/api/staff', staffRoutes);

// Hotel routes
app.use('/api/hotels', hotelRoutes);

// Add your routes here as you create them
// Example: app.use('/api/users', userRoutes);

// 404 Not Found handler - must be after all routes
app.use(notFound);

// Global Error Handler - must be last middleware
app.use(errorHandler);

export default app;
