<template>
  <div class="bg-color page-padding-md mg-top-xs">
    <a-card>
        <com-echart divId="oneChart" 
        width="100%" 
        height="230px" 
        text="报警响应时间（min）"
        :series="seriesData"/>
    </a-card>

    <a-card style="margin:20px 0;">
        <com-echart divId="twoChart"
        width="100%" 
        height="230px" 
        text="各类型报警数量统计"
        :series="seriesData"/>
    </a-card>

   <a-card>
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
export default {
name:'alarmTotal',
components:{comEchart},
data(){
    return{
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

}
}
</script>

<style lang="less" scoped>

</style>