import request from './api'
export const login = data => { // 添加登录接口
  return request({
    url: 'login',
    method: 'post',
    data: data
  })
}
export const getAllInfo = params => { // 添加登录接口
  return request({
    url: 'getAllInfo',
    method: 'get',
    params
  })
}