/**
 * vue 混入
 * 主要功能是获取实时时间
 **/
import {
    Icon
} from 'ant-design-vue';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1135504_7tdpfogtj03.js',
});
export default {
    data() {
        return {
            // 实时时间
            NewTime: ""
        };
    },
    components: {
        IconFont,
    },
    created() {},
    computed: {},
    methods: {
        //自定义列
        rankCols(row){
            let rowArr = []
            row.forEach((item,index)=>{
              if(item.fixed){
                item.fixed = ''
              }
              rowArr.push(item)
            })
            this.columns = rowArr
            console.log(this.columns)
            // this['setdefColumns'] ? this.setdefColumns() : ''
          },
        /**
         * 引入语言包
         * @param path
         */
        importFontpack(path) {
            let _nowMsg = require('@/languages/' + path + localStorage.lang + '.json');
            this.$i18n.mergeLocaleMessage(localStorage.lang, _nowMsg);
        },
    }
};