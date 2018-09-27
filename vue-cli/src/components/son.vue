<template>
  <div>
    <span>我是儿子</span> <br>
    儿子中的全局数据--{{sGetNum}} <br>
    <button @click="sAdd">儿子中-点击改变全局数据</button>
    <button @click="sAddAction">儿子中-点击改变全局数据(action)</button>
    <br>
    爸爸传来的数据---{{msg}}
    <button @click="sendFather">向爸爸发送数据</button>
  </div>
</template>

<script>
  export default {
    name: "son",
    data: function () {
      return {
        toFather: '我是你儿子'
      }
    },
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    methods: {
      sendFather() {
        this.$emit('handle', this.toFather)
      },
      sAdd(){
        this.$store.commit('decrease')
      },
      sAddAction(){
        this.$store.dispatch('decreaseAction')
      }
    },
    computed:{
      sGetNum(){
        return this.$store.state.num
      }
    }

  }
</script>

<style scoped>

</style>
