Component({
  properties: {
    score: {
      type: Number,
      value: 0,
      observer: function (val) {
        this.starShow(val)
      }
    },
    isStarEdit: { // 是否编辑
      type: Boolean,
      value: true
    },
    hasHalfStar: {  // 是否有半颗星
      type: Boolean,
      value: true
    }
  },
  data: {
    starLists: [{
      click: false,
      status: 0,
      value: 1
    }, {
      click: false,
      status: 0,
      value: 2
    }, {
      click: false,
      status: 0,
      value: 3
    }, {
      click: false,
      status: 0,
      value: 4
    }, {
      click: false,
      status: 0,
      value: 5
    }]
  },
  methods: {
    starChange(e) {
      let _idx = e.target.dataset.idx
      let _score = e.target.dataset.score
      const { hasHalfStar } = this.data
      if (!this.data.isStarEdit || _idx==='' || !_score ) {
        return
      }
      let count = 0
      const arr = []
      this.data.starLists.forEach((item, index) => {
        if (_idx == index) {
          if (!hasHalfStar) {
            item.status = 2
            count = item.value
          } else {
            if(item.click) {  // 半颗星
              item.status = 1
              count = item.value - 1
              item.click = false
            } else {  // 全星
              item.status = 2
              count = item.value
              item.click = true
            }
          }
        } else {
          if (!hasHalfStar) {
            if (_score >= item.value) {
              item.status = 2
            } else {
              item.status = 0
            }
          } else {
            item.click = false
            if (_score >= item.value) {
              item.status = 2
            } else {
              if (_score == (item.value - 1)) {
                item.status = 1
              } else {
                item.status = 0
              }
            }
          }
        }
        arr.push(item)
      })
      this.setData({
        starLists: arr,
        score: count
      })
      this.triggerEvent('changeStar', {score: count, hasHalfStar: hasHalfStar})
    },
    // 根据得分展示星星
    starShow(score) {
      let arr = []
      this.data.starLists.forEach(item => {
        if (score >= item.value) {
          item.status = 2
        } else if (score == 0) {
          item.status = 0
        } else {
          if (score == (item.value - 1) && this.hasHalfStar) {
            item.status = 1
          } else {
            item.status = 0
          }
        }
        arr.push(item)
      })
      this.setData({
        starLists: arr
      })
    }
  }
})