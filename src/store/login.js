import { login } from '../services/login'
import { setToken, removeToken } from '../utils/util'
const state = {
}
const getters = {
}
const mutations = {
  logout () {
    removeToken()
  }
}
const actions = {
  async login (context, payload = {}) {
    const data = await login(payload)
    setToken(data.data.token)
    return Promise.resolve(data.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
