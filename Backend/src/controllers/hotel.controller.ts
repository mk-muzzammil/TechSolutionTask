import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

/**
 * Get all hotels from hotels.json file
 */
export const getAllHotels = async (req: Request, res: Response) => {
  try {
    const hotelsPath = path.join(__dirname, '../../data/hotels.json');
    
    fs.readFile(hotelsPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading hotels.json:', err);
        return res.status(500).json({
          success: false,
          message: 'Failed to read hotels data',
        });
      }

      const hotels = JSON.parse(data);
      
      res.status(200).json({
        success: true,
        count: hotels.length,
        data: hotels,
      });
    });
  } catch (error) {
    console.error('Error in getAllHotels:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

/**
 * Get single hotel by ID from hotels.json file
 */
export const getHotelById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const hotelsPath = path.join(__dirname, '../../data/hotels.json');
    
    fs.readFile(hotelsPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading hotels.json:', err);
        return res.status(500).json({
          success: false,
          message: 'Failed to read hotels data',
        });
      }

      const hotels = JSON.parse(data);
      const hotel = hotels.find((h: { id: string }) => h.id === id);
      
      if (!hotel) {
        return res.status(404).json({
          success: false,
          message: 'Hotel not found',
        });
      }

      res.status(200).json({
        success: true,
        data: hotel,
      });
    });
  } catch (error) {
    console.error('Error in getHotelById:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
