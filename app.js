const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const courseRoutes = require('./src/routes/courseRoutes');
const { errorHandler } = require('./src/middlewares/validate');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', courseRoutes);

// Error handling middleware
app.use(errorHandler);

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// Start the server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});
