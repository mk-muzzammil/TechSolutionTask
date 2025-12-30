# Backend API - Node.js + Express + MongoDB + TypeScript

## 📦 Configured Packages

| Package | Purpose |
|---------|---------|
| **Express** | Web framework for REST APIs |
| **Mongoose** | MongoDB object modeling |
| **TypeScript** | Type safety and modern JavaScript |
| **CORS** | Cross-origin resource sharing (frontend port 3000) |
| **dotenv** | Environment variable management |
| **tsx** | TypeScript execution with hot reload |

## 📁 Folder Structure

```
Backend/
├── src/
│   ├── config/
│   │   ├── config.ts        # Environment variables configuration
│   │   └── database.ts      # MongoDB connection setup
│   │
│   ├── models/              # Mongoose schemas and models
│   │                        # Define your data structures here
│   │
│   ├── controllers/         # Request handlers
│   │                        # Handle HTTP requests and responses
│   │
│   ├── Routes/              # API route definitions
│   │                        # Define your API endpoints here
│   │
│   ├── services/            # Business logic layer
│   │                        # Reusable business logic functions
│   │
│   ├── middlewares/         # Custom Express middlewares
│   │                        # Authentication, validation, etc.
│   │
│   ├── validators/          # Request validation schemas
│   │                        # Validate incoming request data
│   │
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Shared types and interfaces
│   │
│   ├── utils/               # Helper/utility functions
│   │                        # Reusable utility functions
│   │
│   ├── app.ts               # Express app configuration
│   │                        # Middleware, routes, CORS setup
│   │
│   └── server.ts            # Server entry point
│                            # Starts server and connects to DB
│
├── dist/                    # Compiled JavaScript output
├── .env                     # Environment variables (create this)
├── .env.example             # Environment variables template
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 🚀 Setup & Commands

### 1. Create `.env` file:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/your_database_name
FRONTEND_URL=http://localhost:3000
```

### 2. Available Commands:
```bash
pnpm dev        # Development mode with hot reload
pnpm build      # Compile TypeScript to JavaScript
pnpm start      # Run production build
```

## 🔧 Configuration

| Setting | Value |
|---------|-------|
| **Module System** | CommonJS |
| **TypeScript Target** | ES2020 |
| **Output Directory** | `dist/` |
| **CORS Enabled** | http://localhost:3000 |
| **Hot Reload** | tsx watch |

## 📡 Default Endpoints

- `GET /health` - Health check
- `GET /api` - API status

## 🏗️ MVC Pattern Example

### 1. Create Model (`src/models/User.model.ts`)
```typescript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const User = mongoose.model('User', userSchema);
```

### 2. Create Controller (`src/controllers/user.controller.ts`)
```typescript
import { Request, Response } from 'express';
import { User } from '../models/User.model';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json({ success: true, data: users });
};
```

### 3. Create Route (`src/Routes/user.routes.ts`)
```typescript
import express from 'express';
import { getUsers } from '../controllers/user.controller';

const router = express.Router();
router.get('/', getUsers);

export default router;
```

### 4. Register Route (`src/app.ts`)
```typescript
import userRoutes from './Routes/user.routes';
app.use('/api/users', userRoutes);
```

## ✅ Ready to Build REST APIs!
