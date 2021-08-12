<template>
  <a-layout class="layoutbox" id="components-layout-demo-custom-trigger">
    <!-- 左侧菜单 -->
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo">{{ collapsed ? "admin" : "翠宫智能化集成系统" }}</div>
      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="['1']"
        :selectedKeys="[$route.path]"
      > 
        <a-sub-menu v-if="item.children.length" v-for="item in menu" :key="item.path">
          <span slot="title">
            <a-icon :type="item.icon" />
            <span v-show="!collapsed">{{ item.name }}</span>
          </span>
          <a-menu-item
            v-for="childrenitem in item.children"
            :key="childrenitem.path"
            @click="selectItem(childrenitem)"
          >
            <a-icon :type="childrenitem.icon" />
            <span>{{ childrenitem.name }}</span>
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item v-else  :key="item.path" @click="selectItem(item)">
          <a-icon :type="item.icon" />
          <span>{{ item.name }}</span>
        </a-menu-item>

      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- 页面整体头部导航 -->
      <a-layout-header class="headbox" style="background: #fff; padding: 0">
        <!-- 左侧展示与隐藏 -->
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <!-- 中间MENU -->
        <!-- <div class="middle-menu">
          <div v-for="(item,index) in menu" :key="index+'oli'" :class="{active:activeSelsect==index}">
            <i :class="['iconfont',item.icon]"></i>
            <span @click="changeMenu(item,index)">{{item.name}}</span>
          </div>
        </div> -->
        <div class="user-head">
          <!-- 切换语言 -->
          <!-- <div class="toggle">
            <a-select :defaultValue="defaultValue" @change="handleChange">
              <a-select-option value="cn">中文</a-select-option>
              <a-select-option value="en">English</a-select-option>
              <a-select-option value="ja">日本語</a-select-option>
            </a-select>
          </div> -->
          <!-- 用户信息 -->
          <a-dropdown>
            <a class="ant-dropdown-link" href="#">
              {{ userInfo.username }}
              <a-icon type="more" />
            </a>
            <a-menu slot="overlay">
              <!-- <a-menu-item @click="headClick('home')">
                <i class="iconfont iconicon_huabanfuben"></i>
                <span>{{ $t("logistics.index") }}</span>
              </a-menu-item>
              <a-menu-item @click="headClick('msg')">
                <i class="iconfont icongerenzhongxin"></i>
                <span>{{ $t("logistics.PersonalInformation") }}</span>
              </a-menu-item> -->
              <a-menu-item @click="headClick('quit')">
                <i class="iconfont icontuichu2"></i>
                <span>{{ $t("logistics.LogOut") }}</span>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
      <!-- 中间主体部分 -->
      <a-layout-content
        :style="`min-height: ${minHeight}px;`"
      >
      <div class="admin-layout-content">
       <router-view class="avue-view" />
       </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { GetMenu } from "../api/admin/token";
