import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { id: 'desc' },
      take: 20,
    });
    res.json({ data: categories });
  } catch (err) {
    next(err);
  }
});

export default router;
