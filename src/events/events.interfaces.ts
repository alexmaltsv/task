import { EventEntity, EventStatus } from './event.entity';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { List } from '../app.interfaces';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  Length,
  Validate,
} from 'class-validator';
import { isDateBiggerThan } from '../decorators';

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
