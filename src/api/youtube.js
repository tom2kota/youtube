// https://developers.google.com/youtube/v3/docs/search/list?hl=ru
// https://console.developers.google.com/apis/credentials
// https://developers.google.com/youtube/v3/docs/?apix=true
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
// API key restrictions *.localhost:3000/*
import axios from 'axios';

const KEY = '${{secrets.MY_SECRET_YOUTUBE_KEY}}';

const axiosObject = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 15,
            key: KEY
        }
    }
);


export default axiosObject;
