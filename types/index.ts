export interface Image {
  filePath: string;
  filePK: number;
}

export enum ActionType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN'
}