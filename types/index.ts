import { COLOR } from '@/styles/color';

export * from './messageType';
export * from './feed';

export interface Image {
  filePath: string;
  filePK: number;
}

export enum ActionType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN'
}

export type COLOR_TYPE = typeof COLOR;

export type DateFormatType = 'sec' | 'min' | 'hour' | 'day';