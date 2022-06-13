import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EventEntity } from './event.entity';
import { EventDto } from './events.interfaces';

@Injectable()
export class EventsService {
  constructor(
    @Inject(EventEntity.INJECT_KEY)
    private readonly eventsRepository: Repository<EventEntity>,
  ) {}

  async create(dto: EventDto): Promise<EventEntity> {
    return await this.eventsRepository.save(dto);
  }

  async update(id: number, dto: EventDto) {
    return await this.eventsRepository.update(id, dto);
  }

  async delete(id: number): Promise<void> {
    await this.eventsRepository.delete(id);
  }

  async get(): Promise<EventEntity[]> {
    return await this.eventsRepository.find({ take: 20, skip: 0 });
  }

  async getOne(id: number): Promise<EventEntity> {
    return await this.eventsRepository.findOneBy({ id });
  }
}
