import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DataSource,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DatabaseSource } from '../database';

export enum EventStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

@Entity('events')
export class EventEntity {
  static INJECT_KEY = 'EventEntityRepository';

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column('timestamp with time zone')
  startTime: Date;

  @Column('timestamp with time zone')
  endTime: Date;

  @Column({ length: 255, nullable: true })
  address: string;

  @Column({ enum: EventStatus, type: 'enum' })
  status: EventStatus;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}

export const eventEntityProvider = {
  provide: EventEntity.INJECT_KEY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(EventEntity),
  inject: [DatabaseSource],
};
