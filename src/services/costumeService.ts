import { PrismaClient } from '@prisma/client';

class CostumeService {
  private prisma = new PrismaClient();

  async createCostume(data: any) {
    return await this.prisma.costume.create({
      data,
    });
  }

  async getCostumeById(id: string) {
    return await this.prisma.costume.findUnique({
      where: { id },
    });
  }

  async updateCostume(id: string, data: any) {
    return await this.prisma.costume.update({
      where: { id },
      data,
    });
  }

  async deleteCostume(id: string) {
    return await this.prisma.costume.delete({
      where: { id },
    });
  }

  async getAllCostumes() {
    return await this.prisma.costume.findMany();
  }
}

export default new CostumeService();