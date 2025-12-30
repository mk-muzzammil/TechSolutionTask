import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  selectType: string;
  selectRoom: string;
  checkIn: Date;
  checkOut: Date;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    selectType: {
      type: String,
    },
    selectRoom: {
      type: String,
    },
    checkIn: {
      type: Date,
    },
    checkOut: {
      type: Date,
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = mongoose.model<IBooking>('Booking', bookingSchema);
