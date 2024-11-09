import fetchExtended from './fetch';
import { getCookie } from '@/utils/cookieStore';
import { handleAuthError, reissueToken } from './login';

/**
 * @param url
 * @param method
 * @param data
 */
export const fetchApi = async <T>(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: T) => {
  const accessToken = (await getCookie('accessToken'))?.value;

  if (!accessToken) {
    await reissueToken();
  }

  try {
    const response = await fetchExtended(url, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + `${accessToken}`,
      },
    });

    if (response.status === 401) {
      await handleAuthError();
    }

    return await response.json();
  } catch (error) {
    console.log(`🚀 ~ fetchApi url: ${url}, error: ${error}`);
    return error;
  }
};

export default fetchApi;
