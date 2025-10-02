import 'dotenv/config';  
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const cat = await prisma.category.upsert({
    where: { slug: 'electronics' },
    update: {},
    create: { name: 'Electronics', slug: 'electronics' },
  });

    await prisma.product.upsert({
    where: { slug: 'super-phone' },
    update: {},
    create: { title: 'Super Phone', slug: 'super-phone', description: '...', categoryId: cat.id },
    });

    await prisma.product.upsert({
    where: { slug: 'super-phone-2' },
    update: {},
    create: { title: 'Super Phone 2', slug: 'super-phone-2', description: '...', categoryId: cat.id },
    });

    await prisma.product.upsert({
    where: { slug: 'super-phone-3' },
    update: {},
    create: { title: 'Super Phone 3', slug: 'super-phone-3', description: '...', categoryId: cat.id },
    });

    await prisma.product.upsert({
    where: { slug: 'super-phone-4' },
    update: {},
    create: { title: 'Super Phone 4', slug: 'super-phone-4', description: '...', categoryId: cat.id },
    });


  console.log('Seeded ✅');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
