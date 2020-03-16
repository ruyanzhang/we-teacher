import { requestPost } from '../utils/request'
import config from '../utils/config'
const { userLogin, userLogOut } = config.api

export async function login (data) {
  return requestPost(userLogin, {
    method: 'POST',
    data
  })
}
export async function loginOut (data) {
  return requestPost(userLogOut, {
    method: 'POST',
    data
  })
}
