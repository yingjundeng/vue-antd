<template>
  <div>
      <div class="mg-bom-sm">
        <a-select default-value="lucy" style="width: 120px">
            <a-select-option value="jack">
                启动
            </a-select-option>
            <a-select-option value="lucy">
                停止
            </a-select-option>
        </a-select>
      </div>
    <a-table :scroll="setScroll" :columns="columns" :dataSource="dataSource">
    <div slot="action" slot-scope="text,record">
        <span v-if="record.status===0" style="color:red">停止</span>
        <span v-else style="color:#409EFD;">启动</span>
    </div>
  </a-table>
  </div>
</template>

<script>
const columns = [
  { title: '时间', dataIndex: 'time', key: 'time' },
  { title: '启动/停止', dataIndex: 'ting', key: 'address',scopedSlots:{customRender:'action'} },
];
const dataSource = [
  {
    key: 1,
    name: 'John',
    age: 32,
    time: 'New',
    status:1,
    description: 'My name is John',
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    time: 'London',
    status:0,
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
    }
},
computed:{
    setScroll(){
        if(this.columns.length>1){
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