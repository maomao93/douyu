import axios from 'axios'

let base = '/api'

axios.defaults.baseURL = 'https://capi.douyucdn.cn';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 
//当然还可以这么配置
// var instance = axios.create({
//  baseURL: 'https://capi.douyucdn.cn/api/v1/live'
// });
export const saveIn = () => { return axios.get(base).then(res => res.data) }