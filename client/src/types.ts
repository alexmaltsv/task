import { AxiosError } from 'axios';

export type ReduxState = 'idle' | 'inited' | 'pending' | 'fulfilled' | 'failed';
export type ResponseError = AxiosError<{
  message: string;
}>
