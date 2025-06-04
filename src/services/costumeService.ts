import prisma from '@prisma/client';

class CostumeService {
  async createCostume(data: any) {
    return await prisma.costume.create({ data });
  }

  async getCostumeById(id: string) {
    return await prisma.costume.findUnique({
      where: { id },
    });
  }

  async updateCostume(id: string, data: any) {
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

  async getCostumes() {
    return await prisma.costume.findMany();
  }
}

export const costumeService = new CostumeService();
