import axios from 'axios';
// import { isServer } from '@/config/env';

function init() {
  axios.defaults.baseURL = ('http://localhost:9000/');
//   axios.defaults.withCredentials = true;
}

export default init;
