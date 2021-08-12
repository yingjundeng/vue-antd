<template>
  <div>
    <div class="min-title">实时告警</div>
    <div class="table-tips">
        <a-icon type="info-circle" class="mg-right-sm" style="color:#409EFD;"/>共<span style="color:#2877FF;margin:0 4px;" >4</span>条实时告警
    </div>
    <a-table :scroll="setScroll" :columns="columns" :dataSource="dataSource">
      <a slot="action" slot-scope="text" href="javascript:;">Delete</a>
      <div slot="expandedRowRender" slot-scope="record" style="margin: 0">
        <p>告警代码：{{ record.description }}</p>
        <p>告警描述：{{ record.description }}</p>
      </div>
    </a-table>
  <div class="min-title">历史告警记录</div>
  <a-table
  :scroll="setSolScroll" 
  :columns="solColumns" 
  :dataSource="dataSource">
  </a-table>
  </div>
</template>

<script>
const columns = [
  { title: '告警等级', dataIndex: 'name', key: 'name' },
  { title: '告警类型', dataIndex: 'age', key: 'age' },
  { title: '触发时间', dataIndex: 'time', key: 'address' },
];
const solColumns = [
  { title: '告警等级', dataIndex: 'name', key: 'name' },
  { title: '告警类型', dataIndex: 'age', key: 'age' },
  { title: '触发时间', dataIndex: 'time', key: 'address' },
  { title: '触发时间', dataIndex: 'time', key: 'address' },
  { title: '触发时间', dataIndex: 'time', key: 'address' },
  { title: '触发时间', dataIndex: 'time', key: 'address' },
  { title: '触发时间', dataIndex: 'time', key: 'address' },
  { title: '触发时间', dataIndex: 'time', key: 'address' },
];

const dataSource = [
  {
    key: 1,
    name: 'John',
    age: 32,
    time: 'New',
    description: 'My name is John',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    description: 'My name is Jim',
  },
];
export default {
data(){
    return{
      dataSource,
      columns,
      solColumns,
    }
},
computed:{
    setSolScroll(){
        if(this.solColumns.length>4){
            return {x:700,y:300}
        }
    },
    setScroll(){
        if(this.columns.length>2){
            return {x:0,y:300}
        }
    },
},
methods:{

}
}
</script>

<style lang="less" scoped>
.table-tips{
  background: #E6F7FF;
  border:1px solid #91D5FF;
  padding: 4px 8px;
  font-size: 12px;
}
</style>