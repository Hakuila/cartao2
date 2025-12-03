import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email }});
    if (!user) return { error: 'Invalid credentials' };
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return { error: 'Invalid credentials' };
    const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET || 'changeme', { expiresIn: '7d' });
    return { token, user };
  }
}
