export default [
  {
    path: '/user',
    layout: false,
    routes: [{name: '登录', path: '/user/login', component: './User/Login'}],
  },
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {path: '/admin', redirect: '/admin/interface-info'},
      {name: '接口管理', icon: 'table', path: '/admin/interface-info', component: './InterfaceInfo'},
    ],
  },

  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},
];
