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
                 <img style="height:100%;width:100%;" src="../../assets/cui.jpg" alt=".png">
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
                  <div v-for="item in 8" :key="item+'tu'" >图像{{item}}</div>
                <!-- <video-player 
                v-for="item in 8" :key="item+'tu'" 
                class="video-player vjs-custom-skin video-mu" 
                ref="videoPlayer" 
                :playsinline="true" 
                :options="playerOptions"/> -->
              </div>
          </a-card>
      </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
  const playerOptions= {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
        {
        type: 'application/x-mpegURL',
        src: "http://open.andmu.cn/m3u8/83fc725118d1470863ce581ecbc21a30.m3u8", //视频url地址
        },
        ],
        poster: require("../../assets/bg.png"), //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: false,
        fullscreenToggle: true, //全屏按钮
        },
        }
import {getThingsList,addThingsList} from '@/api/admin/home'
export default {
  name:'home',
  components:{videoPlayer},
  data(){
      return{
        bodyHeight:window.innerHeight-70,
        config:{
            playerOptions:playerOptions,
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
   
//    this.initgetThingsList()
   this.isHidden = false
   setTimeout(()=>{
       this.$nextTick(() => {
         this.isHidden = true
       })
   },100)
//    let stime = setInterval(()=>{
//     this.addThings()
//    },500)

// for(let i =5;i<=62;i++){
//     this.addThings(i)
//   }
// this.addThings(5)
  },
  methods:{
      //批量新增事物
      addThings(i){
        const query=
        {"name":"摄像头172.16.3."+i,"typeId":"main.camera","timeZone":"Asia/Shanghai","characteristics":[{"name":"ip","value":"172.16.3."+i}]}
        // {
        // "name":"摄像头",
        // "typeId":"main.camera",
        // "timeZone":"Asia/Shanghai",
        // "characteristics":[
        //     {"name":"ip","value":"4"},
        //     {"name":"indexcode","value":""},
        //     {"name":"playbackUrl","value":""},
        //     {"name":"previewUrl","value":""},
        //     {"name":"number","value":""},
        //     {"name":"specifications","value":""},
        //     {"name":"createTime","value":""},
        // ]}
          addThingsList(query).then(res=>{
             console.log(res)
          })
      },
      initgetThingsList(){
        getThingsList().then(res=>{
            console.log(res)
        })
      },
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
                data:['用水量','总用电','空调用电'],
                top:'0%',
                left: 'center',
            },
            xAxis: {
                data: ["01","03","05","07","09"],
            },
            yAxis: {},
            series: [
                {
                name: '用水量',
                type: 'bar',
                color:'#5B8FF9',
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
    overflow-y: scroll;
    overflow-x:hidden;
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
   /**滚动条样式 */
.home::-webkit-scrollbar {
    width: 6px;
}
.home::-webkit-scrollbar-thumb{
border-radius: 10px;
--webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
background: rgba(0,0,0,0.2);
}
.home::-webkit-scrollbar-track {
--webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
border-radius: 0;
background: rgba(0,0,0,0.1);
}
</style>