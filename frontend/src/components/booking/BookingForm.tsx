'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { useCreateBooking } from '@/hooks';
import { useBookingStore } from '@/store';

// Zod validation schema
const bookingSchema = z
  .object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
    selectType: z.string().min(1, 'Please select a type'),
    selectRoom: z.string().min(1, 'Please select a room'),
    checkIn: z.string().min(1, 'Please select check-in date'),
    checkOut: z.string().min(1, 'Please select check-out date'),
    message: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.checkIn && data.checkOut) {
        const checkInDate = new Date(data.checkIn);
        const checkOutDate = new Date(data.checkOut);
        return checkOutDate > checkInDate;
      }
      return true;
    },
    {
      message: 'Check-out date must be after check-in date',
      path: ['checkOut'], // This will associate the error with the checkOut field
    }
  );

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  // Get messages from store
  const { successMessage, errorMessage, backendErrors } = useBookingStore();

  // Form management with react-hook-form and zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  // Custom hook for booking mutation
  const { createBooking, isLoading } = useCreateBooking({
    onSuccess: () => {
      // Reset form on successful submission
      reset();
    },
  });

  // Set backend errors on form fields
  React.useEffect(() => {
    if (backendErrors.length > 0) {
      backendErrors.forEach((error) => {
        setError(error.field as keyof BookingFormData, {
          type: 'manual',
          message: error.message,
        });
      });
    }
  }, [backendErrors, setError]);

  // Handle form submission
  const onSubmit = (data: BookingFormData) => {
    createBooking(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded">
          {successMessage}
        </div>
      )}

      {/* Error Message - Only show general error if no specific field errors */}
      {errorMessage && backendErrors.length === 0 && (
        <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-semibold">{errorMessage}</p>
        </div>
      )}

      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            placeholder="Ex. your name"
            {...register('firstName')}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#208F6A] ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Ex. your name"
            {...register('lastName')}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#208F6A] ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email and Phone Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Ex. info@domain.com"
            {...register('email')}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#208F6A] ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Ex. (+1) 987 654 3210"
            {...register('phoneNumber')}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#208F6A] ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>

      {/* Select Type and Select Room */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Type
          </label>
          <select
            {...register('selectType')}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#208F6A] bg-white ${
              errors.selectType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Type</option>
            <option value="single">Single Occupancy</option>
            <option value="double">Double Occupancy</option>
            <option value="family">Family</option>
            <option value="suite">Suite</option>
          </select>
          {errors.selectType && (
            <p className="text-red-500 text-xs mt-1">{errors.selectType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Room
          </label>
          <select
            {...register('selectRoom')}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#208F6A] bg-white ${
              errors.selectRoom ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="junior">Junior Room</option>
            <option value="family">Family Room</option>
            <option value="presidential">Presidential Suite</option>
          </select>
          {errors.selectRoom && (
            <p className="text-red-500 text-xs mt-1">{errors.selectRoom.message}</p>
          )}
        </div>
      </div>

      {/* Check-In and Check-Out */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-In
          </label>
          <input
            type="date"
            {...register('checkIn')}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#208F6A] ${
              errors.checkIn ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.checkIn && (
            <p className="text-red-500 text-xs mt-1">{errors.checkIn.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-Out
          </label>
          <input
            type="date"
            {...register('checkOut')}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#208F6A] ${
              errors.checkOut ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.checkOut && (
            <p className="text-red-500 text-xs mt-1">{errors.checkOut.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          placeholder="Ex. type message"
          rows={5}
          {...register('message')}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#208F6A] resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="bg-[#208F6A] hover:bg-[#1a7755] text-white px-8 py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Submitting...' : 'Book Appointment →'}
      </Button>
    </form>
  );
}
