// Environment configuration
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/TechSolutionsTask',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
};

