<style scoped>
  .ht-view {
    position: relative;
    width: 100%;
    height: 1080px;
  }
</style>
<template>
  <div id="topo" class="ht-view"></div>
</template>

<script>
import fjson from './3d.json'
  export default {
    data () {
      return {
        fjson,
      }
    },
    methods: {
      init () {
        let data = new ht.DataModel();
        let graphView = new ht.graph3d.Graph3dView(data);
        // demo.json是将页面通过编辑器序列化后的文件。
        // 页面序列化后可存储到数据库，可通过api获取，也可存储在本地。
        // ht.Default.xhrLoad('/ht-enjoy/json/demo.json', function(text) {
        //   console.log('23432',text)
        //   let json = ht.Default.parse(this.fjson);
        //   data.deserialize(json);
        //   // // 平移展示所有图元
        //   graphView.fitContent(true, 10, true);
        // });
        console.log('23432',graphView)
          let json = ht.Default.parse(this.fjson);
          data.deserialize(json);
          // // 平移展示所有图元
          graphView.fitContent(true, 10, true);
        // 绑定到div上。此处为什么这样写呢。因为我在做的过程中发现，加载完成后它的图层会在最上层。
        // 可能会覆盖你的页面。我调了好久也没找到好的办法，最后就把它绑定到一个可控的div上。
        // 这样就比较灵活了。操作起来也很方便...如果你有更好的方法，请一定留言告诉我。
      }
    },
    mounted () {
      // 初始化页面
      // this.init();
    }
  }
</script>
