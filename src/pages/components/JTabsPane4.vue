<template>
  <div>
    <div class="min-title">实时视频</div>
    <div class="video-content">

    </div>
    <div class="min-title">历史录像</div>
    <div>
        <a-row class="mg-bom-sm">
            <a-col>
                <a-select default-value="lucy" style="width: 160px">
                    <a-select-option value="jack">
                        录像开始时间
                    </a-select-option>
                    <a-select-option value="lucy">
                        录像结束时间
                    </a-select-option>
                </a-select>
            </a-col>
        </a-row>
        <a-row :span="24" class="mg-bom-sm">
            <a-col :span="12">
                <a-range-picker />
            </a-col>
            <a-col :span="8">
                <a-button type="primary" class="mg-left-sm mg-right-sm">查询</a-button>
                <a-button>重置</a-button>
            </a-col>
        </a-row>
    </div>
    <a-table :scroll="setSolScroll" :columns="columns" :dataSource="dataSource">
      <a slot="action" slot-scope="text" href="javascript:;">回放</a>
    </a-table>

    <div class="min-title">历史告警记录</div>
    <div>
        <a-row class="mg-bom-sm">
            <a-col>
                画面截取时间:
            </a-col>
        </a-row>
        <a-row :span="24" class="mg-bom-sm">
            <a-col :span="12">
                <a-range-picker />
            </a-col>
            <a-col :span="8">
                <a-button type="primary" class="mg-left-sm mg-right-sm">查询</a-button>
                <a-button>重置</a-button>
            </a-col>
        </a-row>
    </div>
    <a-table
    :scroll="setSolScroll" 
    :columns="solColumns" 
    :dataSource="dataSource">
      <a slot="action" slot-scope="text" href="javascript:;">查看</a>
    </a-table>
  </div>
</template>

<script>
const columns = [
  { title: '录像开始时间', dataIndex: 'name', key: 'name' },
  { title: '录像结束时间', dataIndex: 'age', key: 'age' },
  { title: '操作', dataIndex: 'time', key: 'address', scopedSlots:{customRender:'action'}},
];
const solColumns = [
  { title: '画面抓取时间', dataIndex: 'name', key: 'name' },
  { title: '操作', dataIndex: 'time', key: 'address', scopedSlots:{customRender:'action'}},
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
        if(this.solColumns.length>0){
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
.video-content{
   width: 100%;
   height: 260px;
   background: steelblue;
   margin: 5px 10px;
}
</style>