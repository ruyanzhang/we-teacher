import { getReportList, getMistakeList, getMistakeCourse } from '../services/mistake'

const state = {
  mistakeList: [],
  mistakeGradeCourse: [],
  hasMistake: true,
  reportList: [],
  hasReport: true
}

const getters = {
  mistakeGradeCourseData (state) {
    return state.mistakeGradeCourse || []
  },
  mistakeListData (state) {
    return state.mistakeList || []
  },
  reportListData (state) {
    const reportList = state.reportList && state.reportList.map((item) => {
      return {
        ...item,
        submitDateDay: item.submitDate.substring(0, 10),
        submitDateTime: item.submitDate.substring(11)
      }
    })
    return reportList || []
  },
  hasMistakeData (state) {
    return state.hasMistake
  },
  hasReportData (state) {
    return state.hasReport
  }
}

const mutations = {
  updateMistake (state, payload) {
    if (payload.type === 'mistakeList') {
      state.mistakeList = payload.mistakeList
      state.hasMistake = payload.hasMistake
    } else if (payload.type === 'reportList') {
      state.reportList = payload.reportList
      state.hasReport = payload.hasReport
    } else if (payload.type === 'mistakeGradeCourse') {
      state.mistakeGradeCourse = payload.mistakeGradeCourse
    }
  }
}

const actions = {
  async getReportList ({ state, commit }, payload = {}) {
    const data = await getReportList(payload)
    commit('updateMistake', {
      type: 'reportList',
      hasReport: data.data.list && data.data.list.length > 0,
      reportList: payload.reportPage === 1 ? data.data.list : state.reportList.concat(data.data.list)
    })
    return Promise.resolve(data)
  },
  async getMistakeList ({ state, commit }, payload = {}) {
    const data = await getMistakeList(payload)
    commit('updateMistake', {
      type: 'mistakeList',
      hasMistake: data.data.list && data.data.list.length > 0,
      mistakeList: payload.mistakePage === 1 ? data.data.list : state.mistakeList.concat(data.data.list)
    })
    return Promise.resolve(data)
  },
  async getMistakeCourse ({ commit }, payload = {}) {
    const data = await getMistakeCourse(payload)
    commit('updateMistake', {
      type: 'mistakeGradeCourse',
      mistakeGradeCourse: data.data.list
    })
    return Promise.resolve(data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
