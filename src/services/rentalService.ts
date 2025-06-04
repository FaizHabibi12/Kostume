import { PrismaClient } from '@prisma/client';

class RentalService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createRental(data: {
    userId: string;
    costumeId: string;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
  }) {
    return await this.prisma.rental.create({ data });
  }

  async getRentalById(id: string) {
    return await this.prisma.rental.findUnique({
      where: { id },
    });
  }

  async getRentals() {
    return await this.prisma.rental.findMany();
  }

  async getRentalsByUserId(userId: string) {
    return await this.prisma.rental.findMany({
      where: { userId },
    });
  }

  async updateRental(id: string, data: Partial<{
    userId: string;
    costumeId: string;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
    status: string;
  }>) {
    return await this.prisma.rental.update({
      where: { id },
      data,
    });
  }

  async deleteRental(id: string) {
    return await this.prisma.rental.delete({
      where: { id },
    });
  }
}

export default new RentalService();
