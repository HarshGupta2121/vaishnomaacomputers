const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const prisma = require('../prismaClient');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const { uploadCloud } = require('../config/cloudinary');

// Get all gallery images
router.get('/', async (req, res) => {
  try {
    const gallery = await prisma.gallery.findMany();
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gallery' });
  }
});

// Upload a new image (Admin only)
router.post('/', authMiddleware, uploadCloud.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image provided' });
    }
    const imageUrl = req.file.path;
    
    const image = await prisma.gallery.create({
      data: { imageUrl }
    });
    
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image' });
  }
});

// Delete an image (Admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const image = await prisma.gallery.findUnique({ where: { id } });
    if (!image) return res.status(404).json({ message: 'Image not found' });

    // Cloudinary images should ideally be deleted via Cloudinary API, but we skip that for now and just remove from DB.

    await prisma.gallery.delete({ where: { id } });
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image' });
  }
});

module.exports = router;
