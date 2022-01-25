import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_ENV } = publicRuntimeConfig;

export const SITE_URL =
  API_ENV === 'development' ? 'https://d1gbspr5q497yq.cloudfront.net' : 'https://d1gbspr5q497yq.cloudfront.net';
export const GLOOMY_TOKEN = 'gloomyToken';
export const API_URL = 'https://gomingout.com';
export const KAKAO_KEY = '473b1a6bbe9f9cceeffa8a5a384fae27';

export const POST_LIST_SIZE = 5;
export const HOUR_TO_MIN = 60;
export const DAY_TO_HOUR = 24;
export const WEEK_TO_DAY = 7;
export const NOTIFICATION_LOADING_SIZE = 7;

export const DROPDOWN_LIST = ['삭제', '수정', '신고'];
export const DECLARATION_LIST: { [key: string]: string } = {
  advertisement: '광고 및 홍보성 내용',
  abuse: '욕설 및 외설적인 언어 사용',
  sensational: '선정적 · 폭력적 내용',
  papering: '도배성 내용',
  political: '정치적 · 사회적 의견 표출',
};

export const CATEGORY_LIST: { [key: string]: string } = {
  total: '모든 고민',
  chat: '💬 잡담',
  family: '🏡 가족',
  friend: '👥 친구',
  company: '💼 직장/이직',
  employ: '📑 취업',
  study: '📚 학업/시험',
  heteroLove: '👫 연애(이성애)',
  homoLove: '🌈 연애(동성애)',
};

export const NOTIFICATION_LIST: { [key: string]: string } = {
  LIKE: '❤️',
  COMMENT: '✏️',
  NESTED_COMMENT: '💬',
};

export const NOTIFICATION_DESCRIPTION: { [key: string]: string } = {
  LIKE: '명의 익명 친구가 내 글을 공감합니다.',
  COMMENT: '개의 댓글이 달렸습니다.',
  NESTED_COMMENT: '개의 답댓글이 달렸습니다.',
};
