'use client';
import { redirect } from 'next/navigation';

import { SaveTokenProps } from '@/types/api';
import { accessTime, refreshTime } from '@/constants/tokenExpires';
import fetchApi from '../fetchApi';
import { deleteCookie, getCookie, setCookie } from '@/utils/cookieStore';
import fetchExtended from '../fetch';

export const getAccountCode = async (provider: string) => {
  const redirectUri = `/auth/${provider}/oauth-uri?redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}/auth/${provider}`;
  const devUri = `/auth/${provider}/oauth-uri?redirect_uri=${process.env.NEXT_PUBLIC_DEV_KAKAO_REDIRECT_URI}/auth/${provider}`;
  const uri = process.env.NODE_ENV === 'production' ? redirectUri : devUri;
  return (await fetchApi(uri, 'GET')).data.oauthUri;
};

export const getWithdrawCode = async (provider: string) => {
  const redirectUri = `/auth/${provider}/oauth-uri?redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}/auth/${provider}/withdraw`;
  const devUri = `/auth/${provider}/oauth-uri?redirect_uri=${process.env.NEXT_PUBLIC_DEV_KAKAO_REDIRECT_URI}/auth/${provider}/withdraw`;
  const uri = process.env.NODE_ENV === 'production' ? redirectUri : devUri;
  return (await fetchApi(uri, 'GET')).data.oauthUri;
};

export const getToken = async (code: string, provider: string) => {
  const url = `/auth/${provider}/token`;

  const redirectUri = `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}/auth/${provider}`;
  const devRedirectUri = `${process.env.NEXT_PUBLIC_DEV_KAKAO_REDIRECT_URI}/auth/${provider}`;

  const uri = process.env.NODE_ENV === 'production' ? redirectUri : devRedirectUri;

  const data = {
    code: code,
    redirectUri: uri,
  };

  return await fetchApi(url, 'POST', data);
};

export const handleAuthError = async () => {
  await deleteCookie('accessToken');
  await deleteCookie('nickname');
  await deleteCookie('refreshToken');

  alert('로그인이 만료되었습니다. 다시 로그인해주세요.');

  redirect('/login');
};

export const reissueToken = async () => {
  const accessToken = (await getCookie('accessToken'))?.value;
  const refreshToken = (await getCookie('refreshToken'))?.value;
  const url = `/auth/issue/access-token?refresh_token=${refreshToken}`;

  try {
    if (refreshToken && !accessToken) {
      const response = await fetchExtended(url, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 401) {
        throw new Error('Unauthorized');
      }

      const { data } = await response.json();
      const newAccessToken = data.accessToken as string;
      setCookie('accessToken', newAccessToken, { maxAge: accessTime });
    }
  } catch (error) {
    // console.log('🚀 ~ reissueToken ~ error:', error);
    await handleAuthError();
  }
};

export const saveToken = async (data: SaveTokenProps) => {
  await setCookie('accessToken', data.accessToken, {
    maxAge: accessTime,
  });

  await setCookie('refreshToken', data.refreshToken, {
    maxAge: refreshTime,
  });

  if (data.nickname) {
    await setCookie('nickname', data.nickname, {
      maxAge: refreshTime,
    });
  }
};

export const postNickname = async (nickname: string) => {
  const url = '/user/nickname';
  const data = { nickname: nickname };

  return await fetchApi(url, 'POST', data);
};

export const postValidNickname = async (nickname: string) => {
  const url = '/user/nickname/available-check';
  const data = { nickname: nickname };

  return await fetchApi(url, 'POST', data);
};
