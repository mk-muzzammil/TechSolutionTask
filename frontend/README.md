# Frontend - Next.js + TypeScript + React Query + Zustand

## 📦 Configured Packages

| Package | Purpose |
|---------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type safety |
| **Axios** | HTTP client for API calls |
| **TanStack React Query** | Server state management & caching |
| **Zustand** | Client-side global state management |
| **Tailwind CSS** | Utility-first CSS framework |

## 📁 Folder Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   │
│   ├── components/             # Reusable React components
│   │                           # Create your UI components here
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── index.ts            # Export custom hooks here
│   │
│   ├── services/               # API service layer
│   │   ├── api.ts              # Axios instance (configured)
│   │   └── index.ts            # Export API client
│   │
│   ├── store/                  # Zustand stores
│   │   ├── app.store.ts        # App state (isLoading, isSidebarOpen)
│   │   └── index.ts            # Export stores
│   │
│   ├── lib/                    # Third-party library configs
│   │   ├── react-query.ts      # React Query client setup
│   │   ├── providers.tsx       # Client providers wrapper
│   │   └── index.ts            # Export lib configs
│   │
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts            # Shared types and interfaces
│   │
│   ├── utils/                  # Utility functions
│   │   ├── storage.ts          # LocalStorage helpers
│   │   └── index.ts            # Export utilities
│   │
│   └── constants/              # App constants
│       └── index.ts            # API URLs, config values
│
├── public/                     # Static assets
├── .env.local                  # Environment variables (create this)
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Setup & Commands

### 1. Create `.env.local` file:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

### 2. Available Commands:
```bash
pnpm dev        # Development mode with hot reload
pnpm build      # Build for production
pnpm start      # Run production build
pnpm lint       # Run ESLint
```

## 📖 Usage Examples

### 1. Using Zustand Store
```typescript
import { useAppStore } from '@/store';

function MyComponent() {
  const { isLoading, setLoading, toggleSidebar } = useAppStore();
  
  return (
    <button onClick={() => setLoading(true)}>
      {isLoading ? 'Loading...' : 'Load Data'}
    </button>
  );
}
```

### 2. Making API Calls with Axios
```typescript
import { apiClient } from '@/services';

// GET request
const fetchUsers = async () => {
  const response = await apiClient.get('/users');
  return response.data;
};

// POST request
const createUser = async (userData) => {
  const response = await apiClient.post('/users', userData);
  return response.data;
};
```

### 3. Using React Query
```typescript
'use client';

import { useQuery, useMutation } from '@tanstack/react-query';
import { apiClient } from '@/services';

function UsersComponent() {
  // Fetch data with caching
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await apiClient.get('/users');
      return response.data;
    },
  });

  // Mutate data
  const mutation = useMutation({
    mutationFn: async (newUser) => {
      const response = await apiClient.post('/users', newUser);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>
        {data?.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <button onClick={() => mutation.mutate({ name: 'John' })}>
        Add User
      </button>
    </div>
  );
}
```

### 4. Adding Custom Types
```typescript
// src/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
```

## 🔧 What's Configured

| Feature | Status | Location |
|---------|--------|----------|
| **Axios** | ✅ Configured | `src/services/api.ts` |
| **React Query** | ✅ Provider in layout | `src/lib/react-query.ts` |
| **Zustand** | ✅ App store ready | `src/store/app.store.ts` |
| **Tailwind CSS** | ✅ Configured | `globals.css` |
| **TypeScript** | ✅ Strict mode | `tsconfig.json` |

## 🎯 Adding New Features

1. **API Service**: Add to `src/services/`
2. **Components**: Add to `src/components/`
3. **Custom Hooks**: Add to `src/hooks/`
4. **Store**: Add new stores to `src/store/`
5. **Types**: Add to `src/types/index.ts`

## ✅ Ready to Build Modern Web Applications!
