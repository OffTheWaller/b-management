import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use((config) => {
  
  config.withCredentials = true;
  if (config.type == 'form' && config.file != 'image') {
    config.data = qs.stringify(config.data);
  } else {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';
  }
  return config;
}, (err) => {
  return Promise.reject(err);
})

export default axios;