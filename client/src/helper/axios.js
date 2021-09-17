
import axios from 'axios';

const api = 'https://my-unsplash0.herokuapp.com/';

const axiosIntance = axios.create({
  baseURL: api,
});

export default axiosIntance;