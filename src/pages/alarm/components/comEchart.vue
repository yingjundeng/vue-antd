<template>
  <div style="width:100%">
      <div :id="divId" :style="{'width':width,'height':height}"></div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
      return{

      }
  },
  props:{
    divId:{
       default:'comEchart',
       type:String
    },
    text:'',
    width:{
       default:'600px',
       type:[String,Number]
    },
    height:{
       default:'200px',
       type:[String,Number]
    },
    legend:{
       default:()=>['energent','importent','normal'],
       type:Array
    },
    xAxis:{
       default:()=>["01","03","05","07","09"],
       type:Array
    },
    series:{
       default:()=>[],
       type:Array
    },
  },
  mounted(){
    setTimeout(()=>{ //延时为了echarts延迟绘制,防止容器超过父级,以免过多溢出
       this.initEchart()
    },100)
  },
    methods:{
      initEchart(){
        let myChart = this.$echarts.init(document.getElementById(this.divId));

        // 指定图表的配置项和数据
        let option = {
            title: {
                text: this.text
            },
            tooltip: {},
            legend: {
                data:this.legend
            },
            xAxis: {
                data:this.xAxis
            },
            yAxis: {},
            series: this.series
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
  }
}
</script>

<style>
</style>