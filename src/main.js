import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入Antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './theme/index.less';
Vue.config.productionTip = false;
Vue.use(Antd);

import '@/components/echarts'
// 增加混入
import shareUtils from "@/mixins/utils";
Vue.mixin(shareUtils);

import Storage from 'vue-ls'
// vue-ls 的配置
const storageOptions = {
    namespace: 'jade-palace_',   // key 键的前缀（随便起）
  	name: 'ls',          // 变量名称（随便起） 使用方式：Vue.变量名称 或 this.$变量名称
  	storage: 'local'     // 作用范围：local、session、memory
}

Vue.use(Storage, storageOptions)
// 过滤器
import * as filters from './utils/util'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
import Cookies from 'vue-cookies'
Vue.use(Cookies)
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import {
    iconfontUrl,
    iconfontVersion
} from '@/utils/config'
import {
    loadStyle
} from './utils/util'
iconfontVersion.forEach(ele => {
    loadStyle(iconfontUrl.replace('$key', ele))
})
// 导入语言包
import i18n from '../public/languages/i18n'

Vue.config.productionTip = false
new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
    data: {
        // 空的实例放到根组件下，所有的子组件都能调用
        Bus: new Vue()
    }
}).$mount('#app')