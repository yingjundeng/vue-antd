export default {
    namespaced:true,//区明各模块
    state:{
      userInfo:{},
      permissions:null,
      routerMenu:null,
    },
    getters:{
        userInfo:state=>{
           return state.userInfo
        },
        permissions:state=>{},
        routerMenu:state=>{
            return state.routerMenu
        },
    },
    mutations:{
      setUserInfo(state,params){
        state.userInfo = params
      },
      setPermissions(state,params){
        state.permissions = params
      },
      setRouterMenu(state,params){
        state.routerMenu = params
      }
    },
    actions :{
       setAnsycUserInfo(state,params){
           return new Promise((resolve,reject)=>{
               setTimeout(()=>{
                state.commit('setUserInfo',params)
                resolve();
               },500)
           })
       },
       setAnsycPermissions(state,params){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
             state.commit('permissions',params)
             resolve();
            },500)
        })
        },
        setAnsycRouterMenu(state,params){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                state.commit('routerMenu',params)
                resolve();
                },500)
            })
        },
    }
    
}
