import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    // timeout: 5000,
    headers: {
        'Authorization': localStorage.getItem('token') ? 'Token ' + localStorage.getItem('token') : null,
        'Content-type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    err => {
        const origReq = err.config;

        if(localStorage.getItem('token') && err.response.status === 401 && err.response.statusText === 'Unauthorized') {
            const errMsg = 'Auth error';

            return axiosInstance
                .post('/rest-auth/login/')
                .then((response) => {
                    localStorage.setItem('token', response.data.key);

                    axiosInstance.defaults.headers['Authorization'] = 'Token ' + response.data.key;
                    origReq.headers['Authorization'] = 'Token ' + response.data.key;


                    return axiosInstance(origReq);
                })
                .catch(error =>{
                    console.log('Not authorized', error)
            });
        }

        return Promise.reject({...err});
    }
);

export default axiosInstance;