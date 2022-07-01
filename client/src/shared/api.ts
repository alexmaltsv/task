import { config } from 'config';

export const API = {
  events: () => `${config.baseUrl}/events`,
  event: (id: number) => `${config.baseUrl}/events/${id}`,
};
