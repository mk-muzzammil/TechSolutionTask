import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs/promises';

/**
 * @desc    Get all staff members
 * @route   GET /api/staff
 * @access  Public
 */
export const getAllStaff = async (req: Request, res: Response) => {
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
    console.error('Error fetching staff:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Unable to fetch staff members.',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

/**
 * @desc    Get single staff member by ID
 * @route   GET /api/staff/:id
 * @access  Public
 */
export const getStaffById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Read staff data from JSON file
    const staffFilePath = path.join(__dirname, '../../data/staff.json');
    const staffData = await fs.readFile(staffFilePath, 'utf-8');
    const staffList = JSON.parse(staffData);

    // Find staff member by ID
    const staff = staffList.find((member: { id: string }) => member.id === id);

    if (!staff) {
      return res.status(404).json({
        success: false,
        message: 'Staff member not found',
      });
    }

    res.status(200).json({
      success: true,
      data: staff,
    });
  } catch (error: unknown) {
    console.error('Error fetching staff member:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Unable to fetch staff member.',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
