import Home from '@/pages/Home/Home';
import Detail from '@/pages/Detail/Detail';
import App from '../App';

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
  // 地址为空时跳转home页面
    {
      path: '',
      redirect: '/home',
    },
    // 首页
    {
      path: '/home',
      component: Home,
    },
    // 详情页
    {
      path: '/detail',
      component: Detail,
    },
  ],
}];
