import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use((config) => {
  
  config.withCredentials = true;
  if (config.type == 'form') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (err) => {
  return Promise.reject(err);
})

export default axios;