import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { EventDto, EventsList, EventsQuery } from './events.interfaces';
import { EventEntity } from './event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() dto: EventDto): Promise<EventEntity> {
    return this.eventsService.create(dto);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() dto: EventDto) {
    return this.eventsService.update(id, dto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<void> {
    return this.eventsService.delete(id);
  }

  @Get('')
  async get(@Query() query: EventsQuery): Promise<EventsList> {
    const data = await this.eventsService.get();
    const { limit = 20, offset = 0 } = query;

    return {
      data,
      limit,
      offset,
    };
  }

  @Get('/:id')
  getOne(@Query('id') id: number): Promise<EventEntity> {
    return this.eventsService.getOne(id);
  }
}
