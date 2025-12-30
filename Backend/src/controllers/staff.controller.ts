import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs/promises';
import { AppError } from '../middlewares/errorHandler';

/**
 * @desc    Get all staff members
 * @route   GET /api/staff
 * @access  Public
 */
export const getAllStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Read staff data from JSON file
    const staffFilePath = path.join(__dirname, '../../data/staff.json');
    const staffData = await fs.readFile(staffFilePath, 'utf-8');
    const staff = JSON.parse(staffData);

    res.status(200).json({
      success: true,
      count: staff.length,
      data: staff,
    });
  } catch (error: unknown) {
    next(error);
  }
};

/**
 * @desc    Get single staff member by ID
 * @route   GET /api/staff/:id
 * @access  Public
 */
export const getStaffById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    // Read staff data from JSON file
    const staffFilePath = path.join(__dirname, '../../data/staff.json');
    const staffData = await fs.readFile(staffFilePath, 'utf-8');
    const staffList = JSON.parse(staffData);

    // Find staff member by ID
    const staff = staffList.find((member: { id: string }) => member.id === id);

    if (!staff) {
      return next(new AppError('Staff member not found', 404));
    }

    res.status(200).json({
      success: true,
      data: staff,
    });
  } catch (error: unknown) {
    next(error);
  }
};
