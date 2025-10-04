import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private jobs: Repository<Job>) {}

  async create(user: User, type: string, payload: any) {
    const job = this.jobs.create({
      user,
      type,
      status: 'queued',
      progress: 0,
      payload,
    });
    return this.jobs.save(job);
  }

  async updateProgress(id: number, progress: number, status?: string) {
    const job = await this.jobs.findOne({ where: { id } });
    if (!job) return null;
    job.progress = progress;
    if (status) job.status = status;
    return this.jobs.save(job);
  }

  async findById(id: number) {
    return this.jobs.findOne({ where: { id }, relations: ['user'] });
  }
}
