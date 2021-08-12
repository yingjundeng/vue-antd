<template>
  <div class="standard-table">
    <div class="alert">
      <a-alert type="info" :show-icon="true" v-if="selectedRows">
        <div class="message" slot="message">
          已选择&nbsp;<a>{{selectedRows.length}}</a>&nbsp;项 <a @click="onClear">清空</a>
          <!-- <a class="clear" @mousemove="setClomun"><a-icon type="setting" />自定义列</a> -->
          <rankColumn :defColumns="defColumns" class="clear" @rankCols="rankCols"/>
          <template  v-for="(item, index) in needTotalList" >
            <div v-if="item.needTotal" :key="index">
              {{item.title}}总计&nbsp;
              <a>{{item.customRender ? item.customRender(item.total) : item.total}}</a>
            </div>
          </template>
        </div>
      </a-alert>
    </div>
    <a-table
      :bordered="bordered"
      size="middle"
      :loading="loading"
      :columns="columns"
      :dataSource="dataSource"
      :rowKey="rowKey"
      :pagination="pagination"
      :expandedRowKeys="expandedRowKeys"
      :expandedRowRender="expandedRowRender"
      @change="onChange"
      :rowSelection="selectedRows ? {selectedRowKeys: selectedRowKeys, onChange: updateSelect} : undefined"
    >
      <template slot-scope="text, record, index" :slot="slot" v-for="slot in Object.keys($scopedSlots).filter(key => key !== 'expandedRowRender') ">
        <slot :name="slot" v-bind="{text, record, index}"></slot>
      </template>
      <template :slot="slot" v-for="slot in Object.keys($slots)">
        <slot :name="slot"></slot>
      </template>
      <template slot-scope="record, index, indent, expanded" :slot="$scopedSlots.expandedRowRender ? 'expandedRowRender' : ''">
        <slot v-bind="{record, index, indent, expanded}" :name="$scopedSlots.expandedRowRender ? 'expandedRowRender' : ''"></slot>
      </template>
    </a-table>
  </div>
</template>

<script>
import rankColumn from '../rankColumn/index.vue'
import shareUtils from "@/mixins/utils";
export default {
  name: 'StandardTable',
  components:{rankColumn},
  mixins:[shareUtils],
  props: {
    bordered: Boolean,
    loading: [Boolean, Object],
    columns: Array,
    defColumns: Array,
    dataSource: Array,
    rowKey: {
      type: [String, Function],
      default: 'key'
    },
    pagination: {
      type: [Object, Boolean],
      default: true
    },
    selectedRows: Array,
    expandedRowKeys: Array,
    expandedRowRender: Function
  },
  
  data () {
    return {
      needTotalList: []
    }
  },
  methods: {
    updateSelect (selectedRowKeys, selectedRows) {
      this.$emit('update:selectedRows', selectedRows)
      this.$emit('selectedRowChange', selectedRowKeys, selectedRows)
    },
    initTotalList (columns) {
      const totalList = columns.filter(item => item.needTotal)
        .map(item => {
          return {
            ...item,
            total: 0
          }
        })
      return totalList
    },
    rankCols(row){
      let rowArr = []
      row.forEach((item,index)=>{
        if(item.fixed){
          item.fixed = ''
        }
        rowArr.push(item)
      })
      this.columns = rowArr
      console.log(this.columns)
    },
    onClear() {
      this.updateSelect([], [])
      this.$emit('clear')
    },
    setClomun(){
      console.log('df')
    },
    onChange(pagination, filters, sorter, {currentDataSource}) {
      this.$emit('change', pagination, filters, sorter, {currentDataSource})
    }
  },
  created () {
    this.needTotalList = this.initTotalList(this.columns)
  },
  watch: {
    selectedRows (selectedRows) {
      this.needTotalList = this.needTotalList.map(item => {
        return {
          ...item,
          total: selectedRows.reduce((sum, val) => {
            let v
            try{
              v = val[item.dataIndex] ? val[item.dataIndex] : eval(`val.${item.dataIndex}`);
            }catch(_){
              v = val[item.dataIndex];
            }
            v = !isNaN(parseFloat(v)) ? parseFloat(v) : 0;
            return sum + v
          }, 0)
        }
      })
    }
  },
  computed: {
    selectedRowKeys() {
      return this.selectedRows.map(record => {
        return (typeof this.rowKey === 'function') ? this.rowKey(record) : record[this.rowKey]
      })
    }
  }
}
</script>

<style scoped lang="less">
.standard-table{
  .alert{
    margin-bottom: 16px;
    .message{
      a{
        font-weight: 600;
      }
    }
    .clear{
      float: right;
    }
  }
}
</style>
