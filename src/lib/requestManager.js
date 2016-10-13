import request from 'axios';

export default {
  fetchEntities(url, options = { responseType: 'json', contentType: 'xhr' }) {
    return request({
      method: 'GET',
      url,
      responseType: options.responseType,
      headers: {
        'Content-Type': options.contentType
      }
    });
  }
};
