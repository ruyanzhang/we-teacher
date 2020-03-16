export default {
  methods: {
    changeInputValue (e, box = 'formBox') {
      if (!e.target.id) {
        return
      }
      const v = `formModel.${e.target.id}`
      this.setData({
        [v]: e.detail
      }, () => {
        this.$refs[box] && this.$refs[box].validate(e.target.id)
      })
    }
  }
}
