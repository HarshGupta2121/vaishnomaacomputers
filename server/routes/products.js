const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const prisma = require('../prismaClient');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const { uploadCloud } = require('../config/cloudinary');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Get a single product
router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// Create a product (Admin only)
router.post('/', authMiddleware, uploadCloud.single('image'), async (req, res) => {
  try {
    const { name, category, price, description, features, rating } = req.body;
    let imageUrl = null;
    
    if (req.file) {
      imageUrl = req.file.path;
    }

    const product = await prisma.product.create({
      data: {
        name,
        category,
        price: price ? parseFloat(price) : null,
        description,
        features: features || '[]', // Should be JSON array string
        imageUrl,
        rating: rating ? parseFloat(rating) : 5.0
      }
    });
    
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
});

// Update a product (Admin only)
router.put('/:id', authMiddleware, uploadCloud.single('image'), async (req, res) => {
  try {
    const { name, category, price, description, features, rating } = req.body;
    const updateData = {
      name,
      category,
      price: price ? parseFloat(price) : null,
      description,
      features,
      rating: rating ? parseFloat(rating) : 5.0
    };

    if (req.file) {
      updateData.imageUrl = req.file.path;
    }

    const product = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: updateData
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product' });
  }
});

// Delete a product (Admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await prisma.product.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' });
  }
});

module.exports = router;
