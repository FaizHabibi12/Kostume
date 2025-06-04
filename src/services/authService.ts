import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AuthService {
  private userModel = prisma.user;

  async register({ email, password, name }: { email: string; password: string; name: string }) {
    const hashedPassword = await hash(password, 10);
    const user = await this.userModel.create({
      data: { email, password: hashedPassword, name },
    });
    return user;
  }

  async login({ email, password }: { email: string; password: string }) {
    const user = await this.userModel.findUnique({ where: { email } });
    if (!user || !(await compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not defined');
    }

    const token = sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return token;
  }

  async getUserById(id: string) {
    return await this.userModel.findUnique({ where: { id } });
  }
}

export const authService = new AuthService();
