<template>
  <div class="bg-color page-padding-md mg-top-xs alarmTotalpage" :style="{height:`${bodyHeight}px`}">
    <a-card>
      <mothDayTab class="text-right" @handleOk="mothDayTabOk"/>
        <com-echart divId="oneChart" 
        width="100%" 
        height="230px" 
        text="报警响应时间（min）"
        :series="seriesData"/>
    </a-card>

    <a-card style="margin:20px 0;">
      <mothDayTab class="text-right" @handleOk="mothDayTabOk"/>
        <com-echart divId="twoChart"
        width="100%" 
        height="230px" 
        text="各类型报警数量统计"
        :series="seriesData"/>
    </a-card>

   <a-card>
        <div class="text-right">
          <a-select default-value="楼层" style="width: 80px" size="small">
            <a-select-option value="jack">
                Jack
            </a-select-option>
          </a-select>

          <a-select default-value="区域" style="width: 80px;margin-left:5px;" size="small">
            <a-select-option value="jack">
                Jack
            </a-select-option>
          </a-select>
          <mothDayTab class="text-right mg-top-xs" @handleOk="mothDayTabOk"/>
        </div>
        <com-echart divId="threeChart"
        text="各区域报警数量统计"
        width="100%" 
        height="230px" 
        :series="seriData"
        :legend="[]"/>
    </a-card>
  </div>
</template>

<script>
import comEchart from './components/comEchart'
import mothDayTab from './components/mothDayTab'
export default {
name:'alarmTotal',
components:{comEchart,mothDayTab},
data(){
    return{
      bodyHeight:window.innerHeight-70,
       seriesData:[
                {
                name: 'energent',
                type: 'bar',
                color:'#922633',
                data: [15, 20, 36, 10, 18, 20]
               },
               {
                name: 'importent',
                type: 'bar',
                color:'#FBD437',
                data: [15, 20, 36, 12, 10, 20]
               },
               {
                name: 'normal',
                type: 'bar',
                color:'#7FBADB',
                data: [15, 20, 36, 10, 13, 20]
               }
            ],

            seriData:[
                {
                name: 'total',
                type: 'bar',
                color:'#698099',
                data: [15, 20, 36, 10, 18, 20]
               },
            ]
    }
},
methods:{
  mothDayTabOk(val){
    console.log(val)
  }
}
}
</script>

<style lang="less" scoped>
.text-right{
  text-align: right;
}
.alarmTotalpage{
  overflow-y: scroll;
}
   /**滚动条样式 */
.alarmTotalpage::-webkit-scrollbar {
    width: 6px;
}
.alarmTotalpage::-webkit-scrollbar-thumb{
border-radius: 10px;
--webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
background: rgba(0,0,0,0.2);
}
.alarmTotalpage::-webkit-scrollbar-track {
--webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
border-radius: 0;
background: rgba(0,0,0,0.1);
}
</style>