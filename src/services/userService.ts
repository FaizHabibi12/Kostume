import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export class UserService {
  async getUserById(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      include: {
        costumes: true,
        rentals: true,
        reviews: true,
      },
    });
  }

  async updateUser(userId: string, data: { name?: string; email?: string; password?: string }) {
    return await prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async deleteUser(userId: string) {
    return await prisma.user.delete({
      where: { id: userId },
    });
  }

  async getAllUsers() {
    return await prisma.user.findMany({
      include: {
        costumes: true,
        rentals: true,
        reviews: true,
      },
    });
  }
}
