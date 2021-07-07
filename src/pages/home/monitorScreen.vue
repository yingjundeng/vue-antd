<template>
  <div class="bg-color page-padding-md mg-top-xs">
      <div style="text-align:right;">
          <a @click="$router.push('/monitorScreen/historicalVideo')">历史画面与录像</a> 
          <a style="margin-left:50px;" @click="openModal">设置</a>
      </div>
      <div class="player-view">
        <div v-for="item in 49" :key="item+'tu'">
            图像{{item}}
        </div>
       </div>
       <monitorSet-modal ref="monitorSetModal"></monitorSet-modal>
  </div>
</template>

<script>
import monitorSetModal from './monitorSetModal'
export default {
    components:{
        monitorSetModal
    },
data(){
    return{

    }
},
methods:{   
    openModal(){
        this.$refs.monitorSetModal.open(1)
    }
}
}
</script>

<style lang="less" scoped>
.player-view{
        display: flex;
        flex-wrap: wrap;
        justify-items: flex-start;
        background: #333333;
        padding: 10px 10px 0 10px;
        >div{
            width: calc((100% - 50px)/6);
            height: 160px;
            margin-right:10px;  
            margin-bottom:10px;
            background: #F2F2F2;
        }
        :nth-child(6n){
            margin-right:0px;
        }
    }
.admin-layout-content{
    background-color: #333333;
}
</style>