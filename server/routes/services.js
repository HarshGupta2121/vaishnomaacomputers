const express = require('express');
const prisma = require('../prismaClient');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services' });
  }
});

// Create a service (Admin only)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description, icon } = req.body;
    const service = await prisma.service.create({
      data: { title, description, icon }
    });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error creating service' });
  }
});

// Delete a service (Admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await prisma.service.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service' });
  }
});

module.exports = router;
