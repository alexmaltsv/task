import { ApiProperty } from '@nestjs/swagger';

export abstract class List<T> {
  abstract data: T[];

  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;
}
