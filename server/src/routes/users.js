import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
    res.json({ data: users });
  } catch (err) {
    next(err);
  }
});

export default router;
