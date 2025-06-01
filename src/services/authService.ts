import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { PrismaClient, User } from '../generated/prisma';

class AuthService {
  private userModel: PrismaClient['user'];

  constructor(userModel: PrismaClient['user']) {
    this.userModel = userModel;
  }

  async register(email: string, password: string, name: string) {
    const hashedPassword = await hash(password, 10);
    const user = await this.userModel.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    return user;
  }

  async login(email: string, password: string) {
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
    return { user, token };
  }

  async getUserById(id: string) {
    return await this.userModel.findUnique({ where: { id } });
  }
}

export default AuthService;