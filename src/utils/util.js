import mpx from '@mpxjs/core'
export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

export const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const setToken = (value) => {
  try {
    mpx.setStorageSync('token', value)
  } catch (e) {
    console.log(e)
  }
}

export const getToken = () => {
  try {
    return mpx.getStorageSync('token') || ''
  } catch (e) {
    console.log(e)
  }
}

export const removeToken = () => {
  try {
    mpx.removeStorageSync('token')
  } catch (e) {
    console.log(e)
  }
}

export default {
}
