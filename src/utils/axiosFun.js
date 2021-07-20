/**
 * axios 请求方法封转
 */

import axios from 'axios';
import store from 'vuex'
// 错误处理函数
const err = (error) => {
    if (error.response) {
      const data = error.response.data
      // const token = Vue.ls.get(ACCESS_TOKEN)
      if (error.response.status === 403) {
          Notify({ type: 'danger', message: data.message||data.msg });
      }
      if (error.response.status === 401) {
          Notify({ type: 'danger', message: '登录已过期，请重新登录。' });
        // if (token) {
        //   store.dispatch('Logout').then(() => {
        //     setTimeout(() => {
        //       window.location.reload()
        //     }, 1500)
        //   })
        // }
      }
    }
    return Promise.reject(error)
  }
/**
 *  axios请求拦截器
 **/
 axios.interceptors.request.use(config => {
    return config
  }, err)
  
  /**
   * axios 响应拦截器
   **/
  axios.interceptors.response.use(response => {
      console.log(response)
        const res = response.data
        if (res.code !== 0&&res.code!==200) { 
            if(res.code === 401){
                Notify({ type: 'danger', message: '登录已过期，请重新登录。' });
                window.location.href = '/login'
            }else if(res.code === 403){
                Notify({ type: 'danger', message: '无访问权限，请联系管理员。' });
            }
            return Promise.reject('error')
        }else{
            return response
        }
        
  }, err)
  
/**
 * axios 登录请求方法
 * @param：{string}     method          请求类型,必填
 * @param：{string}     url             请求地址,必填
 * @param：{string}     params          请求参数,必填
 * @param：{string}     variation       是否变异,非必填
 **/
const loginRequest = (method, url, params, variation = "F") => {
    if (variation == "F") {
        return axios({
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cGlnOnBpZw=='
            },
            data: params
        }).then(res => res.data);
    } else {
        return axios({
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cGlnOnBpZw=='
            },
            params: params
        }).then(res => res.data);
    }

};

/**
 * axios 通用公用方法
 * @param：{string}     method          请求类型,必填
 * @param：{string}     url             请求地址,必填
 * @param：{string}     params          请求参数,必填
 * @param：{string}     variation       是否变异,非必填
 **/
const request = (method, url, params, variation = "F") => {
    if (variation == "F") {
        return axios({
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            data: params,
        }).then(res => res.data);
    } else {
        return axios({
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            params: params,
        }).then(res => res.data);
    }

};
// 导出方法
export {
    loginRequest,
    request
}