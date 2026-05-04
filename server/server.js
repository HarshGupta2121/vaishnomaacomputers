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

// Serve generated hero image dynamically
app.get('/api/hero-image', (req, res) => {
  res.sendFile('C:/Users/Harsh/.gemini/antigravity/brain/bc434eff-58c5-42bf-a0a2-44418f7929d9/security_networking_hero_1777808369019.png');
});

// Serve generated gallery images
app.get('/api/gallery-image-1', (req, res) => {
  res.sendFile('C:/Users/Harsh/.gemini/antigravity/brain/bc434eff-58c5-42bf-a0a2-44418f7929d9/gallery_cam_install_1777809000256.png');
});
app.get('/api/gallery-image-2', (req, res) => {
  res.sendFile('C:/Users/Harsh/.gemini/antigravity/brain/bc434eff-58c5-42bf-a0a2-44418f7929d9/gallery_network_rack_1777809018646.png');
});
app.get('/api/gallery-image-3', (req, res) => {
  res.sendFile('C:/Users/Harsh/.gemini/antigravity/brain/bc434eff-58c5-42bf-a0a2-44418f7929d9/gallery_smart_home_1777809035024.png');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
