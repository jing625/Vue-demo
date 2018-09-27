<template>
  <div>
    <span>我是儿子</span> <br>
    儿子中的全局属性--{{sGetNum}}
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
