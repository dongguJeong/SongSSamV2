import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // training | convert | analyze | transcribe

  @Column()
  status: string; // queued | running | failed | completed

  @Column({ nullable: true })
  progress: number;

  @Column('json', { nullable: true })
  payload: any; // 입력 데이터 (업로드 키, 옵션 등)

  @Column('json', { nullable: true })
  result: any; // 결과 데이터 (모델 경로, 분석 결과 등)

  @ManyToOne(() => User)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
