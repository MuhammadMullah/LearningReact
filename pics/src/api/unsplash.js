import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 99139afb2b6a7c271a787d66ad5bba0a826d8c23db38c27842f6ff2f74fa447a'
    }
})