<template>
  <div>
    <a-radio-group :value="size" size="small" @change="handleSizeChange">
      <a-radio-button value="month">
        月
      </a-radio-button>
      <a-radio-button value="week">
        周
      </a-radio-button>
      <a-radio-button value="dateDay">
        日
      </a-radio-button>
    </a-radio-group>
  </div>
</template>

<script>
export default {
 data(){
     return{
         size:"month"
     }
 },
 methods:{
     handleSizeChange(val){
        this.size = val.target.value
        this.$emit("handleOk",val.target.value)
     }
 }
}
</script>

<style>

</style>