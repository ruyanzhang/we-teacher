import { createStore } from '@mpxjs/core'
import login from './login'
import home from './home'
import mistake from './mistake'
import report from './report'
const store = createStore({
  modules: {
    login,
    home,
    mistake,
    report
  }
})
export default store
