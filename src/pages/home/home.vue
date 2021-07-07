<template>
  <div class="home page-padding-md mg-top-xs" :style="{height:`${bodyHeight}px`}">
      <div class="h-left">
          <a-card hoverable class="h-card">
              <div class="s-flex">
                  <div class="one-sb">
                      <div><a-icon type="hdd" theme="twoTone" /> 接入设备</div>
                      <span>100</span>
                  </div>
                  <div class="one-online">
                      <div><a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a"/> 在线</div>
                      <span>33</span>
                  </div>
                  <div class="one-unline">
                      <div><a-icon type="close-circle" /> 离线</div>
                      <span>35</span>
                  </div>
              </div>
          </a-card>
          <a-card hoverable class="h-card">
              <div class="min-title-nolde">主图</div>
              <div style="height:200px;">    
                 <img style="height:100%;width:100%;" src="../../assets/bg.png" alt=".png">
              </div>
          </a-card>
          <a-card hoverable class="h-card">
              <div class="min-title-nolde">今日能耗概览</div>
              <div class="over-view">
                  <div class="overview-box">
                      <div class="box-left"><a-icon type="appstore" /></div>
                      <div class="box-right">
                          <div>综合(吨标准煤)</div>
                          <div>50</div>
                      </div>
                  </div>
                  <div class="overview-box">
                      <div class="box-left"><a-icon type="coffee" /></div>
                      <div class="box-right">
                          <div>水(m³)</div>
                          <div>50</div>
                      </div>
                  </div>
                  <div class="overview-box">
                      <div class="box-left"><a-icon type="thunderbolt" /></div>
                      <div class="box-right">
                          <div>总用电(Kwh)</div>
                          <div>50</div>
                      </div>
                  </div>
                  <div class="overview-box">
                      <div class="box-left"><a-icon type="wallet" /></div>
                      <div class="box-right">
                          <div>空调用电(Kwh)</div>
                          <div>50</div>
                      </div>
                  </div>
              </div>
              <div class="min-title-nolde">实时能耗</div>
              <div id="myechart" style="width:100%;height:170px;"></div>
          </a-card>
      </div>
      <div class="h-right">
          <a-card hoverable class="h-card">
              <div class="s-flex">
                  <div class="one-sb" >
                      <div>报警总数</div>
                      <span>100</span>
                  </div>
                  <div class="one-online" style="background: #FEEDE5;">
                      <div><a-icon type="alert" style="color:#F14500;" />紧急报警</div>
                      <span>33</span>
                  </div>
                  <div class="one-unline" style="background: #FFF7E8;">
                      <div><a-icon type="alert" style="color:#FAAE14;" />重要报警</div>
                      <span>35</span>
                  </div>
                  <div class="one-unline" style="background: #E8F4FF;">
                      <div><a-icon type="alert" style="color:#1890FF;"/>普通报警</div>
                      <span>35</span>
                  </div>
              </div>
              <div>
                 <div class="min-title-nolde">报警列表</div> 
              </div>
              <div style="height:300px">
                  <dv-scroll-board v-if="isHidden" :config="config"/>
              </div>
          </a-card>
          <a-card hoverable class="h-card view-vedio">
              <div class="min-title-nolde">视频安防
                  <a-icon  style="color:#1F8AD2;float:right;margin-top:5px;" type="setting" />
              </div>
              <div class="player-view">
                  <div v-for="item in 8" :key="item+'tu'">
                      图像{{item}}
                  </div>
              </div>
          </a-card>
      </div>
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
      return{
        bodyHeight:window.innerHeight-70,
        config:{
            header: ['报警时间', '级别', '类型','名称','子系统','设备类型','设备名称','位置'],
            data: [
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
                ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3','行1列1', '行1列2'],
            ],
            index: true,
            waitTime:1500,
            columnWidth: [50],
            align: ['center'],
            carousel: 'single'
        },
        isHidden:true
      }
  },
  mounted(){
   this.initEchart()
   this.isHidden = false
   setTimeout(()=>{
       this.$nextTick(() => {
         this.isHidden = true
       })
   },100)
  },
  methods:{
      initEchart(){
        let myChart = this.$echarts.init(document.getElementById('myechart'));

        // 指定图表的配置项和数据
        let option = {
            title: {
                text: ''
            },
            tooltip: {

            },
            legend: {
                data:['water','total_electronic','conditioner_electronic'],
                top:'0%',
                left: 'center',
            },
            xAxis: {
                data: ["01","03","05","07","09"],
            },
            yAxis: {},
            series: [
                {
                name: 'water',
                type: 'bar',
                color:'#5B8FF9',
                data: [15, 20, 36, 10, 18, 20]
               },
               {
                name: 'total_electronic',
                type: 'bar',
                color:'#5AD8A6',
                data: [15, 20, 36, 12, 10, 20]
               },
               {
                name: 'conditioner_electronic',
                type: 'bar',
                color:'#5D7092',
                data: [15, 20, 36, 10, 13, 20]
               }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
  }
}
</script>

<style lang="less" scoped>
.home{
    display: flex;
    font-size: 17px;
    background: #F7F7F8;
    .h-left{
        width: 400px;
        margin-right:15px;
        .h-card{
            margin-bottom: 10px;
            .s-flex{
                display: flex;
                justify-content: space-around;
                text-align: center;
                color: #040C2C;
                opacity: 0.65;
                font-size: 17px;
                span{
                    display: block;
                    font-size: 34px;
                }
            }
            .over-view{
                display: flex;
                flex-wrap: wrap;
                justify-items: flex-start;
                >div{
                    width: calc((100% - 10px)/2);
                    height: 60px;
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
                    padding:7px;
                    .box-left{
                       line-height: 50px;
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
    }
    .h-right{
        flex: 1;
        .h-card{
            margin-bottom: 10px;
            .s-flex{
                display: flex;
                justify-content: space-around;
                text-align: center;
                color: #040C2C;
                opacity: 0.65;
                font-size: 17px;
                >div{
                    width: calc((100% - 60px)/4);
                    height: 120px;
                    margin-right:20px;
                    margin-bottom: 10px;
                    background: #F0F1F3;
                    border-radius: 5px;
                    padding: 26px 0;
                }
                :nth-child(4n){
                    margin-right:0px;
                }
                span{
                    display: block;
                    font-size: 34px;
                }
            }
        }
        .view-vedio{
            .player-view{
                display: flex;
                flex-wrap: wrap;
                justify-items: flex-start;
                >div{
                    width: calc((100% - 60px)/4);
                    height: 110px;
                    margin-right:20px;
                    margin-bottom: 10px;
                    background: #F2F2F2;
                }
                :nth-child(4n){
                    margin-right:0px;
                }
            }

        }
    }
}
</style>