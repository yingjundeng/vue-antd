import viewIndex from '@/layout/index'
import contentView from '@/layout/contentView'
 const ioRouter = [
    {
        path: '/board',
        redirectTo:'/login',
        pathMatch:'full',
        name: '系统看板',
        icon:'project',
        component:viewIndex,
        meta: {
            requireAuth: true,
        },
        children:[
            {
                path: '/home',
                name: '首页',
                icon:'home',
                component: () =>import( /* webpackChunkName: "page" */ '@/pages/home/home'),
                meta: {
                requireAuth: true,
                },
                children:[]
            },
        ]
    },
    {
        path: '/monitoring',
        redirectTo:'/login',
        pathMatch:'full',
        name: '集成系统监控',
        icon:'hdd',
        component:viewIndex,
        meta: {
            requireAuth: true,
        },
        children: [      
        {
            path: '/fireAlarmSym',
            name: '智能控制系统',
            icon:'fire',
            component: () =>import( /* webpackChunkName: "page" */ '@/pages/home/fireAlarmSym'),
            meta: {
            requireAuth: true,
            },
            children:[]
           },
           {
            path: '/monitorScreen',
            name: '监控大屏',
            icon:'play-square',
            hidden:false,
            component: () =>import( /* webpackChunkName: "page" */ '@/pages/home/monitorScreen'),
            meta: {
            requireAuth: true,
            },
            children:[]
           },
           {
            path: '/monitorScreen/historicalVideo',
            name: '历史画面与录像',
            icon:'play-square',
            hidden:true,
            component: () =>import( /* webpackChunkName: "page" */ '@/pages/home/historicalVideo'),
            meta: {
            requireAuth: true,
            },
            children:[]
           },
           {
            path: '/monitorScreen/setting',
            name: '监控大屏设置',
            icon:'play-square',
            hidden:true,
            component: () =>import( /* webpackChunkName: "page" */ '@/pages/home/monitorSeting'),
            meta: {
            requireAuth: true,
            },
            children:[]
           },
           {
            path: '/automatic',
            name: '自动控制模式列表',
            icon:'deployment-unit',
            component: () =>
            import( /* webpackChunkName: "page" */ '@/pages/home/control/automatic'),
            meta: {
            requireAuth: true,
            },
            children:[]
            },
            //    {
        //     path: '/fireAlarmSym',
        //     name: '火灾自动报警系统',
        //     icon:'fire',
        //     component: () =>import( /* webpackChunkName: "page" */ '@/pages/home/fireAlarmSym'),
        //     meta: {
        //     requireAuth: true,
        //     },
        //     children:[]
        //    },
        //    {
        //     path: '/equipmentSym',
        //     name: '建筑设备监控系统',
        //     icon:'hdd',
        //     component: () =>import( /* webpackChunkName: "page" */ '@/pages/home/equipmentSym'),
        //     meta: {
        //     requireAuth: true,
        //     },
        //     children:[]
        //    },
        //    {
        //     path: '/securitySym',
        //     name: '视频安防监控系统',
        //     icon:'play-square',
        //     component: () =>import( /* webpackChunkName: "page" */ '@/pages/home/securitySym'),
        //     meta: {
        //     requireAuth: true,
        //     },
        //     children:[]
        //    },
        //  {
        //     path: '/intrusionAlarm',
        //     name: '入侵报警系统',
        //     icon:'block',
        //     component: () =>import( /* webpackChunkName: "page" */ '@/pages/home/intrusionAlarm'),
        //     meta: {
        //     requireAuth: true,
        //     },
        //     children:[]
        //    },
        //    {
        //     path: '/temperatures',
        //     name:'智能控制系统',
        //     icon:'save',
        //     component:contentView,
        //     meta: {
        //     title:'智能控制系统',
        //     requireAuth: true,
        //     },
        //     children: [
        //         {
        //          path: '/temperature',
        //          name: '智能温控系统',
        //          icon:'apartment',
        //          component: () =>
        //          import( /* webpackChunkName: "page" */ '@/pages/home/control/temperature'),
        //          meta: {
        //          requireAuth: true,
        //          },
        //         },
        //         {
        //          path: '/lighting',
        //          name: '智能照明系统',
        //          icon:'bulb',
        //          component: () =>
        //          import( /* webpackChunkName: "page" */ '@/pages/home/control/lighting'),
        //          meta: {
        //          requireAuth: true,
        //          },
        //         },
        //         {
        //         path: '/automatic',
        //         name: '自动控制模式列表',
        //         icon:'deployment-unit',
        //         component: () =>
        //         import( /* webpackChunkName: "page" */ '@/pages/home/control/automatic'),
        //         meta: {
        //         requireAuth: true,
        //         },
        //         }
        //      ]
        //    }
        ]
    },
    {
        path: '/alarm',
        name: '报警中心',
        icon:'alert',
        redirectTo:'/realtime',
        pathMatch:'full',
        component:viewIndex,
        meta: {
            requireAuth: true,
        },
        children: [
           {
            path: '/realtime',
            name: '实时报警',
            icon:'alert',
            component: () =>
            import( /* webpackChunkName: "page" */ '@/pages/alarm/realTime'),
            meta: {
            requireAuth: true,
            },
            children:[]
           },
           {
            path: '/history',
            name: '历史报警',
            icon:'bulb',
            component: () =>
            import( /* webpackChunkName: "page" */ '@/pages/alarm/historys'),
            meta: {
            requireAuth: true,
            },
            children:[]
           },
           {
            path: '/statistical',
            name: '报警统计',
            icon:'bell',
            component: () =>
            import( /* webpackChunkName: "page" */ '@/pages/alarm/alarmTotal'),
            meta: {
            requireAuth: true,
            },
            children:[]
           }
        ]
    },
    {
        path: '/energy',
        redirectTo:'/energytable',
        pathMatch:'full',
        name: '能耗管理',
        icon:'tablet',
        component: viewIndex,
        meta: {
            requireAuth: true,
        },
        children: [
           {
            path: '/energytable',
            name: '能耗报表',
            icon:'tablet',
            component: () =>
            import( /* webpackChunkName: "page" */ '@/pages/energy/energyTable'),
            meta: {
            requireAuth: true,
            },
            children:[]
           },
        ]
    },
    {
        path: '/',
        name: '系统管理',
        icon:'usergroup-add',
        component:viewIndex,
        meta: {
            requireAuth: true,
        },
        children: [
            {
                path: '/roleuser',
                name: '角色&权限',
                icon:'usergroup-add',
                component: () =>
                import( /* webpackChunkName: "page" */ '@/pages/sys/roleUser'),
                meta: {
                requireAuth: true,
                },
                children:[]
            }
        ]
    },
]

export {
    ioRouter
}
