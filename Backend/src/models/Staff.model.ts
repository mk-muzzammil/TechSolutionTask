import mongoose, { Schema, Document } from 'mongoose';

export interface IStaff extends Document {
  name: string;
  role: string;
  image: string;
}

const staffSchema: Schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Staff = mongoose.model<IStaff>('Staff', staffSchema);
