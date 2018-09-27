<template>
    <div>
      outter拿到的全局数据---{{oGetNum}}
    </div>
</template>

<script>
    export default {
        name: "outter",
        computed:{
          oGetNum(){
            return this.$store.state.num
          }
        }
    }
</script>

<style scoped>

</style>
