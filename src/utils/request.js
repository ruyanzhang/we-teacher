import mpx from '@mpxjs/core'
import { getToken } from './util.js'
export const requestPost = function (url, options) {
  return new Promise((resolve, reject) => {
    mpx.request({
      url: url,
      method: options.method || 'POST',
      data: options.data || {},
      header: {
        'content-type': 'application/json',
        'token': getToken()
      },
      success (data) {
        if (data) {
          resolve(data)
        } else {
          mpx.showModal({
            content: '获取失败',
            showCancel: false,
            confirmColor: '#1989fa'
          })
        }
      },
      fail (error) {
        console.log(error)
      }
    })
  })
}
export default {
}
