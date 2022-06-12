import { Module } from '@nestjs/common';
import { EventsModule } from './events';

@Module({
  imports: [EventsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
