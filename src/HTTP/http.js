/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/6
 * Time: 13:56
 */
import axios from 'axios'

export function http (url, data, method, time) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:3000/',
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: time || 5 * 1000,
      url: url,
      data: data
    })
    instance.interceptors.request.use((config) => {
      config.method = method
      if (method === 'POST') {
        config.data = data
        config.params = ''
      } else if (method === 'GET') {
        config.params = data
        config.data = ''
      } else if (method === 'DELETE') {
        config.method = method
      } else if (method === 'PATCH') {
        config.method = method
        config.data = data
      }
    })
    instance()
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
