import { Module } from '@nestjs/common';
import { EventsController } from 'src/events/events.controller';
import { EventsService } from 'src/events/events.service';
import { eventEntityProvider } from 'src/events/event.entity';
import { DatabaseModule } from 'src/database';

@Module({
  imports: [DatabaseModule],
  controllers: [EventsController],
  providers: [EventsService, eventEntityProvider],
})
export class EventsModule {}
