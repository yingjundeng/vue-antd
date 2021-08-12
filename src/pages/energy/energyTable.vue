<template>
  <div class="energyTable page-padding-md mg-top-xs">
      <div style="height；300px;">
          <a-row :grtter="24">
              <a-col :span="8">
                  <a-card style="height:300px;">
                     <div class="mititle">今日能耗概览</div>
                     <div class="over-view">
                        <div class="overview-box">
                            <div class="box-left"><i class="iconfont icon-zonglangailanyingyongzhongxin"/></div>
                            <div class="box-right">
                                <div>综合(吨标准煤)</div>
                                <div>50</div>
                            </div>
                        </div>
                        <div class="overview-box">
                            <div class="box-left"><i class="iconfont icon-shui"/></div>
                            <div class="box-right">
                                <div>水(m³)</div>
                                <div>50</div>
                            </div>
                        </div>
                        <div class="overview-box">
                            <div class="box-left"><i class="iconfont icon-thunderbolt"/></div>
                            <div class="box-right">
                                <div>总用电(Kwh)</div>
                                <div>50</div>
                            </div>
                        </div>
                        <div class="overview-box">
                            <div class="box-left"><i class="iconfont icon-kongtiao"/></div>
                            <div class="box-right">
                                <div>空调用电(Kwh)</div>
                                <div>50</div>
                            </div>
                        </div>
                    </div>
                  </a-card>
              </a-col>
              <a-col :span="1"></a-col>
              <a-col :span="15">
                  <a-card style="height:300px;">
                    <com-echart divId="enerChart"
                    width="100%" 
                    height="230px"  
                    text="历史用电量"
                    :legend="['水','总用电','空调用电']"
                    :series="seriesData"/>
                  </a-card>
              </a-col>
          </a-row>
      </div>
      <div style="margin-top:20px;">
        <a-card>
            <div style="text-align:right;">
            <a-radio-group  :value="size" size="small" @change="handleSizeChange">
                <a-radio-button value="year">
                    年
                </a-radio-button>
                <a-radio-button value="month">
                    月
                </a-radio-button>
            </a-radio-group>
            </div>
            <com-echart divId="henergyChart"
            width="100%" 
            height="230px"  
            text="历史用电量"
            :legend="['水','总用电','空调用电']"
            :series="seriesData"/>
        </a-card>
      </div>
  </div>
</template>

<script>
import comEchart from '@/pages/alarm/components/comEchart'
export default {
name:'energyTable',
components:{comEchart},
data(){
    return{
        size:"year",
       seriesData:[
                {
                name: '水',
                type: 'bar',
                color:'#5D7092',
                data: [15, 20, 36, 10, 18, 20]
               },
               {
                name: '总用电',
                type: 'bar',
                color:'#5AD8A6',
                data: [15, 20, 36, 12, 10, 20]
               },
               {
                name: '空调用电',
                type: 'bar',
                color:'#7FBADB',
                data: [15, 20, 36, 10, 13, 20]
               }
            ],

    }
},
methods:{
  handleSizeChange(val){
    this.size = val.target.value
  }
}
}
</script>

<style lang="less" scoped>
.energyTable{
    background: #fff;
    .mititle{
    font-weight: 900;
    font-size: 18px;
    color: black;
    margin-bottom: 10px;
  }
  .over-view{
        display: flex;
        flex-wrap: wrap;
        justify-items: flex-start;
        >div{
            width: calc((100% - 10px)/2);
            height: 100px;
            margin-right:10px;
            margin-bottom: 10px;
            background: #F0F1F3;
        }
        :nth-child(2n){
            margin-right:0px;
        }
        .overview-box{
            display: flex;
            justify-items: flex-start;
            padding:17px;
            .box-left{
                line-height: 70px;
                margin-right: 10px;
            }
            .box-right{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                :nth-last-child(1){
                    font-size: 23px;
                    color: #2E3449;
                }
            }

        }
    }
}

</style>