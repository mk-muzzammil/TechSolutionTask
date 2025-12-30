// Local storage utility functions

/**
 * Safely get item from localStorage
 */
export const getStorageItem = (key: string): string | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(`Error reading from localStorage: ${error}`);
    return null;
  }
};

/**
 * Safely set item in localStorage
 */
export const setStorageItem = (key: string, value: string): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error writing to localStorage: ${error}`);
  }
};

/**
 * Safely remove item from localStorage
 */
export const removeStorageItem = (key: string): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage: ${error}`);
  }
};

/**
 * Get and parse JSON from localStorage
 */
export const getJsonItem = <T>(key: string): T | null => {
  const item = getStorageItem(key);
  if (!item) return null;
  
  try {
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Error parsing JSON from localStorage: ${error}`);
    return null;
  }
};

/**
 * Stringify and set JSON in localStorage
 */
export const setJsonItem = <T>(key: string, value: T): void => {
  try {
    const jsonString = JSON.stringify(value);
    setStorageItem(key, jsonString);
  } catch (error) {
    console.error(`Error stringifying JSON for localStorage: ${error}`);
  }
};
