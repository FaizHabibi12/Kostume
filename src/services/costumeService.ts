import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export class CostumeService {
  async createCostume(data: {
    title: string;
    description: string;
    price: number;
    isForSale?: boolean;
    isForRent?: boolean;
    imageUrl: string;
    categoryId: string;
    ownerId: string;
  }) {
    return await prisma.costume.create({
      data,
    });
  }

  async getCostumeById(id: string) {
    return await prisma.costume.findUnique({
      where: { id },
      include: {
        category: true,
        owner: true,
        reviews: true,
        rentals: true,
      },
    });
  }

  async updateCostume(id: string, data: Partial<{
    title: string;
    description: string;
    price: number;
    isForSale: boolean;
    isForRent: boolean;
    imageUrl: string;
    categoryId: string;
  }>) {
    return await prisma.costume.update({
      where: { id },
      data,
    });
  }

  async deleteCostume(id: string) {
    return await prisma.costume.delete({
      where: { id },
    });
  }

  async getAllCostumes() {
    return await prisma.costume.findMany({
      include: {
        category: true,
        owner: true,
        reviews: true,
        rentals: true,
      },
    });
  }
}
