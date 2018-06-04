import axios from 'axios';

const headers= {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'};
const instance = axios.create({baseURL:'http://localhost:8080/transactions',headers:headers});

export default instance;