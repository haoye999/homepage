/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import config from './config';

export function bgImg(moreParams) {
  const options = {
    url: 'https://pixabay.com/api/',
    method: 'get',
    params: {
      key: config.key,
      image_type: 'photo',
      ...moreParams
    }
  };

  return axios(options).then(res => res.data);
}
