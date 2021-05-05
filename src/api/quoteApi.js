import axiosClient from './axiosClient';

const quoteApi = {
  getAll: (params) => {
    const url = '/quotes';
    return axiosClient.get(url, { params });
  },

  getRandom: (params) => {
    const url = '/quotes/random';
    return axiosClient.get(url, { params });
  },

  getByAuthor: (author) => {
    const url = `/quotes/?author=${author}`;
    return axiosClient.get(url);
  },
};

export default quoteApi;
