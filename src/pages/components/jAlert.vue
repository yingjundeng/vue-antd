<template>
  <div class="j-alert">
      <div v-for="item in 18">
          <a-row :gutter="24" class="alert-row mg-bom-xs padding-xs">
              <a-col :span="1"><a-badge status="error" /></a-col>
              <a-col :span="19">一层东区-【温控器001】：电压过低！</a-col>
              <a-col :span="2"><a-icon type="arrow-right" /></a-col>
          </a-row>
      </div>
  </div>
</template>

<script>
export default {
name:'jAlert',
data(){
    return{

    }
},
methods:{

}
}
</script>

<style lang="less" scoped>
.j-alert{
  color: #F7F7F8;
  font-size: 12px;
  height: 200px;
  width: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  .alert-row{
    background: #222A3E;
    border-radius: 4px;
  }
  
}
/**滚动条样式 */
.j-alert::-webkit-scrollbar {
    width: 4px;
}
.j-alert::-webkit-scrollbar-thumb{
border-radius: 10px;
--webkit-box-shadow: inset 0 0 5px rgba(165,168,177,0.2);
background: rgba(165,168,177,0.2);
}
.j-alert::-webkit-scrollbar-track {
--webkit-box-shadow: inset 0 0 5px rgba(165,168,177,0.2);
border-radius: 0;
background: rgba(165,168,177,0.2);
}
</style>