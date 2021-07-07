<template>
  <div>
    <a-modal v-model="visible" 
    title="模式详情" 
    @ok="handleOk"
    @close="visible=false">
    <a-form :form="form">
        <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="模式名称"
        >
        <a-input v-decorator="['username']"/>
        </a-form-item>
        <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="模式描述"
        >
        <a-input v-decorator="['nickname']"/>
        </a-form-item>
        <div style="font-size:18px;">如果:</div>
        <div style="margin:4px 0;">以下所有条件满足时:</div>
        <div class="back-border">
            <div style="background:#F2F2F2;">
                <a-row :gutter="12">
                    <a-col :span="6" style="text-align:center">设备</a-col>
                    <a-col :span="3">属性</a-col>
                    <a-col :span="8">触发机制</a-col>
                </a-row>
            </div>
            <div>
                <a-row :gutter="12">
                    <a-col :span="6">1. 所有 温控器</a-col >­
                    <a-col :span="3">温度</a-col>
                    <a-col :span="10">持续 1 min 大于 25.5 </a-col>
                </a-row>
            </div>
            <div style="border-top:1px solid #D9D9D9">
                <a-row :gutter="12">
                    <a-col :span="6">2. 所有 温控器</a-col>
                    <a-col :span="3">状态</a-col>
                    <a-col :span="8"> 持续 1 min 等于 关闭 </a-col>
                </a-row>
            </div>
        </div>
        <div style="font-size:18px;">则:</div>
        <div class="back-border">
            <div style="background:#F2F2F2;">
                <a-row :gutter="12">
                    <a-col :span="7" style="text-align:center">设备</a-col>
                    <a-col :span="3">属性</a-col>
                    <a-col :span="8">触发机制</a-col>
                </a-row>
            </div>
            <div>
                <a-row :gutter="12">
                    <a-col :span="7">1. 设置 所有 温控器</a-col >­
                    <a-col :span="3">状态</a-col>
                    <a-col :span="10">为 开启</a-col>
                </a-row>
            </div>
            <div style="border-top:1px solid #D9D9D9">
                <a-row :gutter="12">
                    <a-col :span="7">2. 设置 所有 温控器 </a-col>
                    <a-col :span="3">模式</a-col>
                    <a-col :span="8">为 制冷 </a-col>
                </a-row>
            </div>
            <div style="border-top:1px solid #D9D9D9">
                <a-row :gutter="12">
                    <a-col :span="7">3. 设置 所有 温控器 </a-col>
                    <a-col :span="3">温度</a-col>
                    <a-col :span="8">为 25.5 </a-col>
                </a-row>
            </div>
        </div>

        <div style="font-size:18px;margin:4px 0;">应用时间段</div>
        <div style="background:#F2F2F2;padding:10px;">
            <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="执行日期段">
            <a-range-picker  />
            </a-form-item>
            <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="执行时间段">
            <a-time-picker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" />--
            <a-time-picker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" />
            </a-form-item>
            <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="">
            <a-checkbox :checked="checkNick" >
                跳过周末
            </a-checkbox>
            <a-checkbox :checked="checkNick" >
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
export default {
  data() {
    return {
        moment,
      visible: false,
      checkNick: false,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
      labelCol: { span: 4 },
      wrapperCol: { span: 15 },
    };
  },
  methods: {
    showModal(record) {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleChange(){ },
  },
};
</script>

<style lang="less" scoped>
.back-border{
    border:1px solid #D9D9D9;   
}
</style>