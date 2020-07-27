/*
 * @Description: 
 * @Version: 2.0
 * @Autor: mapleLeaves
 * @Date: 2020-07-25 21:56:47
 * @LastEditors: mapleleaves
 * @LastEditTime: 2020-07-25 22:20:07
 * @weChat: 893774884
 */ 
import axios from 'axios'
import { message , Modal} from 'antd';
// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: 'http://192.168.123.118:3001/',
  timeout: 0 // request timeout
})
// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
    config.headers['Authorization'] = localStorage.getItem('token') || 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaWtlIiwianRpIjoibWl5dSIsImlhdCI6MTU0MDM4OTk5NiwiaXNzIjoiaHR0cDovL21peXUuY29tIn0.FBnrnA-TjSAbPBkQ8qQ-pvaut3IbPpBVH04y2gh9-hwrstINjOpBpur7b3bGOfkUp8Z_DPkiyFiaoHoYQXB-hA' // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})
// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      if (res.code === 401) {
        Modal.error({
          title: '提示',
          content: '您的token已过期，请重新登录',
          onOk()  { // 点击确定进行回调
          }
        });
      }else{
        message.error(res.msg); // 当业务出现其他错误类型时进行错误弹窗提示
      }
      return Promise.reject('error')
    } else { // 当返回值为200 时进行数据抛出 
      return response.data
    }
  },
  error => {
    message.error(error.msg); // 当业务出现其他错误类型时进行错误弹窗提示
    return Promise.reject(error)
  })
export default service