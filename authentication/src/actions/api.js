// imports
import axios from 'axios';

// constants
const ROOT_URL = 'http://localhost:3003/api';

// class
export default class Api {
  login(username, password) {
    return axios.post(`${ROOT_URL}/login`, { username, password});
  }
}
