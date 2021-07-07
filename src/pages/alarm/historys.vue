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
              <a-select default-value="全部事件" style="width: 120px" @change="handleChange">
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
              <a-select default-value="启用" style="width: 120px" @change="handleChange">
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
      :dataSource="dataSource"
      :selectedRows.sync="selectedRows"
      @clear="onClear"
      @change="onChange"
      @selectedRowChange="onSelectChange">
      <div slot="action" slot-scope="{text, record}">
          <a-button type="link" @click="seeOrEdit(record)">处理详情</a-button>
        </div>
    </standard-table>

    <realTime-modal ref="realTimeModal"/>
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
    title: '模式名称',
    dataIndex: 'name'
  },
  {
    title: '模式类型',
    dataIndex: 'description',
    scopedSlots: { customRender: 'description' }
  },
  {
    title: '模式描述',
    dataIndex: 'updatedAt',
    sorter: true
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '操作',
    width:180,
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  name:'historysAlarm',
  components:{StandardTable,realTimeModal},
  data(){
      return{
        selectedRows:[],
        columns:columns,
dataSource:[
  {
    key: '3',
    description: 'Joe Black',
    name:'123',
    age: 32,
    status: '1',
  },
]
      }
  },
  methods:{
      onSelectChange(){

      },
      onClear(){},
      onChange(){},
      seeOrEdit(record){
        this.$refs.realTimeModal.showModal(record)
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