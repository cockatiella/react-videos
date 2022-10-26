import axios from 'axios';

const KEY = 'AIzaSyCCgFPMJSbB1E6hY05hfMQnubsk8GPRdOM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
