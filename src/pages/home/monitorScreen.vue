<template>
  <div class="bg-color">
      <div style="text-align:right;background:#262626;">
          <a style="color:#F1F3F4;" @click="$router.push('/monitorScreen/historicalVideo')">历史画面与录像</a> 
          <a style="margin:0 30px;color:#F1F3F4;" @click="$router.push('/monitorScreen/setting')">设置</a>
      </div>
       <j-video :setting="setting" :sysParams="sysParams" :list="list"/>
  </div>
</template>

<script>
import monitorSetModal from './monitorSetModal'
import jVideo from '@/components/video/jVideo.vue'
export default {
    components:{
        monitorSetModal,
        jVideo
    },
data(){
    return{
     setting:{
         id:'widnow'
     },
     sysParams:{
        appkey:"28730366",                         //综合安防管理平台提供的appkey，必填
        secret:"HSZkCJpSJ7gSUYrO6wVi",   //综合安防管理平台提供的secret，必填
        ip:"10.19.132.75",                         //综合安防管理平台IP地址，必填
        playMode:0,                              //初始播放模式：0-预览，1-回放
        port:443,
     },
     list:[
        {
            cameraIndexCode: "",
            ezvizDirect: 0,
            gpuMode: 0,
            streamMode: 0,
            transMode: 1,
            wndId: 1     // 预览的窗口
        },
        {
            cameraIndexCode: "",
            ezvizDirect: 0,
            gpuMode: 0,
            streamMode: 0,
            transMode: 1,
            wndId: 2
        }
    ],
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
        // padding: 10px 10px 0 10px;
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