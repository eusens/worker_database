'use server';
import { prisma } from '@/lib/prisma';
import { convertToPlainObject } from './utils';
// import { PrismaClient } from '@prisma/client';

// Get latest products
export async function getLatestProducts() {
    const data = await prisma.product.findMany({
      take: 4,
      orderBy: { createdAt: 'desc' },
    });

    return convertToPlainObject(data);
    }
  

