import { DateFormatType } from '@/types/index';

export const getExpiresDate = (unit: number, dateFormatType: DateFormatType = 'day'): string => {
  const date = new Date();

  let expire = 1000;
  if (dateFormatType === 'sec') {
    expire *= unit;
  } else if (dateFormatType === 'min') {
    expire *= 60 * unit;
  } else if (dateFormatType === 'hour') {
    expire *= 60 * 60 * unit;
  } else {
    expire *= 60 * 60 * 24 * unit;
  }

  date.setTime(date.getTime() + expire);

  return date.toUTCString();
};
