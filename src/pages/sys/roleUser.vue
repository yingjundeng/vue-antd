<template>
  <div class="bg-color ature-page page-padding-md">
     <div class="ature-left" :style="{width:`${atureLeftWidth}px`}">
         <a-card style="height:90vh;" v-if="isCaret">
            <div class="ja-tree"> 
                <a-input-search style="margin-bottom: 8px" size="small" placeholder="按角色查询" @change="onChange" />
                 <a-tree
                      :expanded-keys="expandedKeys"
                      :autoExpandParent="autoExpandParent"
                      :defaultExpandAll="true"
                      :tree-data="gData"
                      @expand="onExpand"
                  >
                       <template slot="custom" slot-scope="item">
                      <span>{{ item.title }}</span>
                      <span class="color-nim">0</span>
                      </template>
                  </a-tree> 
            </div>
          </a-card>
          <div class="ature-caret" @click="changeIsCaret">
            <a-icon v-if="isCaret" type="caret-left" />
            <a-icon v-else type="caret-right" />
          </div>
     </div>
     <div class="ature-right">

       <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null: 'fold'">
          <a-row >
          <a-col :md="8" :sm="24" >
            <a-form-item
              label="用户名"
              :labelCol="{span: 5}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-input-search style="width: 100%" placeholder="请输入用户名" />
            </a-form-item>
          </a-col>
        </a-row>
        </div>
        <!-- <span style="float: right; margin-top: 3px;">
          <a-button type="primary">查询</a-button>
          <a-button style="margin-left: 8px">重置</a-button>
          <a @click="toggleAdvanced" style="margin-left: 8px">
            {{advanced ? '收起' : '展开'}}
            <a-icon :type="advanced ? 'up' : 'down'" />
          </a>
        </span> -->
      </a-form>
    </div>
    <standard-table 
      :columns="columns"
      :dataSource="dataSource"
      :selectedRows.sync="selectedRows"
      @clear="onClear"
      @change="onChange"
      @selectedRowChange="onSelectChange">
       <div slot="status" slot-scope="{text, record}">
        <a-tag v-if="record.status==1" color="green">正常</a-tag>
        <a-tag v-else color="red">停用</a-tag>
        </div>
       <div slot="action" slot-scope="{text, record}">
          <span style="color:#409EFD;" @click="seeOrEdit(record)">查看</span>
          <a-divider type="vertical" />
          <span style="color:#409EFD;" @click="seeOrEdit(record)">停用/启用</span>
          <a-divider type="vertical" />
          <span style="color:red;" @click="seeOrEdit(record)">删除</span>
        </div>
    </standard-table>
         
     </div>

  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
const gData=[
            {
              title: '所有角色',
              key: '0',
              children: [
                {
                  title: '控制台访问',
                  key: '1',
                  children:[
                      {title: '超级管理员',key: '1-1',scopedSlots: { title: 'custom' },},
                      {title: '业务管理员',key: '1-2'},
                      {title: '设备管理员',key: '1-3'},
                      {title: '数据分析',key: '1-4'},
                  ]
                },
                {
                  title: 'API访问',
                  key: '2',
                  children:[
                      {title: 'ERP主系统',key: '1-1',scopedSlots: { title: 'custom' },},
                      {title: '其他业务系统',key: '1-1',scopedSlots: { title: 'custom' },},
                  ]
                }
              ],
            },
          ]

  const dataSource =[
    {
    key: '3',
    description: 'Joe Black',
    name:'123',
    age: 32,
    status: '1',
  },
  ]
  const columns = [
  {
    title: '序号',
    dataIndex: 'no'
  },
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '类型',
    dataIndex: 'description',
    
  },
  {
    title: '备注',
    dataIndex: 'updatedAt',
  },
  {
    title: '状态',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    sorter: true
  },
  {
    title: '操作',
    width:300,
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  name:'temperature',
  components:{StandardTable},
  data(){
      return{
          isCaret:true,
          advanced:false,
          atureLeftWidth:300,
          minHeight: window.innerHeight - 64 - 122,
          expandedKeys: ['0','1'],
          searchValue: '',
          autoExpandParent: true,
          gData:gData,
          selectedRows:[],
          dataSource,
          columns,
      }
  },
  methods:{
      //收缩side-left
     changeIsCaret(){
         this.isCaret = !this.isCaret
         if(this.isCaret){
             return this.atureLeftWidth = 240
         }
         this.atureLeftWidth = 0
     },
     onExpand(expandedKeys) {
          this.expandedKeys = expandedKeys;
          this.autoExpandParent = false;
        },
      onChange(){}, 
      onClear(){},
      onSelectChange(){},
  }
}
</script>

<style lang="less" scoped>

.ature-page{
    display: flex;
    margin-top:5px;
    .ature-left{
        min-height: 90vh;
        position: relative;
        .ature-caret{
          position: absolute;
          top: 260px;
          right: 0;
          cursor: pointer;
          color: #409EFD;
          line-height: 45px;
          border:1px solid #EEEEEE;
        }
      .ja-tree{
        height: 69vh;
        .ant-tree{
          >li{
            overflow-y: scroll;
            height: 69vh;
          } 
          /**滚动条样式 */
            li::-webkit-scrollbar {
            width: 4px;
            }
            li::-webkit-scrollbar-thumb{
            border-radius: 10px;
            --webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
            }
            li::-webkit-scrollbar-track {
            --webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);
            }
        }
        }  
    }
    .ature-right{
        flex: 1;
        min-height: 90vh;
        padding: 20px;
    }
}

</style>