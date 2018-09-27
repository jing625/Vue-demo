<template>
  <div>
    <span>我是爸爸</span>
    <hr>
    <son :msg = "toSonMsg"></son>
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
        toSonMsg: '我是你爸传过来的'
      }
    }
  }
</script>

<style scoped>

</style>
