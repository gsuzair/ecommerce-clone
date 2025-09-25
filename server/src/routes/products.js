import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
    res.json({ data: products });
  } catch (err) {
    next(err);
  }
});

export default router;
