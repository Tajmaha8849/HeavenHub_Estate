import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';

dotenv.config();

// Ensure MONGO_URI is set
if (!process.env.MONGO) {
  throw new Error("MONGO_URI is not defined");
}

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();
const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://your-frontend-url.vercel.app',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Health check route (optional)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// API routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// Serve static files (built frontend)
app.use(express.static(path.join(__dirname, '/client/dist')));

// Catch-all route to serve frontend (index.html) in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Set port dynamically (Vercel or local)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
