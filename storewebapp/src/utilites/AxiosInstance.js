import Axios from "axios";


export default  Axios.create({
    baseURL: 'http://127.0.0.1:3201/',
    timeout: 1000000,
  //  headers: {'X-Custom-Header': 'foobar'}
  });