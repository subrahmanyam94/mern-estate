import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("✓ Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("✗ Error connecting to MongoDB:", error.message);
  });

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});