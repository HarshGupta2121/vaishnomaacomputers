const express = require('express');
const prisma = require('../prismaClient');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create an inquiry (Public)
router.post('/', async (req, res) => {
  try {
    const { name, phone, location, message } = req.body;
    
    if (!name || !phone || !message) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const inquiry = await prisma.inquiry.create({
      data: { name, phone, location, message }
    });
    
    res.status(201).json({ message: 'Inquiry submitted successfully', inquiry });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting inquiry' });
  }
});

// Get all inquiries (Admin only)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inquiries' });
  }
});

// Update inquiry status (Admin only)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    if (!['PENDING', 'CONTACTED', 'RESOLVED'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const inquiry = await prisma.inquiry.update({
      where: { id: parseInt(req.params.id) },
      data: { status }
    });

    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ message: 'Error updating inquiry' });
  }
});

// Delete an inquiry (Admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await prisma.inquiry.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting inquiry' });
  }
});

module.exports = router;
