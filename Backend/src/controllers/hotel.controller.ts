import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { AppError } from '../middlewares/errorHandler';

/**
 * Get all hotels from hotels.json file
 */
export const getAllHotels = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hotelsPath = path.join(__dirname, '../../data/hotels.json');
    
    fs.readFile(hotelsPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading hotels.json:', err);
        return next(new AppError('Failed to read hotels data', 500));
      }

      const hotels = JSON.parse(data);
      
      res.status(200).json({
        success: true,
        count: hotels.length,
        data: hotels,
      });
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get single hotel by ID from hotels.json file
 */
export const getHotelById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const hotelsPath = path.join(__dirname, '../../data/hotels.json');
    
    fs.readFile(hotelsPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading hotels.json:', err);
        return next(new AppError('Failed to read hotels data', 500));
      }

      const hotels = JSON.parse(data);
      const hotel = hotels.find((h: { id: string }) => h.id === id);
      
      if (!hotel) {
        return next(new AppError('Hotel not found', 404));
      }

      res.status(200).json({
        success: true,
        data: hotel,
      });
    });
  } catch (error) {
    next(error);
  }
};
