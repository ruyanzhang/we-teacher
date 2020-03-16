import mpx from '@mpxjs/core'
export default function share (res) {
  let pages = getCurrentPages()
  let view = pages[pages.length - 1]
  if (view.route !== 'pages/login') {
    mpx.showShareMenu({
      withShareTicket: true
    })
    view.onShareAppMessage = function () {
      return {
        title: '分享转发',
        path: 'pages/home'
      }
    }
  }
}
