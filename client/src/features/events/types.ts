export enum EventStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

export type EventDto = {
  title: string;
  startTime: string;
  endTime: string;
  address: string;
  status: EventStatus;
};

export type EventEntity = EventDto & {
  id: number;
};

export type EventsList = {
  data: EventDto[];
};
