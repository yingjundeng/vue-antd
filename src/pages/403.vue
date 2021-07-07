<template>
  <exception-page home-route="/home" :style="`min-height: ${minHeight}`" type="403" />
</template>

<script>
import ExceptionPage from '@/components/exception/ExceptionPage'
import {mapState} from 'vuex'
export default {
  name: 'Exp403',
  components: {ExceptionPage},
  data(){
      return{
          pageMinHeight:570
      }
  },
  computed: {
    minHeight() {
      return this.pageMinHeight ? this.pageMinHeight + 'px' : '100vh'
    }
  }
}
</script>

<style scoped lang="less">
</style>
