<!--
 * @Author: your name zzw
 * @Date: 2020-09-24 10:11:28
 * @LastEditTime: 2020-10-12 16:50:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \poros-cli-ond:\zzw\new-hx-cli\new-basic-web\src\components\rankColumn\index.vue
-->
<template>
  <a-popover trigger="click" placement="leftBottom" :overlay-style="getWidth">
    <template slot="title">
      <a-row class="f-modal-title-rank" type="flex">
        <a-col class="left">
          <slot name="title">自定义列</slot>
        </a-col>
        <a-col class="right" @click="toggleFullscreen(innerFullscreen)">
          <a-dropdown>
            <p class="poros-dropdown-link">
              <a-icon type="unordered-list" />
            </p>
            <a-menu slot="overlay">
              <a-menu-item>
                <div @click="rankBtn">{{titleRank}}</div>
              </a-menu-item>
              <a-menu-item>
                <div @click="checkAll">全选</div>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-col>
      </a-row>
    </template>
    <template slot="content">
      <a-checkbox-group
        @change="onColSettingsChange"
        v-model="settingColumns"
        :defaultValue="settingColumns"
      >
        <a-row>
          <draggable v-model="dataColumns" @end="allowDragg" :options="optionsDaggable">
            <a-col
              :span="spanWidth"
              v-for="(item,index) in dataColumns"
              :key="item.title"
              v-if="item.key!='rowIndex'&& item.dataIndex!='action'"
            >
              <a-checkbox :value="item.dataIndex">
                <span class="color_c">{{index}}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;{{ item.title }}
              </a-checkbox>
            </a-col>
          </draggable>
        </a-row>
      </a-checkbox-group>
    </template>
    <a>
      <a-icon type="setting" />自定义列
    </a>
  </a-popover>
</template>

<script>
import Vue from "vue";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  props: {
    defColumns: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      //列设置
      settingColumns: [],
      optionsDaggable: {
        ghostClass: "boxShadow",
        sort:true
      },
      dataColumns: [],
      spanWidth: 12,
      titleRank: "一列",
    };
  },
  watch: {
    defColumns: {
      handler(news) {
        if (news) {
          this.dataColumns = news;
        }
      },
    },
  },
  computed: {
    getWidth: function () {
      if (this.defColumns.length > 14) {
        return { width: "500px" };
      }
    },
  },
  methods: {
    rankBtn() {
      if (this.spanWidth === 12) {
        this.spanWidth = 24;
        this.titleRank = "两列";
      } else {
        this.spanWidth = 12;
        this.titleRank = "一列";
      }
    },
    checkAll(){
        let arr = [];
        this.defColumns.forEach((item,index)=>{
            if(item.key !== "rowIndex" || item.dataIndex !== "action"){
               arr.push(item.dataIndex) 
            }
        });
        var key = this.$route.name + ":colsettings";
        Vue.ls.set(key, arr, 7 * 24 * 60 * 60 * 1000);
        this.settingColumns = arr;
        const cols = this.defColumns.filter((item) => {
            if (item.key == "rowIndex" || item.dataIndex == "action") {
            return true;
            }
            if (this.settingColumns.includes(item.dataIndex)) {
            return true;
            }
            return false;
        });
        this.columns = cols;
      this.$emit("rankCols", cols);
    },
    allowDragg(e) {
      var key = this.$route.name + ":colsettings";
      let colSettings = Vue.ls.get(key);
      const cols = this.dataColumns.filter((item) => {
        if (item.key == "rowIndex" || item.dataIndex == "action") {
          return true;
        }
        if (colSettings.includes(item.dataIndex)) {
          return true;
        }
        return false;
      });
      cols.forEach((item, index) => {
        if (item.key == "rowIndex") {
          cols.splice(index, 1);
          cols.unshift(item);
        } else if (item.dataIndex == "action") {
          cols.splice(index, 1);
          cols.push(item);
        }
      });
      this.loadStorage(cols, colSettings);
      this.columns = cols;
      this.$emit("rankCols", cols);
    },
    //缓存数据
    loadStorage(data, dataSetting) {
      let newOrder = [];
      data.forEach((item, index) => {
        newOrder.push(item.dataIndex);
      });
      var key = this.$route.name + ":colsettings";
      Vue.ls.set(key, newOrder, 7 * 24 * 60 * 60 * 1000);
    },

    initColumns() {
      //权限过滤（列权限控制时打开，修改第二个参数为授权码前缀）
      //this.defColumns = colAuthFilter(this.defColumns,'testdemo:');
      // Vue.ls.clear()
      var key = this.$route.name + ":colsettings";
      let colSettings = Vue.ls.get(key);
      if (colSettings == null || colSettings == undefined) {
        let allSettingColumns = [];
        this.defColumns.forEach(function (item, i, array) {
          allSettingColumns.push(item.dataIndex);
        });
        this.dataColumns =  this.defColumns
        this.settingColumns = allSettingColumns;
        this.columns = this.defColumns;
        this.loadStorage(this.defColumns);
        this.$emit("rankCols", this.defColumns);
      } else {
        this.settingColumns = colSettings;
        let header = this.defColumns;
        colSettings.forEach((item, index) => {
          this.defColumns.forEach((items, indexs) => {
            if (item == items.dataIndex) {
              this.swapArr(header, index, indexs);
            }
          });
        });
        this.defColumns.map((item,index)=>{
          
          item === undefined ? this.defColumns.splice(index,0) :''
        })
        const cols = this.defColumns.filter((item,index) => {
          if(item === undefined){
             return false;
          }
          if (item.key == "rowIndex" || item.dataIndex == "action" ) {
            return true;
          }
          if (colSettings.includes(item.dataIndex)) {
            return true;
          }
          return false;
        });
        cols.forEach((item, index) => {
          if (item.key == "rowIndex") {
            cols.splice(index, 1);
            cols.unshift(item);
          } else if (item.dataIndex == "action") {
            cols.splice(index, 1);
            cols.push(item);
          }
        });
        this.defColumns = header;
        this.columns = cols;
        this.loadStorage(cols);
        this.$emit("rankCols", cols);
      }
    },
    swapArr(arr, index1, index2) {
      arr[index1] = arr.splice(index2, 1, arr[index1])[0];
      return arr;
    },
    //列设置更改事件
    onColSettingsChange(checkedValues) {
      var key = this.$route.name + ":colsettings";
      Vue.ls.set(key, checkedValues, 7 * 24 * 60 * 60 * 1000);
      this.settingColumns = checkedValues;
      const cols = this.defColumns.filter((item) => {
        if (item.key == "rowIndex" || item.dataIndex == "action") {
          return true;
        }
        if (this.settingColumns.includes(item.dataIndex)) {
          return true;
        }
        return false;
      }); 
      cols.forEach((item, index) => {
        if (item.key == "rowIndex") {
          cols.splice(index, 1);
          cols.unshift(item);
        } else if (item.dataIndex == "action") {
          cols.splice(index, 1);
          cols.push(item);
        }
      });
      this.columns = cols;
      this.$emit("rankCols", cols);
    },
  },
  created() {
    this.initColumns();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.color_c {
  color: #ccc;
}
.f-modal-title-rank {
  justify-content: space-between;
}
.f-modal-title-rank .right {
  cursor: pointer;
}
.boxShadow{
  box-shadow: 1px 1px 8px 1px rgba(0,0,0,.2);
}
</style>