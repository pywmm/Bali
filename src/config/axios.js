import axios from 'axios';
// import { isServer } from '@/config/env';

function init() {
  axios.defaults.baseURL = ('/');
//   axios.defaults.withCredentials = true;
}

export default init;
