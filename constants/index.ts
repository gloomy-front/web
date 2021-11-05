import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_ENV } = publicRuntimeConfig;

export const SITE_URL = API_ENV === 'development' ? 'https://d1gbspr5q497yq.cloudfront.net' : 'https://d1gbspr5q497yq.cloudfront.net';
export const GLOOMY_TOKEN = 'gloomyToken';

export const POST_LIST_SIZE = 20;
export const HOUR_TO_MIN = 60;
export const DAY_TO_HOUR = 24;
export const WEEK_TO_DAY = 7;

export const DROPDOWN_LIST = ['삭제', '수정', '신고'];
export const DECLARATION_LIST: { [key: string]: string } = {
  advertisement: '광고 및 홍보성 내용',
  abuse: '욕설 및 외설적인 언어 사용',
  sensational: '선정적 · 폭력적 내용',
  papering: '도배성 내용',
  political: '정치적 · 사회적 의견 표출'
};