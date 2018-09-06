/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/6
 * Time: 13:56
 */
import axios from 'axios'
export function http (paramUrl, paramData, paramMethod, paramTime) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:3000/',
      // baseURL: 'http://centerapi.tisane.cn/',
      // baseURL: 'http://192.168.2.140/',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      timeout: 5 * 1000,
      url: paramUrl,
      data: paramData
    })
    instance.interceptors.request.use(function (config) {
      // config.headers.Client = 0
      config.method = paramMethod
      if (paramMethod === 'POST') {
        config.data = paramData
        config.params = ''
      } else if (paramMethod === 'GET') {
        config.params = paramData
        config.data = ''
      } else if (paramMethod === 'DELETE') {
        config.method = paramMethod
      } else if (paramMethod === 'PATCH') {
        config.method = paramMethod
        config.data = paramData
      }
      if (paramTime) {
        config.timeout = paramTime * 1000
      } else {
        config.timeout = 5 * 1000
      }
      return config
    })
    instance()
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        console.dir(error)
        if (error.message === 'Network Error') {
          error.message = '网络错误，请重试'
        } else if (error.message.indexOf('timeout') >= 0) {
          error.message = '请求超时，请重试'
        } else {
          if (error.response.status === 500) {
            error.message = '服务器错误'
          } else if (error.response.status === 401) {
            error.message = '未登录'
          } else if (error.response.status === 405) {
            error.message = '请求方法不被允许'
          } else if (error.response.status === 415) {
            error.message = '媒体类型错误'
          } else if (error.response.status === 404) {
            error.message = '资源未找到'
          } else if (error.response.status === 403) {
            error.message = '请求被拒绝'
          } else if (error.response.status === 400) {
            error.message = error.response.data.data
          } else {
            error.message = '未知错误'
          }
        }
        reject(error)
      })
  })
}
