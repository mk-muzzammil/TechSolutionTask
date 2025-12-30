'use client';

import { useAppStore } from '@/store';

export default function Home() {
  const { isSidebarOpen, toggleSidebar } = useAppStore();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8 font-sans dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          ✅ Frontend Setup Complete
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Configured Packages:
          </h2>
          
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <div>
                <strong>Axios:</strong> HTTP client configured with base URL and error handling
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <div>
                <strong>TanStack React Query:</strong> Server state management with caching
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <div>
                <strong>Zustand:</strong> Simple global state management
              </div>
            </li>
          </ul>
        </div>

        {/* Example Zustand usage */}
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            Zustand Store Example:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Sidebar is: <strong>{isSidebarOpen ? 'Open' : 'Closed'}</strong>
          </p>
          <button
            onClick={toggleSidebar}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Toggle Sidebar
          </button>
        </div>
      </div>
    </div>
  );
}
