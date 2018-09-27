<template>
    <div>
      <span>我是儿子</span>
      <br>
      爸爸传来的数据---{{msg}}
      <button>向爸爸发送数据</button>
    </div>
</template>

<script>
    export default {
        name: "son",
        props: {
          msg: {
            type: String,
            default: ''
          }
        }
    }
</script>

<style scoped>

</style>
