import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email }});
    if (!user) return null;
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return null;
    const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '7d' });
    return { token, user };
  }

  async register(dto: { name: string, email: string, password: string, role?: string }) {
    const hash = await bcrypt.hash(dto.password, 10);
    return this.prisma.user.create({ data: { name: dto.name, email: dto.email, passwordHash: hash, role: dto.role || 'CLIENTE' }});
  }
}
