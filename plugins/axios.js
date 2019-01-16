/* eslint-disable prefer-promise-reject-errors,vue/script-indent */
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 8000
axios.defaults.withCredentials = true

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log('请求404')
          break
        case 500:
          console.log('请求500')
          break
      }
    }
    console.log(error)
    return Promise.reject({ code: '-100', message: '网络异常请稍后再试！' })
  }
)



/**
 * post 请求
 * @param url 地址
 * @param data body业务参数
 * @param params 查询字符串参数
 * @param headers 公用参数
 * @param dataType 返回数据类型
 * @param type 请求类型
 */
export function fetch (url, { data, params, headers, dataType = 'json', type = 'post' }) {
  if (!url) {
    console.log('接口地址不能为空')
    return false
  }

  let defaultHeader = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'platform': 'weixin', // 平台
    'userAgent': '', // 特殊标识放刷策略
    'phoneType': '', // 机型
    'version': '', // app版本
    'sysVersion': '', // 系统版本
    'deviceId': '' // 设备ID
  }

  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: url,
      data: qs.stringify(data),
      params: params,
      responseType: dataType,
      headers: { ...headers, ...defaultHeader }// 设置默认请求头
    })
      .then(response => {
        if (response && response.data && (response.data.code === '000000' || response.data.success)) {
          resolve(response.data)
        } else if (response.data) {
          reject(response.data)
        } else {
          reject({ code: '-200', message: '返回数据未知异常，请稍后重试！' })
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}
