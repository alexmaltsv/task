import { Module } from '@nestjs/common';
import { EventsModule } from 'src/events';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [EventsModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
