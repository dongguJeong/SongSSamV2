import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { UsersService } from '../users/users.service';

@Controller('jobs')
export class JobsController {
  constructor(
    private readonly jobsService: JobsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async create(
    @Body('userId') userId: number,
    @Body('type') type: string,
    @Body('payload') payload: any,
  ) {
    const user = await this.usersService.findByEmail('test@example.com'); // 데모용
    if (!user) {
      throw new Error('User not found'); // 혹은 NotFoundException
    }
    return this.jobsService.create(user, type, payload);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.jobsService.findById(id);
  }
}
