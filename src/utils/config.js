const serveUrl = 'https://tcb-api.tencentcloudapi.com'
const APIV1 = `${serveUrl}/api`
export default {
  name: '',
  prefix: '',
  footerText: '',
  logoSrc: '',
  logoText: '',
  needLogin: true,
  api: {
    userLogin: `${APIV1}/login`, // 登入
    userLogOut: `${APIV1}/loginOut`, // 登出
    getDayUrl: `${APIV1}/teacher/day`, // 按天获取上课
    getMonthUrl: `${APIV1}/teacher/month`,// 按月获取上课
    reportListUrl: `${APIV1}/teacher/report_list`, // 学习报告
    mistakeListUrl: `${APIV1}/teacher/mistake_list`, // 错题集
    mistakeCourseUrl: `${APIV1}/student/gradecourse`, // 获取错题集科目
    notCheckReportUrl: `${APIV1}/student/notCheckReport`, // 未核录报告
    saveReportUrl: `${APIV1}/student/save_report`, // 保存报告
    checkReportUrl: `${APIV1}/student/checkReport`, // 已检测报告
    sendReportUrl: `${APIV1}/student/send_report` // 发送报告
  }
}
