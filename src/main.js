// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Icon from 'vue-awesome/components/Icon';
import VueRouter from 'vue-router';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import routes from './router/router';
import createStore from './store/store';
import './styles/common.scss';
import VueAwesomeSwiper from './directives/swiper';
import InitAxios from './config/axios';
import App from './App';

Vue.component('icon', Icon);
Vue.use(VueAwesomeSwiper);

InitAxios();

Vue.config.productionTip = false;

Vue.use(VueRouter);
function createRouter() {
  return new VueRouter({
    routes,
    mode: 'history', // TODO: 放到配置里
    strict: false, // TODO: 啥意思
  });
}

// new Vue({
//   router,
// }).$mount('#app');

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
function createApp() {
  // 创建 router 和 store 实例
  const router = createRouter();
  const store = createStore();
  // 同步路由状态(route state)到 store
  sync(store, router);
  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });
  return { app, router, store };
}

export default createApp;
