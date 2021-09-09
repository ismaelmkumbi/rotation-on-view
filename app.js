const vm = Vue.createApp({
  data() {
    return {
      persPective: 100,
      rotaTeX: 0,
      rotaTeY: 0,
      rotaTeZ: 0,
    }
  },
  methods: {
    resetSettings() {
      console.log("hellow buttong working fine")
    },
    copySettings() {},
  },
  watch: {
    persPective(newVl, oldVal) {
      console.log(newVl)
    },
    rotaTeX(newval, oldVal) {
      console.log("uiui")
    },
  },
  computed: {
    boxTransform() {
      return {
        transform: `
        perspective(${this.persPective}px)
        rotateX(${this.rotaTeX}deg)
        rotateY(${this.rotaTeY}deg)
        rotateZ(${this.rotaTeZ}deg)`,
      }
    },
  },
}).mount("#app")
