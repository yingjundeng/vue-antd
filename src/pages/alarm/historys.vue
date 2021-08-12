<template>
  <div class="bg-color page-padding-md mg-top-xs">
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null: 'fold'">
          <a-row >
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="报警级别"
              :labelCol="{span: 5}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-input-number style="width: 100%" placeholder="请输入模式名称" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="报警类型"
              :labelCol="{span: 5}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-select default-value="全部事件" style="width: 120px">
                <a-select-option value="jack">
                    Jack
                </a-select-option>
               </a-select>
               
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" >
            <a-form-item
              label=""
              :labelCol="{span: 5}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-select default-value="启用" style="width: 120px">
                <a-select-option value="jack">
                    Jack
                </a-select-option>
               </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        </div>
        <span style="float: right; margin-top: 3px;">
          <a-button type="primary">查询</a-button>
          <a-button style="margin-left: 8px">重置</a-button>
          <a @click="toggleAdvanced" style="margin-left: 8px">
            {{advanced ? '收起' : '展开'}}
            <a-icon :type="advanced ? 'up' : 'down'" />
          </a>
        </span>
      </a-form>
    </div>
    <standard-table 
      :columns="columns"
      :defColumns="defColumns"
      :dataSource="dataSource"
      :selectedRows.sync="selectedRows"
      @clear="onClear"
      @change="onChange"
      @selectedRowChange="onSelectChange">
      <div slot="action" slot-scope="{text, record}">
        <a-icon type="video-camera" />
        <a-divider type="vertical" />
        <a-icon type="environment" />
        <a-divider type="vertical" />
        <a-button type="link" @click="seeOrEdit(record)">详情</a-button>
      </div>
    </standard-table>

    <realTime-modal ref="historysModal"/>

  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import realTimeModal from './realTimeModal'
const columns = [
  {
    title: '序号',
    dataIndex: 'no'
  },
  {
    title: '报警时间',
    dataIndex: 'alarmTime'
  },
  {
    title: '报警级别',
    dataIndex: 'title'
  },
  {
    title: '报警名称',
    dataIndex: 'name'
  },
  {
    title: '报警类型',
    dataIndex: 'createBy',
    scopedSlots: { customRender: 'createBy' }
  },
  {
    title: '子系统',
    dataIndex: 'ds',
    
  },
  {
    title: '设备名称',
    dataIndex: 'we',
    
  },
  {
    title: '设备类型',
    dataIndex: 'rr',
    
  },
  {
    title: '位置',
    dataIndex: 'updatedAt',
    
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '处理人',
    dataIndex: 'chuseareon',
  },
  {
    title: '操作',
    width:180,
    scopedSlots: { customRender: 'action' }
  },
]

const defColumns = [
  {
    title: '序号',
    dataIndex: 'no'
  },
  {
    title: '报警时间',
    dataIndex: 'alarmTime'
  },
  {
    title: '报警级别',
    dataIndex: 'title'
  },
  {
    title: '报警名称',
    dataIndex: 'name'
  },
  {
    title: '报警类型',
    dataIndex: 'createBy',
    scopedSlots: { customRender: 'createBy' }
  },
 {
    title: '子系统',
    dataIndex: 'ds',
    
  },
  {
    title: '设备名称',
    dataIndex: 'we',
    
  },
  {
    title: '设备类型',
    dataIndex: 'rr',
    
  },
  {
    title: '位置',
    dataIndex: 'updatedAt',
  },
  {
    title: '处理人',
    dataIndex: 'chuseareon',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '操作',
    width:180,
    scopedSlots: { customRender: 'action' }
  },
]
export default {
  name:'historysAlarms',
  components:{StandardTable,realTimeModal},
  data(){
      return{
        advanced:false,
        selectedRows:[],
        columns:columns,
        defColumns:defColumns,
        dataSource:[
          {
            key: '3',
            description: 'Joe Black',
            name:'123',
            age: 32,
            status: '1',
          },
        ],
      }
  },
  methods:{
      onSelectChange(){

      },
      onClear(){},
      onChange(){},
      toggleAdvanced () {
      this.advanced = !this.advanced
      },
      seeOrEdit(record){
        this.$refs.historysModal.showModal(record,true)
      }
  }   
}
</script>

<style lang="less" scoped>
  .search{
    margin-bottom: 54px;
  }
  .fold{
    width: calc(100% - 216px);
    display: inline-block
  }
  .operator{
    margin-bottom: 18px;
  }
  .tabs-uhn{
    width: 70%;
    text-align: center;
    padding:12px 0px;
    box-shadow: 3px 3px 3px#E7EAED;
    border-radius: 9px;
    background-color: #F2F2F2;
  }
  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>