import { getWithToken } from '@/utils/csrFetcher';
import { INotification } from './interface';

export const getNotification = () => getWithToken<INotification[]>('/notification');
