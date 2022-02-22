import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_ENV } = publicRuntimeConfig;

export const SITE_URL =
  API_ENV === 'development' ? 'https://d1gbspr5q497yq.cloudfront.net' : 'https://d1gbspr5q497yq.cloudfront.net';
export const GLOOMY_TOKEN = 'gloomyToken';
export const API_URL = 'https://gomingout.com';
export const KAKAO_KEY = '343faed407d9718984e4cd32202042ac';

export const FEED_LIST_SIZE = 20;
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
  ALL: '모든 고민',
  CHAT: '💬 잡담',
  FAMILY: '🏡 가족',
  FRIEND: '👥 친구',
  COMPANY: '💼 직장/이직',
  EMPLOY: '📑 취업',
  STUDY: '📚 학업/시험',
  HETERO_LOVE: '👫 연애(이성애)',
  HOMO_LOVE: '🌈 연애(동성애)',
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

export const MYPAGE_TAB: { [key: string]: string } = {
  myContents: '작성한 글',
  myComments: '작성한 댓글',
};
