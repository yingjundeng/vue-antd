<template>
  <div class="bg-color page-padding-md mg-top-xs">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="历史录像">
         <historicalVideoTab/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="历史画面" force-render>
         <historicalImgTab/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import historicalImgTab from './historicalImgTab'
import historicalVideoTab from './historicalVideoTab'
export default {
    components:{historicalImgTab,historicalVideoTab},
  data(){
      return{

      }
  },
  mounted:{
      callback(){

      }
  }
}
</script>

<style>

</style>