import { disposereq,deepCloned } from "@/utils/util";
import router from "@/router";
import Layout from "@/views/index/";
// import contentView from "./contentView";
import {ioRouter} from "@/router/ioRouter";
import {mapState,mapGetters,mapMutations} from 'vuex'
import { loginByUserToken, getUserInfo,amdinLogin } from "../api/admin/token";
export default {
  // components:{contentView},
  data() {
    return {
      minHeight: window.innerHeight + 64 + 122,
      activeSelsect:0,
      collapsed: false,
      menu:ioRouter,
      menuChildren:ioRouter[0].children,
      defaultValue: localStorage.lang
    };
  },
  computed:{
    ...mapGetters('account', ['userInfo','routerMenu']),
  },

  mounted(){
    this.refreshSave()
    this.refreshGetUserInfo()
    this.routerFilter(this.menu)
  },
  methods: {
    ...mapMutations('account', ['setUserInfo','setRouterMenu']),
    //切换菜单
    changeMenu(menu,idx){
       this.menuChildren = menu.children
       if(this.$route.path !== menu.children[0].path){
        this.$router.push({
          path: menu.children[0].path,
        });
       }
       this.activeSelsect = idx
       this.routerFilter(this.menuChildren)
    },
    refreshSave(){
      this.menu.map((item,idx)=>{
        item.children.map(lp=>{
           if(lp.path == this.$route.path){
            this.activeSelsect = idx
            this.menuChildren = item.children
          }
        })
      })
    },
    refreshGetUserInfo(){
       getUserInfo().then(res => {
            // 判断是否成功
            if(res.code===0){
              this.setUserInfo(res.data.sysUser||'')
            }else{
              this.$message.error(res.msg)
            }
          });
    },
    //路由过滤
    routerFilter(menu){
      const res = []
      menu.forEach(route => {
        const tmp = { ...route }
        if (!tmp.hidden) {
            if (tmp.children) {
              tmp.children = this.routerFilter(tmp.children)
            }
            res.push(tmp)
        }
      })
      this.menu = deepCloned(res)
      return res
    },
    // 获取菜单
    getMenu() {
      GetMenu()
        .then(res => {
          if (res.code == 0) {
            this.formatData(
              localStorage.lang == "cn"
                ? res.data.cn
                : localStorage.lang == "en"
                ? res.data.en
                : res.data.ja
            );
            let asyncRouters = this.routerPackag(
              localStorage.lang == "cn"
                ? res.data.cn
                : localStorage.lang == "en"
                ? res.data.en
                : res.data.ja
            );
            asyncRouters.push({ path: "*", redirect: "/index" });
            router.addRoutes(asyncRouters);
          } else {
            this.$message.info(err);
          }
        })
        .catch(err => {
          disposereq(this, err);
        });
    },
    // 路由数据重新封装
    routerPackag(routers) {
      let accessedRouters = routers.filter(router => {
        if (router.component === "Layout") {
          // Layout组件特殊处理
          router.component = Layout;
        } else {
          //处理组件---重点
          router.component = this.loadView(router.component);
        }
        //存在子集
        if (router.children && router.children.length) {
          router.children = this.routerPackag(router.children);
        }
        return true;
      });
      return accessedRouters;
    },
    loadView(view) {
      // 路由懒加载
      return () => import(`@/${view}`);
    },
    // 菜单点击事件
    selectItem(item) {
      this.$router.push({
        path: item.path
      });
    },
    // 由于数据格式不符合，需要对数据进行处理
    formatData(data) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].children.length; j++) {
          data[i].children[j].showPath =
            data[i].path + "/" + data[i].children[j].path;
        }
      }
      this.menu = data;
    },
    headClick(type) {
      if (type == "home") {
        this.$router.push({
          path: "/home"
        });
      } else if (type == "msg") {
      } else {
        localStorage.removeItem("token");
        this.$router.push({
          path: "/login"
        });
      }
    },
    // 切换多语言
    handleChange(val) {
      this.$root.Bus.$emit("switchLanguage", val);
    }
  }
};
</script>
<style>
.layoutbox {
  min-width: 1300px;
  height: 100%;
}
.ant-layout.ant-layout-has-sider > .ant-layout, .ant-layout.ant-layout-has-sider > .ant-layout-content{
  overflow: hidden;
}
.admin-layout-content{
  /* padding: 20px; */
  color: #A7AAB2;
   background:rgba(24, 30, 49, 0.3);
   /* background-image: url('../assets/viewBg.png');  */
  /* background: #fff; */
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  margin: 16px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}
.headbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.iconfont {
  font-size: 14px !important;
  margin-right: 5px;
}
.toggle {
  display: inline-block;
  box-sizing: border-box;
  padding-right: 20px;
}
.user-head {
  display: inline-block;
  box-sizing: border-box;
  padding-right: 20px;
}
.middle-menu{
  display: flex;
  justify-content: space-between;
  width: 60%;
  cursor: pointer;
}
 .active{
    color: #409EFD;
  }
</style>
