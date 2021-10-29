import { useMemo } from 'react';
import dayjs from 'dayjs';
import { HOUR_TO_MIN, DAY_TO_HOUR, WEEK_TO_DAY } from '@/constants/index';

const useCalcRegisterDate = (date = '') => {
  const registerDate = useMemo<string>(() => {
    if (date === '') {
      return '';
    }

    const today = dayjs(new Date());
    const registerAt = dayjs(date);

    const diffMinute = today.diff(registerAt, 'minute');
    if (diffMinute < HOUR_TO_MIN) {
      return diffMinute <= 0 ? '방금' : `${diffMinute}분 전`;
    }

    const diffHour = today.diff(registerAt, 'hour');
    if (diffHour < DAY_TO_HOUR) {
      return `${diffHour}시간 전`;
    }

    const diffDate = today.diff(registerAt, 'd');
    return diffDate < WEEK_TO_DAY ? `${diffDate}일 전` : `${registerAt.format('YYYY년 M월 D일')}`;
  }, [date]);

  return [registerDate];
};

export default useCalcRegisterDate;
