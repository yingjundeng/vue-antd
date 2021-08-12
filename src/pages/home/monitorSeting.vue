<template>
  <div class="monitorSeting-page page-padding-md mg-top-xs">
     <div class="olnytu">
       <a-row :gutter="12" v-for="item in 15" :key="item+'olnytu'">
           <a-col :span="3">图像{{item}}:</a-col>
           <a-col :span="6">
               <a-select default-value="lucy" style="width:100%">
                <a-select-option value="lucy">
                    Lucy
                </a-select-option>
                </a-select>
            </a-col>
           <a-col :span="6">
               <a-select default-value="lucy" style="width:100%">
                <a-select-option value="lucy">
                    Lucy
                </a-select-option>
                </a-select>
           </a-col>
           <a-col :span="6">
               <a-select default-value="lucy" style="width:100%">
                <a-select-option value="lucy">
                    Lucy
                </a-select-option>
                </a-select>
           </a-col>
           <a-col :span="3"><a v-if="item===1" style="font-size:12px;" @click="open(2)"><a-icon type="link"/>联动详情</a> </a-col>
       </a-row>
       </div>

       <a-modal
            :width="width"
            :visible="visible2"
            :maskClosable="false"
            @ok="handleOk"
            @cancel="visible2=false"
        >
            <div slot="title">{{title2}} <a-switch checked-children="开" un-checked-children="关" default-checked /></div>

            <a-form class="visiform" :form="form"  @submit="handleSubmit">
                <a-form-item label="需视频联动的子系统">
                    <a-select
                        mode="multiple"
                        :default-value="['a1', 'b2']"
                        style="width: 100%"
                        placeholder="Please select"
                    >
                        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                        {{ (i + 9).toString(36) + i }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="需视频联动的报警类型">
                    <a-select
                        mode="multiple"
                        :default-value="['a1', 'b2']"
                        style="width: 100%"
                        placeholder="Please select"
                    >
                        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                        {{ (i + 9).toString(36) + i }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="需视频联动的报警级别">
                    <a-select
                        mode="multiple"
                        :default-value="['a1', 'b2']"
                        style="width: 100%"
                        placeholder="Please select"
                    >
                        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                        {{ (i + 9).toString(36) + i }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
            <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="单一报警">
                    <div>
                        <div class="mg-bom-xs">画面显示设置：</div>
                        <div class="monit-div">单一画面显示规则：显示直至报警处理完毕</div>
                    </div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="多报警">
                    <div class="dou-div">
                        <div class="mg-bom-xs">画面显示：</div>
                        <div class="monit-div">
                            <div>
                                <div class="mg-bom-xs mg-top-xs">层级一：子系统</div>
                                <div>
                                    <a-tag color="red">1.火灾自动报警系统</a-tag>
                                    <a-tag color="pink">2.建筑设备监控系统</a-tag>
                                    <a-tag color="orange">3.视频安防监控系统</a-tag>
                                    <a-tag color="green">4.入侵报警系统</a-tag>
                                    <a-tag color="blue" class="mg-top-xs">5.FCU温控系统</a-tag>
                                </div>
                            </div>
                            <div>
                                <div class="mg-bom-xs mg-top-xs">层级二：报警级别</div>
                                <div>
                                    <a-tag color="red">1.紧急报警</a-tag>
                                    <a-tag color="orange">2.重要报警</a-tag>
                                    <a-tag color="blue">3.一般报警</a-tag>
                                </div>
                            </div>
                            <div>
                                <div class="mg-bom-xs mg-top-xs">层级三：报警类型</div>
                                <div>
                                    <a-tag color="red">1.探测报警</a-tag>
                                    <a-tag color="blue">2.运行报警</a-tag>
                                </div>
                            </div>
                        </div>
                    <div>
                        <div class="mg-bom-xs mg-top-xs">轮换模式：</div>
                        <div class="monit-div">当优先级更高的报警出现时，安排其为视频轮换队列中的下一个</div>
                    </div>
                    <div>
                        <div class="mg-bom-xs mg-top-xs">单一画面显示规则：</div>
                        <div class="monit-div">持续显示1min后轮换下一报警, 当前显示的报警在报警处理完毕后不再显示</div>
                    </div>
                    </div>
                </a-tab-pane>
            </a-tabs>
        </a-modal>
  </div>
</template>

<script>
export default {
  name:"monitorSeting",
  data(){
      return{
         form: this.$form.createForm(this, { name: 'monitorSet' }),
         visible:false,
         visible2:false,
         width:630,
         title:'监控大屏设置',
         title2:'联动详情'
      }
  },
  methods:{
      open(val){
         console.log(val)
        if(val===1){
        this.visible = true
        }else{
        this.visible2 = true
        } 
     },
  }
}
</script>

<style lang="less" scoped>
.monitorSeting-page{
    background: #FFFFFF;
.olnytu{
  height: 550px;
  overflow-y:scroll;
  overflow-x:hidden;
  .ant-row{
      margin-bottom: 10px;
  }
}
.dou-div{
  height: 400px;
  overflow-y:scroll;
  overflow-x:hidden;
}
.visiform{
   .ant-row,.ant-form-item{
       margin-bottom: 0px;
    }
  }
.monit-div{
      background: #F7F7F8;
      padding: 10px 20px;
  }
/**滚动条样式 */
.olnytu::-webkit-scrollbar {
    width: 4px;
}
.olnytu::-webkit-scrollbar-thumb{
border-radius: 10px;
--webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
background: rgba(0,0,0,0.2);
}
.olnytu::-webkit-scrollbar-track {
--webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
border-radius: 0;
background: rgba(0,0,0,0.1);
}
.dou-div::-webkit-scrollbar {
    width: 4px;
}
.dou-div::-webkit-scrollbar-thumb{
border-radius: 10px;
--webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
background: rgba(0,0,0,0.2);
}
.dou-div::-webkit-scrollbar-track {
--webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
border-radius: 0;
background: rgba(0,0,0,0.1);
}
}
</style>