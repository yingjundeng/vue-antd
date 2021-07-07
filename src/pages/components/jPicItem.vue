<template>
  <div class="j-picItem font-size-xs">
    <div style="border-bottom:1px solid #13151E;color:#5B606D;" class="pdg-bom-xs">图例</div>
    <div class="figure-down">
        <div style="text-align:left;">
            <div>
                <a-badge status="success" />正常运行
            </div>
            <div>
                <a-badge status="default" />关闭
            </div>
            <div>
                <a-badge status="error" />故障报警
            </div>
        </div>
        
        <div>
            <div><a-icon type="control" /></div>
            <div>温控器</div> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
       stateList:[
           {type:'primary',text:'正常',icon:''},
           {type:'info',text:'故障',icon:''},
           {type:'error',text:'警报',icon:''},
           {type:'close',text:'关闭',icon:''},
       ],
       jeptList:[
           {text:'温控器',icon:''},
       ], 
    }
},
props:{
   stateList:{
       type:Array,
       default:()=>[]
   },
   jeptList:{
       type:Array,
       default:()=>[]
   },
},
watch:{

},
methods:{

}
}
</script>

<style lang="less" scoped>
.j-picItem{
  color: #8E929B;
  font-size: 12px;
}
</style>