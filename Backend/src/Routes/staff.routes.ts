import express from 'express';
import { getAllStaff, getStaffById } from '../controllers/staff.controller';

const router = express.Router();

// @route   GET /api/staff
// @desc    Get all staff members
// @access  Public
router.get('/', getAllStaff);

// @route   GET /api/staff/:id
// @desc    Get single staff member by ID
// @access  Public
router.get('/:id', getStaffById);

export default router;
