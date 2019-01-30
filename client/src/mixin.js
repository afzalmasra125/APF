export default {
  methods: {
    hideHeader() {
      const header = document.querySelector('.header-container')
      const UnAuthorize = ['/logout','/', '/signup']
      if (UnAuthorize.includes(this.$route.path)) {
        header.style.display = 'none'
      } else {
        header.style.display = 'block'
      }
    }
  }
}
