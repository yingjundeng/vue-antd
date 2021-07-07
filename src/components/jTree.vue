<template>
  <div class="j-tree">
       <a-input-search style="margin-bottom: 8px" size="small" placeholder="按区域名称查询" @change="onChange" />
        <a-tree
            :expanded-keys="expandedKeys"
            :autoExpandParent="autoExpandParent"
            :defaultExpandAll="true"
            :showLine="iShowLine"
            :tree-data="gData"
            @expand="onExpand"
        >
            <template slot="custom" slot-scope="item">
            <span>{{ item.title }}</span>
            <span class="color-nim">0</span>
            </template>
        </a-tree>
  </div>
</template>

<script>
const gData=[
            {
              title: '翠宫饭店',
              key: '0',
              children: [
                {
                  title: '二层',
                  key: '1',
                  scopedSlots: { title: 'custom' },
                  children:[
                      {title: '东区',key: '1-1',scopedSlots: { title: 'custom' },},
                      {title: '南区',key: '1-2'},
                      {title: '西区',key: '1-3'},
                      {title: '北区',key: '1-4'},
                  ]
                },
                {
                  title: '三层',
                  key: '2',
                },
                {
                  title: '四层',
                  key: '3',
                },
                {
                  title: '五层',
                  key: '4',
                },
                {
                  title: '六层',
                  key: '5',
                },
                {
                  title: '七层',
                  key: '6',
                },
                {
                  title: '八层',
                  key: '7',
                },
                {
                  title: '九层',
                  key: '8',
                },
                {
                  title: '十层',
                  key: '9',
                },
                {
                  title: '十一层',
                  key: '10',
                },
                {
                  title: '十二层',
                  key: '11',
                },
                {
                  title: '十三层',
                  key: '12',
                },
                {
                  title: '十四层',
                  key: '13',
                },
                {
                  title: '十五层',
                  key: '14',
                },
              ],
            },
          ]
export default {
name:'jTree',
data(){
    return{
          expandedKeys: ['0','1'],
          searchValue: '',
          autoExpandParent: true,
          gData:gData,
    }
},
props:{
    // gData:{
    //     type:Array,
    //     default:()=>[]
    // },
    iShowLine:{
        type:Boolean,
        default:false
    },
},
methods:{
    onExpand(expandedKeys) {
          this.expandedKeys = expandedKeys;
          this.autoExpandParent = false;
        },
        onChange(){},
}
}
</script>

<style lang="less" scoped>
.color-nim{
    margin-left:8px;
    padding:0 6px;
    border-radius: 2px;
    background-color:#FBAD12;
    color: #C1C1C1;
}
</style>
<style lang="less">
.j-tree{
.ant-tree{
   >li{
    overflow-y: scroll;
    // overflow-y:hidden;
    height: 69vh;
    color: #F7F7F8;
    span{
        color: #F7F7F8;
    }
    .ant-tree-node-content-wrapper.ant-tree-node-selected{
        background-color:#409EFD;
        
    }
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


</style>