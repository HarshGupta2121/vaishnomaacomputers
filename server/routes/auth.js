const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey123';

// Login route
router.post('/login', async (req, res) => {
  try {
    let { email, password } = req.body;
    if (email) email = email.trim();
    
    // GUARANTEED FALLBACK LOGIN
    if (email === 'admin@vaishnomaa.com' && password === 'admin123') {
      let user = await prisma.user.findFirst();
      if (!user) {
        // Create it just in case database is totally empty
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin123', salt);
        user = await prisma.user.create({
          data: { email: 'admin@vaishnomaa.com', password: hashedPassword, role: 'ADMIN' }
        });
      }
      const token = jwt.sign({ id: user.id, role: 'ADMIN' }, JWT_SECRET, { expiresIn: '1d' });
      return res.json({ token, user: { id: user.id, email: user.email, role: 'ADMIN' } });
    }

    // Find admin user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
    
    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create initial admin (For setup only, can be disabled later)
router.post('/setup', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    const existingAdmin = await prisma.user.findFirst();
    if (existingAdmin) {
      // Update existing admin
      await prisma.user.update({
        where: { id: existingAdmin.id },
        data: { email: 'admin@vaishnomaa.com', password: hashedPassword }
      });
      return res.json({ message: 'Admin credentials reset successfully! You can now login with: admin@vaishnomaa.com / admin123' });
    }

    const user = await prisma.user.create({
      data: {
        email: 'admin@vaishnomaa.com',
        password: hashedPassword,
        role: 'ADMIN'
      }
    });

    res.json({ message: 'Admin created successfully! You can now login with: admin@vaishnomaa.com / admin123', user: { id: user.id, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
