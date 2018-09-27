<template>
  <div>
    <span>我是爸爸</span>-----{{fromSon}} <br>
    爸爸中的全局数据---{{fGetNum}}
    <hr>
    <son :msg = "toSonMsg" @handle="getSon"></son>
  </div>

</template>

<script>
  import son from "./son"

  export default {
    name: "parent",
    components: {
      son,
    },
    data: function () {
      return {
        toSonMsg: '我是你爸传过来的',
        fromSon: '默认值'
      }
    },
    methods:{
      getSon (value){
        this.fromSon = value
      }
    },
    computed:{
      fGetNum(){
        return this.$store.state.num
      }
    }
  }
</script>

<style scoped>

</style>
