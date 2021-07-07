<template>
  <div>
    <div class="min-title">常规工作信息</div>
    <a-descriptions title="">
    <a-descriptions-item label="设备状态">
        <a-badge status="success" />正常
    </a-descriptions-item>
    </a-descriptions>
    <div class="min-title">工作参数
        <div class="float-right font-size-xs" style="font-weight: 500;" v-if="!visible">
          <a href="#" @click="visible = true"><i class="iconfont icon-fabushangjia"></i>下发指令</a>
        </div>
    </div>
    
    <a-table 
    :columns="columns"
    :pagination="false" 
    :dataSource="dataSource">
    <span v-if="visible" slot="defalutVal" slot-scope="text">温度 <a-input-number v-model="visible" :min="1" :max="10" /> °C</span>
    <span v-else slot="defalutVal" slot-scope="text">温度{{ text }}°C</span>
    
  </a-table>
  <div v-if="visible" class="mg-top-md">
      <a-button type="primary" class="mg-right-sm" @click="sumitHandle">确认</a-button>
      <a-button @click="visible = false">取消</a-button>
  </div>
  </div>
</template>

<script>
const columns = [
    {title:'测量值',dataIndex:'testVal'},
    {title:'设定值',dataIndex:'defalutVal',scopedSlots:{customRender:'defalutVal'}},
]
const dataSource = [
    {testVal:'温度28°C',defalutVal:29}
]
export default {
data(){
    return{
       columns,
       dataSource,
       visible:false
    }
},
methods:{
    sumitHandle(params){
        this.visible = false
    }
}
}
</script>

<style>

</style>