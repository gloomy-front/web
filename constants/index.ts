import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_ENV } = publicRuntimeConfig;

export const SITE_URL = API_ENV === 'development' ? 'https://d1gbspr5q497yq.cloudfront.net' : 'https://d1gbspr5q497yq.cloudfront.net';
export const GLOOMY_TOKEN = 'gloomyToken';

export const POST_LIST_SIZE = 20;