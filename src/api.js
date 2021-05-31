import axios from 'axios';

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b2377c61c3fe32acb253cf3230386694&hash=ffd275c5130566a2916217b101f26150'
});

export default api;