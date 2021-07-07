<template>
  <div>
    <a-modal v-model="visible" 
    title="模式详情" 
    @ok="handleOk"
    @close="visible=false">
    <div class="min-title">基本信息</div>
    <a-form :form="form">
        <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="模式名称"
        >
        <div v-if="isShow1">模式名称 <i class="iconfont icon-bianjixiugaixietianxiegenggaiqianming" @click="isShow1=false"></i></div> 
        <div v-else class="input-relative">
            <a-input v-decorator="['username']"/>
            <div class="input-absolute"><a-button type="primary" icon="check" size="small" /><a-button @click="isShow1=true" icon="close" size="small" class="mg-left-xs"/></div>
        </div>
        </a-form-item>
        <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="模式描述"
        >
        <div v-if="isShow2">模式描述 <i class="iconfont icon-bianjixiugaixietianxiegenggaiqianming" @click="isShow2=false"></i></div> 
        <div v-else class="input-relative">
            <a-input v-decorator="['nickname']"/>
            <div class="input-absolute"><a-button type="primary" icon="check" size="small" /><a-button @click="isShow2=true" icon="close" size="small" class="mg-left-xs" /></div>
        </div> 
        </a-form-item>

        <div class="min-title">规则</div>
        <div>如果:</div>
        <div style="margin:4px 0;color:#409EFD;"><a-icon type="info-circle" class="mg-right-sm" />以下所有条件满足时:</div>
        <div class="back-border">
            <div style="background:#F7F7F8;" class="page-padding-xs">
                <a-row :gutter="12">
                    <a-col :span="3">条件1</a-col >
                    <a-col :span="6">所有 <span class="fd-color fd-padding">温控器</span> </a-col >­
                    <a-col :span="3" class="fd-color fd-padding">温度</a-col>
                    <a-col :span="10" class="fd-padding">持续 1 min <span class="fd-color fd-padding">大于</span> <span class="fd-color fd-padding">25.5</span> </a-col>
                </a-row>
            </div>
            <div style="border-top:1px solid #D9D9D9;background:#F7F7F8;" class="page-padding-xs">
                <a-row :gutter="12">
                    <a-col :span="3">条件2</a-col >
                    <a-col :span="6">所有 <span class="fd-color fd-padding">温控器</span> </a-col>
                    <a-col :span="3" class="fd-color fd-padding">状态</a-col>
                    <a-col :span="10">持续 1 min <span class="fd-color fd-padding">等于</span> <span class="fd-color fd-padding">关闭</span> </a-col>
                </a-row>
            </div>
        </div>
        <div>则执行:</div>
        <div class="back-border">
            <!-- <div style="background:#F2F2F2;">
                <a-row :gutter="12">
                    <a-col :span="7" style="text-align:center">设备</a-col>
                    <a-col :span="3">属性</a-col>
                    <a-col :span="8">触发机制</a-col>
                </a-row>
            </div> -->
            <div style="background:#F7F7F8;" class="page-padding-xs">
                <a-row :gutter="12">
                    <a-col :span="3">动作1</a-col >
                    <a-col :span="8">设置 所有 <span class="fd-color fd-padding">温控器</span></a-col >­
                    <a-col :span="4" class="fd-color">状态</a-col>
                    <a-col :span="5">为 <span class="fd-color fd-padding">开启</span> </a-col>
                </a-row>
            </div>
            <div style="background:#F7F7F8;border-top:1px solid #D9D9D9;" class="page-padding-xs">
                <a-row :gutter="12">
                    <a-col :span="3">动作2</a-col >
                    <a-col :span="8">设置 所有 <span class="fd-color fd-padding">温控器</span> </a-col>
                    <a-col :span="4" class="fd-color">模式</a-col>
                    <a-col :span="8">为  <span class="fd-color fd-padding">制冷</span> </a-col>
                </a-row>
            </div>
            <div style="background:#F7F7F8;border-top:1px solid #D9D9D9" class="page-padding-xs">
                <a-row :gutter="12">
                    <a-col :span="3">动作3</a-col >
                    <a-col :span="8">设置 所有 <span class="fd-color fd-padding">温控器</span> </a-col>
                    <a-col :span="4" class="fd-color">温度</a-col>
                    <a-col :span="8">为 <span class="fd-color fd-padding">25.5</span></a-col>
                </a-row>
            </div>
        </div>

        <div class="min-title" style="margin-top:10px;">应用时间段</div>
        <div style="background:#F7F7F8;padding:10px;">
            <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="执行日期段">
            <a-range-picker @change="onChange" />
            </a-form-item>
            <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="执行时间段">
            <a-time-picker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" />--
            <a-time-picker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" />
            </a-form-item>
            <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="">
            <a-checkbox :checked="checkNick" @change="handleChange">
                跳过周末
            </a-checkbox>
            <a-checkbox :checked="checkNick" @change="handleChange">
                跳过节日假
            </a-checkbox>
            </a-form-item>
        </div>
    </a-form>
    </a-modal>
  </div>
</template>
<script>
import moment from 'moment';
import {putAutomaticObj} from '@/api/admin/home'
export default {
  data() {
    return {
      moment,
      isShow1:true,
      isShow2:true,
      visible: false,
      checkNick: false,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
      labelCol: { span: 4 },
      wrapperCol: { span:16 },
    };
  },
  methods: {
    showModal(record) {
      this.visible = true;
    },
    //编辑保存
    handleOk() {
      this.form.validateFields((err, values) => {
          if(!err){
              console.log(values)
              putAutomaticObj(values).then(res=>{
                  if(res.code===0){
                      this.$message.success('操作成功')
                      this.visible = false;
                  }else{
                      this.$message.error(res.msg)
                  }
              })
          }
      })
    },
    onChange(){},
    handleChange(){ },
  },
};
</script>

<style lang="less" scoped>
.back-border{
    border:1px solid #D9D9D9;   
}
.fd-color{
    background: #FFF6E5;
    border: 1px solid #FADCA0;
}
.fd-padding{
   padding: 3px 15px 3px 3px;
}
.input-relative{
    position: relative;
    top:0;
    left:0;
}
.input-absolute{
    position: absolute;
    top:0;
    right:-59px;
}
</style>