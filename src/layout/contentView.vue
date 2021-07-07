<template>
  <div class="avue-view-content">
       <router-view class="avue-view" />
  </div>
</template>

<script>
export default {
data(){
    return{
        minHeight: window.innerHeight - 64 - 122,
    }
}
}
</script>

<style lang="less" scoped>
</style>