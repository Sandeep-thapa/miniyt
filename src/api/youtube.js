import axios from 'axios';

const API_KEY = process.env.REACT_APP_ACCESS_KEY;
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});