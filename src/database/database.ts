import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/tobams';

export const connectDB = async () => {
  mongoose.connect(dbUrl);

  const db = mongoose.connection;

  db.on('error', (error) => console.error(error));

  db.once('open', () => console.log('Connected to MongoDB'));
};
