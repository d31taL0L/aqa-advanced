import axios from 'axios';
import { jest } from '@jest/globals';

async function fetchBadUrl() {
  try {
    await axios.get('http://httpstat.us/404');
    return 'Success';
  } catch (error) {
    return error;
  }
}

async function fetchWithHeadersAndParams() {
  const url = 'https://httpbin.org/get';

  const config = {
    headers: {
      'X-Secret-Header': 'Batman',
    },
    params: {
      mission: 'possible',
    },
  };

  const response = await axios.get(url, config);
  return response.data;
}

describe('Homework 15 - Real Requests', () => {
  test('Task 1: Should catch an error when request fails', async () => {
    const result = await fetchBadUrl();

    expect(axios.isAxiosError(result)).toBe(true);

    if (result.response) {
      expect(result.response.status).toBe(404);
    } else {
      console.log('Server did not respond, but error caught:', result.message);
      expect(result.message).toBeDefined();
    }
  });

  test('Task 2: Should include custom headers and params', async () => {
    const data = await fetchWithHeadersAndParams();
    console.log('Server response:', data);

    expect(data.args.mission).toBe('possible');

    const headerValue = data.headers['X-Secret-Header'] || data.headers['x-secrete-header'];
    expect(headerValue).toBe('Batman');
  });
});

describe('Homework 15 - Task 3: Mocking (No Network)', () => {
  test('Should mock a successful request', async () => {
    const mockResponse = {
      data: {
        args: { mission: 'possible' },
        headers: { 'X-Secret-Header': 'Batman' },
      },
    };

    const spy = jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);
    const result = await fetchWithHeadersAndParams();

    expect(result).toEqual(mockResponse.data);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

  test('Should mock a failed request (Network Error)', async () => {
    const mockError = new Error('No Internet');

    const spy = jest.spyOn(axios, 'get').mockRejectedValue(mockError);

    await expect(fetchWithHeadersAndParams()).rejects.toThrow('No Internet');

    spy.mockRestore();
  });
});
