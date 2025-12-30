import mongoose, { Schema, Document } from 'mongoose';

export interface IHotel extends Document {
  title: string;
  price: number;
  guests: number;
  beds: number;
  bath: number;
  image: string;
  description: string;
}

const HotelSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    bath: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IHotel>('Hotel', HotelSchema);
