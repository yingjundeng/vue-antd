<template>
  <div>
    <a-modal v-model="visible" 
    title="报警详情" 
    @ok="handleOk"
    @close="visible=false">
    <a-descriptions title="" :column="2">
    <a-descriptions-item label="报警时间">
      2021-07-03
    </a-descriptions-item>
    <a-descriptions-item label="报警级别">
      T
    </a-descriptions-item>
    <a-descriptions-item label="报警类型">
      R3
    </a-descriptions-item>
    <a-descriptions-item label="报警名称">
      empty
    </a-descriptions-item>
    <a-descriptions-item label="子系统">
      No18
    </a-descriptions-item>
    <a-descriptions-item label="设备类型">
      f3
    </a-descriptions-item>
    <a-descriptions-item label="设备名称">
      fd
    </a-descriptions-item>
    <a-descriptions-item label="设备位置">
     fd
    </a-descriptions-item>
    <a-descriptions-item label="辅助信息">
      <a>监控视频</a><a-divider type="vertical" /><a>电子地图</a>
    </a-descriptions-item>
    <a-descriptions-item v-if="ishistoy" label="处理人">
      张丝
    </a-descriptions-item>
    <a-descriptions-item v-if="ishistoy" label="处理时间">
      {{"2020-11-24"}}
    </a-descriptions-item>
    <a-descriptions-item label="处理状态">
      待处理
    </a-descriptions-item>
    <a-descriptions-item label="报警备注">
      
    </a-descriptions-item>
  </a-descriptions>
   <a-textarea v-model="textareadata"></a-textarea>
   <div slot="footer">
       <a-button @click="visible=false">取消</a-button>
       <a-button type="danger">驳回</a-button>
       <a-button type="primary">确认</a-button>
   </div>
    </a-modal>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      moment,
      ishistoy:false,
      visible: false,
      checkNick: false,
      textareadata:'',
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
      labelCol: { span: 4 },
      wrapperCol: { span: 15 },
    };
  },
  methods: {
    showModal(record,ishistoy=false) {
      this.ishistoy = ishistoy
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