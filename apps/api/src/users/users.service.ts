import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private users: Repository<User>) {}

  async create(email: string, plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10);
    const user = this.users.create({ email, password });
    return this.users.save(user);
  }

  async findByEmail(email: string) {
    return this.users.findOne({ where: { email } });
  }

  async validateUser(email: string, plainPassword: string) {
    const user = await this.findByEmail(email);
    if (user && (await bcrypt.compare(plainPassword, user.password))) {
      return user;
    }
    return null;
  }
}
