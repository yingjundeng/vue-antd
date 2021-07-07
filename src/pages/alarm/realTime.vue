<template>
  <div class="bg-color page-padding-md mg-top-xs">
    <div class="rel-top-view">
       <div id="piechart" style="width:600px;height:200px;"></div>
       <com-echart  
       divId="onChart" 
       width="100%" 
       height="230px" 
       text="报警数分布" 
       :xAxis="xAxis"
       :legend="[]" :series="seriesData"/>
    </div>
    <a-card class="mg-top-xs">
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null: 'fold'">
          <a-row >
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="模式名称"
              :labelCol="{span: 5}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-input-number style="width: 100%" placeholder="请输入模式名称" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="模式类型"
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
      :pagination="ipagination"
      @clear="onClear"
      @change="handleTableChange"
      @selectedRowChange="onSelectChange">
      <div slot="action" slot-scope="{text, record}">
          <a-button type="link" @click="seeOrEdit(record)">查看/编辑</a-button>
        </div>
    </standard-table>
    </a-card>
    <realTime-modal ref="realTimeModal"/>
    
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import realTimeModal from './realTimeModal'
import comEchart from './components/comEchart'
import {getAutomaticList} from '@/api/admin/home'
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
    dataIndex: 'createBy',
    scopedSlots: { customRender: 'createBy' }
  },
  {
    title: '模式描述',
    dataIndex: 'updatedAt',
    
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

const defColumns = [
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
    dataIndex: 'createBy',
    scopedSlots: { customRender: 'createBy' }
  },
  {
    title: '模式描述',
    dataIndex: 'updatedAt',
    
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
]
export default {
  name:'realTime',
  components:{StandardTable,realTimeModal,comEchart},
  data(){
      return{
        advanced:false,
        seriesData:[],
        selectedRows:[],
        /* 请求参数 */
        query:{
            name:'',
            type:'',
            pageNo:1,
            pageSize:10,
        },
        /* 分页参数 */
        ipagination: {
            current: 1,
            pageSize: 10,
            pageSizeOptions: ['10', '20', '30'],
            showTotal: (total, range) => {
            return range[0] + '-' + range[1] + ' 共' + total + '条'
            },
            showQuickJumper: true,
            showSizeChanger: true,
            total: 0
        },
        columns:columns,
        defColumns:defColumns,
        dataSource:[],
        xAxis:[]
      }
  },
  created(){
    
    this.initData()
    this.getondayList()
  },
  mounted(){
    this.initChart()
    
  },
  methods:{
      //00-23一天时间
      getondayList(){
        for(let i=0;i<=23;i++){
          if(i<10){
           this.xAxis.push('0'+i)
          }else{
           this.xAxis.push(`${i}`)   
          }
        }
      },
      initChart(){
        this.seriesData=[
            {
            name: '报警数',
            type: 'bar',
            color:'#7585A2',
            data: [15, 20, 36, 10, 18, 20,15, 20, 36, 10, 18, 20,15, 20, 36, 10, 18, 20,15, 20, 36, 10, 18, 20]
            }
        ]
        let myChart = this.$echarts.init(document.getElementById('piechart'));
        let option = {
          title: {
              text: '报警概况',
              subtext: '',
              left: 'left'
          },
          tooltip: {
              trigger: 'item'
          },
          legend: {
              bottom:'3%',
              left: 'center',
          },
          series: [
              {
                  name: '数据',
                  type: 'pie',
                  radius: '50%',
                  data: [
                      {value: 345, name: '紧急报警'},
                      {value: 325, name: '重要报警'},
                      {value: 235, name: '普通报警'},
                  ],
                  color:['#F14500', '#FAAE14', '#1890FF'],
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              },
          ]
      };
       option && myChart.setOption(option);
      },
      onSelectChange(){

      },
      handleChange(){},
      toggleAdvanced () {
      this.advanced = !this.advanced
      },
      onClear(){},
      handleTableChange(pagination, filters, sorter) {
      // 分页、排序、筛选变化时触发
      // TODO 筛选
      if (Object.keys(sorter).length > 0) {
        this.isorter.column = sorter.field
        this.isorter.order = sorter.order == 'ascend' ? 'asc' : 'desc'
      }
      //筛选 多选
      Object.keys(filters).map((key) => {
        let k = key
        let data = []
        filters[k].forEach((item, index) => {
            data.push(item)
          })
          //表头筛选表头带的value值是字典的value，接口筛选的时候需要的是字典的key 这边把表头携带的_deicText  默认去掉
      })
      this.ipagination = pagination;
      this.query.pageNo = pagination.current;
      this.query.pageSize = pagination.pageSize;
      this.initData();
    },
      seeOrEdit(record){
        this.$refs.automaticModal.showModal(record)
      },
      initData(){
          getAutomaticList(this.query).then(res=>{
            if(res.code ===0){
               this.dataSource = res.data.records || []
               this.ipagination.total = res.data.total
            }else{
               this.$message.error(res.msg)
            }
          })
      },
      
  }   
}
</script>

<style lang="less" scoped>
.rel-top-view{
  display: flex;
  .onChart{
    
  }  
}
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