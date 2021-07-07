<template>
  <div>
      <a-drawer
      :title="title"
      placement="right"
      :closable="false"
      width="600"
      :visible="visible"
      @close="visible=false"
    > 
      <div class="min-title">基本信息</div>
      <a-descriptions title="">
        <a-descriptions-item label="设备名称">
          温控器0111
        </a-descriptions-item>
        <a-descriptions-item label="设备类型">
          温控器
        </a-descriptions-item>
        <a-descriptions-item label="所在位置">
          一层北区
        </a-descriptions-item>
      </a-descriptions>

      <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="实时工作信息">
        <JTabsPane1/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="告警信息" force-render>
        <JTabsPane2/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="启停记录">
        <JTabsPane3/>
      </a-tab-pane>
      <a-tab-pane key="4" tab="视频录像">
        <JTabsPane4/>
      </a-tab-pane>
    </a-tabs>
    </a-drawer>
  </div>
</template>

<script>
import JTabsPane1 from './JTabsPane1'
import JTabsPane2 from './JTabsPane2'
import JTabsPane3 from './JTabsPane3'
import JTabsPane4 from './JTabsPane4'
export default {
  components:{JTabsPane1,JTabsPane2,JTabsPane3,JTabsPane4},
  data(){
    return{
      title:'温控器001',
      visible:false
    }
  },
  methods:{
    open(){
       this.visible = true
    },
  }
}
</script>

<style lang="less" scoped>

</style>