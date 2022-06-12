import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { eventEntityProvider } from './event.entity';
import { DatabaseModule } from '../database';

@Module({
  imports: [DatabaseModule],
  controllers: [EventsController],
  providers: [EventsService, eventEntityProvider],
})
export class EventsModule {}
