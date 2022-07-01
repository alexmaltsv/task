import { EventEntity, EventStatus } from 'src/events/event.entity';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { List } from 'src/app.interfaces';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  Length,
  Validate,
} from 'class-validator';
import { isDateBiggerThan } from 'src/decorators';

export class EventDto extends OmitType(PartialType(EventEntity), ['id']) {
  @ApiProperty()
  @IsString()
  @Length(5, 100)
  title: string;

  @ApiProperty({ format: 'date-time' })
  @IsDateString()
  startTime: Date;

  @ApiProperty({ format: 'date-time' })
  @IsDateString()
  @Validate(isDateBiggerThan, ['startTime'])
  endTime: Date;

  @ApiProperty()
  @IsOptional()
  address?: string;

  @ApiProperty({ enum: Object.values(EventStatus) })
  @IsEnum(EventStatus)
  status: EventStatus;
}

export class EventsList extends List<EventEntity> {
  @ApiProperty({ type: [EventEntity] })
  data: EventEntity[];
}

export class EventsQuery {
  @ApiProperty({ minimum: 0 })
  limit: number;

  @ApiProperty({ minimum: 0 })
  offset: number;
}