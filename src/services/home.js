import { requestPost } from '../utils/request'
import config from '../utils/config'
const { getDayUrl, getMonthUrl } = config.api

export async function getMonth (data) {
  return requestPost(getMonthUrl, {
    method: 'POST',
    data: data
  })
}
export async function getDay (data) {
  return requestPost(getDayUrl, {
    method: 'POST',
    data: data
  })
}
