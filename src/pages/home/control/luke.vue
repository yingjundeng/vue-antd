<template>
  <div class="luke">
      <div class="luke-left">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div class="luke-right">
          <div>0°C</div>
          <div>10°C</div>
          <div>20°C</div>
          <div>30°C</div>
          <div>40°C</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.luke{
    width: 60px;
    padding: 5px 20px 1px 5px;
    background:rgba(24, 30, 49, 0.7);
    color: #fff;
    border-radius: 5px;
    display: flex;
    .luke-left{
      >div{
          width: 5px;
          height: 35px; 
       }
      :nth-child(1){
          background-color: royalblue;
        }
        :nth-child(2){
          background-color: greenyellow;
        }
        :nth-child(3){
          background-color: yellow;
        }
        :nth-child(4){
          background-color: red;
        }
      
    }
    .luke-right{
        flex: 2;
     >div{
          width: 30px;
          height: 30px; 
       }
    }
}
</style>