const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // No longer needed with Cloudinary

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const serviceRoutes = require('./routes/services');
const galleryRoutes = require('./routes/gallery');
const inquiryRoutes = require('./routes/inquiries');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/inquiries', inquiryRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
