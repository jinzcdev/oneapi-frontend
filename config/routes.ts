export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/', name: 'API 库', icon: 'BankOutlined', component: './InterfaceList' },
  { path: '/user/profile', name: '个人中心', icon: 'UserOutlined', component: './User/Profile' },
  {
    path: '/user/interface',
    name: '我的接口',
    icon: 'StarOutlined',
    component: './User/MyInterface',
  },
  { path: '/interface-info/:id', name: '接口详情', component: './InterfaceInfo', hideInMenu: true },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/interface-info' },
      { name: '接口管理', path: '/admin/interface-info', component: './Admin/InterfaceInfo' },
      {
        name: '接口统计',
        path: '/admin/interface-statistics',
        component: './Admin/InterfaceStatistics',
      },
      {
        name: '接口充值',
        path: '/admin/interface-recharge',
        component: './Admin/InterfaceRecharge',
      },
    ],
  },
  { path: '*', layout: false, component: './404' },
];
