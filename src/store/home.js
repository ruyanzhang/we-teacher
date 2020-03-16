import { getDay, getMonth } from '../services/home'

const state = {
  dayList: {},
  monthList: {}
}

const getters = {
  dayListCount: state => state.dayList.count || 0,
  dayListData: state => state.dayList.list || [],
  monthListCount: state => state.monthList.count || 0,
  monthListData: state => state.monthList.list || []
}

const mutations = {
  updateHome (state, payload) {
    if (payload.type === 'dayList') {
      state.dayList = payload.dayList
    } else if (payload.type === 'monthList') {
      state.monthList = payload.monthList
    }
  }
}

const actions = {
  async getDayList ({ commit }, payload = {}) {
    const data = await getDay(payload)
    commit('updateHome', {
      type: 'dayList',
      dayList: data.data
    })
    return Promise.resolve(data.data)
  },
  async getMonthList ({ commit }, payload = {}) {
    const data = await getMonth(payload)
    commit('updateHome', {
      type: 'monthList',
      monthList: data.data
    })
    return Promise.resolve(data.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
