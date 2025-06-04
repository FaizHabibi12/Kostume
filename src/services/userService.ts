import { PrismaClient, User } from '@prisma/client';

export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getUserById(userId: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  public async updateUser(
    userId: string,
    data: Partial<Pick<User, 'name' | 'email' | 'password' | 'phone' | 'address'>>
  ): Promise<User> {
    return await this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }
}
