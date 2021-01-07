
function test () {
  console.log('test')
}

let app = new Vue({
  el: '#app',
  mounted() {
   initPath()
  },
  methods: {
    handleServerClick() {
      console.log('server')
    },
    handleTargetClick(target) {
      console.log(target)
    }
  }
})

