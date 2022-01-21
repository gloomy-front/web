import { getWithToken } from '@/utils/csrFetcher';
import axios from 'axios';
import { INotification } from './interface';

export const getNotification = () => getWithToken<INotification[]>('/notification');
