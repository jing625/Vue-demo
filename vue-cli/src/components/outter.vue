<template>
    <div>
      outter拿到的全局数据---{{oGetNum}} <br>
      <button @click="oAdd">outter中-改变全局数据</button>

    </div>
</template>

<script>
    export default {
        name: "outter",
        computed:{
          oGetNum(){
            return this.$store.state.num
          }
        },
        methods:{
          oAdd(){
            this.$store.commit('increase')
          }
        }
    }
</script>

<style scoped>

</style>
