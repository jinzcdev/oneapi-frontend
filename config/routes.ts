export default [
  {
    path: '/user',
    layout: false,
    routes: [{name: '登录', path: '/user/login', component: './User/Login'}],
  },
  {path: '/', name: '接口列表', icon: 'smile', component: './InterfaceList'},
  {path: '/interface_info/:id', name: '接口详情', component: './InterfaceInfo', hideInMenu: true},
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {path: '/admin', redirect: '/admin/interface-info'},
      {name: '接口管理', icon: 'table', path: '/admin/interface-info', component: './Admin/InterfaceInfo'},
    ],
  },
  {path: '*', layout: false, component: './404'},
];
