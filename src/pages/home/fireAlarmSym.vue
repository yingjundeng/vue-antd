<template>
  <div class="ature-page" :style="{height:`${bodyHeight}px`}">
     <!-- <div class="ature-left" :style="{width:`${atureLeftWidth}px`}">
         <a-card style="height:90vh;background:rgba(24, 30, 49, 0.8);border:none;">
            <j-tree v-if="isCaret"/>
          </a-card>
          <div class="ature-caret" @click="changeIsCaret">
            <a-icon v-if="isCaret" type="caret-left" />
            <a-icon v-else type="caret-right" />
          </div>
     </div>
     <div class="ature-right">
         <div >
             <a-breadcrumb style="color:#fff;">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
            </a-breadcrumb>
         </div>
         <div class="alarm-alert">
             <j-alert/>
         </div>
         <div class="figure">
             <j-pic-item/>
         </div>
         <div class="search-input"><a-input-search placeholder="输入设备/传感器名称查找" style="width:230px;" size="small"/></div>
         <div class="jump-span"><span>返回</span><span>前进</span></div>
     </div> -->

     <iframe ref="htmlpage" @load="gg" src="https://www.hightopo.com/demo/ketian-cgznksh/" frameborder="0" width="100%" :height="`${minHeight}px`"></iframe>
     <!-- <div id="htmlpage"></div> -->
  </div>
</template>

<script>
import jTree from '@/components/jTree'
import jAlert from '@/pages/components/jAlert'
import jPicItem from '@/pages/components/jPicItem'
export default {
  name:'temperature',
  components:{jTree,jAlert,jPicItem},
  data(){
      return{
          bodyHeight:window.innerHeight-70,
          isCaret:true,
          atureLeftWidth:240,
          minHeight: window.innerHeight + 64 + 126,
      }
  },
  mounted(){
      console.log(this.$refs.htmlpage)
    //   this.initpage()
  },
  methods:{
      gg(e){
         console.log(e) 
      },
      initpage(){
          let src="https://www.hightopo.com/demo/ketian-cgznksh/";
            $.get(src,function(data){
               $("htmlpage").html(data);
            });
      },
      //收缩side-left
     changeIsCaret(){
         this.isCaret = !this.isCaret
         if(this.isCaret){
             return this.atureLeftWidth = 240
         }
         this.atureLeftWidth = 0
     } 
  }
}
</script>

<style lang="less" scoped>
@import '../../theme/default/color.less';
.ature-page{
    display: flex;
    overflow-y: scroll;
    .ature-left{
        width: 240px;
        min-height: 90vh;
        position: relative;
        .ature-caret{
          position: absolute;
          top: 260px;
          right: 0;
          cursor: pointer;
          color: #409EFD;
          line-height: 45px;
          border:1px solid #EEEEEE;
        }
        
    }
    .ature-right{
        width: 100%;
        min-height: 90vh;
        position:relative;
        background:rgba(24, 30, 49, 0.7);
        .alarm-alert{
            position: absolute;
            top:50px;
            right:10px;
        }
        .search-input{
           position: absolute;
           top:50px;
           left:10px; 
        }
        .jump-span{
            position: absolute;
           top:0px;
           left:190px; 
            color: #fff;
            font-size: 12px;
            >span{
                background-color: #1E2436;
                padding:5px 7px;
                border-radius: 2px;
                margin-left:10px;
                width: 44px;
                height: 30px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                cursor: pointer;
            }
        }
    }


}
    
</style>