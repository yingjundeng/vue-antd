<template>
  <div class="body">
    <TSCarousel />
    <div class="conbox">
      <div class="logo">
        <img src="../assets/img/logo.png" alt />
        <div style="white-space:nowrap;">翠宫智能化集成系统</div>
      </div>
      <div class="smbox">
        <!-- 切换语言 -->
        <!-- <div class="toggle">
          <a-select :defaultValue="defaultValue" @change="handleChange">
            <a-select-option value="cn">中文</a-select-option>
            <a-select-option value="en">英文</a-select-option>
            <a-select-option value="ja">日文</a-select-option>
          </a-select>
        </div> -->
        <div class="a-form-itembox">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item class="Item">
              <div class="title">登录</div>
            </a-form-item>
            <a-form-item class="Item inputbox">
              <a-input
                placeholder="用户名"
                size="large"
                v-decorator="['username', { rules: [{ required: true, message: this.$t('inputuser') }] }]"
              >
                <icon-font
                  slot="prefix"
                  type="iconyonghuming"
                  :style="{ fontSize: '16px', color: '#0088cc' }"
                />
              </a-input>
            </a-form-item>
            <a-form-item class="Item inputbox">
              <a-input
                placeholder="密码"
                size="large"
                type="password"
                v-decorator="['password', { rules: [{ required: true, message: this.$t('inputpassword') }] }]"
              >
                <icon-font
                  slot="prefix"
                  type="iconmima1"
                  :style="{ fontSize: '16px', color: '#0088cc' }"
                />
              </a-input>
            </a-form-item>
            <!-- <a-form-item class="Item">
              <div class="inputsmbox">
                <a-input
                  :placeholder="$t('code')"
                  size="large"
                  v-decorator="['code', { rules: [{ required: true, message: this.$t('inputcode') }] }]"
                >
                  <icon-font
                    slot="prefix"
                    type="iconyanzhengma1"
                    :style="{ fontSize: '16px', color: '#0088cc' }"
                  />
                </a-input>
                <img @click="SwitchCode" :src="codeUrl" />
              </div>
            </a-form-item> -->
            <a-form-item class="Item inputbox">
              <a-button
                type="primary"
                :loading="btnloading"
                html-type="submit"
                class="btn"
                size="large"
              >登录</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <!-- <div class="foot">
        <a class="copyright-a" href="#">ICP备XXXXXXXXX号</a> Copyright ©2021-2021 版权所有 : 
      </div> -->
    </div>
  </div>
</template>
<script>
import TSCarousel from "../components/TSCarousel";
import { encryption } from "../utils/utils";
import { timeFix } from '../utils/util'
import { mapMutations } from 'vuex'
import { loginByUserToken, getUserInfo,amdinLogin } from "../api/admin/token";
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
        randomStr: Math.round(new Date() / 1000),
        code: "",
        grant_type: "password",
        scope: "server"
      },
      btnloading: false,
      codeUrl: "/code?randomStr=" + Math.round(new Date() / 1000),
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  // 注册组件
  components: {
    TSCarousel
  },
  created() {
    this.defaultValue = localStorage.lang || "cn";
    // localStorage.setItem("lang", "cn");
    // this.importFontpack("login/");
  },
  beforeUpdate() {
    // this.importFontpack("login/");
  },
  methods: {
    // 切换多语言
    handleChange(val) {
      this.$root.Bus.$emit("switchLanguage", val);
    },
    ...mapMutations('account',['setUserInfo']),
    // 切换验证码
    SwitchCode() {
      this.codeUrl = "/code?randomStr=" + Math.round(new Date() / 1000);
      this.login.randomStr = Math.round(new Date() / 1000);
    },
    loginSuccess() {
      this.$notification.success({
        message: '欢迎',
        description: `${timeFix()}，欢迎回来`
      })
    },
    handleSubmit(){
      this.$router.push({path: "/home"});
      this.loginSuccess()
      this.btnloading = false;
    },
    // 提交
    // handleSubmit(e) {
    //   e.preventDefault();
    //   this.form.validateFields((err, values) => {
    //     if (!err) {
    //       this.btnloading = true;
    //       this.login.username = values.username;
    //       this.login.password = values.password;
    //       // this.login.code = values.code;
    //       // 密码加密
    //       const user = encryption({
    //         data: this.login,
    //         key: "thanks,pig4cloud",
    //         param: ["password"]
    //       });
    //       getUserInfo().then(res => {
    //         // 判断是否成功
    //         if(res.code===0){
    //           console.log(res)
    //           this.$cookies.set('access_token',res.data.sysUser.wxOpenid||'token_LOGIN',60*5)
    //           this.$router.push({path: "/home"});
    //           this.setUserInfo(res.data.sysUser||'')
    //           this.loginSuccess()
    //           this.btnloading = false;
    //         }else{
    //           this.$message.error(res.msg)
    //         }
    //       });
    //     }
    //   });
    // }
    // handleSubmit(e) {
    //   e.preventDefault();
    //   this.form.validateFields((err, values) => {
    //     if (!err) {
    //       this.btnloading = true;
    //       this.login.username = values.username;
    //       this.login.password = values.password;
    //       this.login.code = values.code;
    //       // 密码加密
    //       const user = encryption({
    //         data: this.login,
    //         key: "thanks,pig4cloud",
    //         param: ["password"]
    //       });
    //       // 请求token
    //       loginByUserToken(user).then(response => {
    //         // 判断是否成功
    //         try {
    //           if (response.hasOwnProperty("access_token")) {
    //             localStorage.setItem("token", response.access_token);
    //             getUserInfo()
    //               .then(res => {
    //                 if (res.code == 0) {
    //                   this.$router.push({
    //                     path: "/index"
    //                   });
    //                   this.loginSuccess()
    //                 } else {
    //                   this.$message.info(res.msg);
    //                   this.SwitchCode();
    //                   this.btnloading = false;
    //                   localStorage.clearItem("token");
    //                 }
    //               })
    //               .catch(err => {
    //                 this.$message.info(err);
    //                 this.SwitchCode();
    //                 this.btnloading = false;
    //                 localStorage.clearItem("token");
    //               });
    //           } else {
    //             this.$message.info(response.msg);
    //             this.SwitchCode();
    //             this.btnloading = false;
    //           }
    //         } catch (error) {
    //           this.$message.info(response.msg);
    //           this.SwitchCode();
    //           this.btnloading = false;
    //         }
    //       });
    //     }
    //   });
    // }
  }
};
</script>
<style scoped>
.body {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color:#112346 ;
}

.conbox {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo {
  font-size: 30px;
  color: #fff;
  width: 24vw;
  display: flex;
  align-items: center;
}
.logo img {
  height: 38px;
  margin-right: 20px;
}

.smbox {
  width: 60vw;
  height: 60vh;
  /* background-color: #fff; */
  margin: 40px 0px;
  /* box-shadow: 0px 0px 10px #000; */
  /* background-image: url("../assets/img/bg.png"); */
  background-repeat: no-repeat;
  background-position: left;
  background-size: 100%;
  position: relative;
}
.a-form-itembox {
  position: absolute;
  top: 0px;
  right: 0px;
  box-sizing: border-box;
  padding: 60px 80px;
}
.title {
  font-size: 20px;
  color: #fff;
}

.inputbox {
  width: 300px;
  box-sizing: border-box;
}

.inputsmbox {
  width: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}
.btn {
  width: 300px;
}
.foot {
  color: #fff;
}
.copyright-a {
  text-decoration: none;
  color: #fff;
}
.copyright-a:hover {
  color: #fff;
}
.toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
