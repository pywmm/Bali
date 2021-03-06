// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Icon from 'vue-awesome/components/Icon';
import VueRouter from 'vue-router';
import Vue from 'vue';
import routes from './router/router';
import './styles/common.scss';
import VueAwesomeSwiper from './directives/swiper';
import InitAxios from './config/axios';

Vue.component('icon', Icon);
Vue.use(VueAwesomeSwiper);

InitAxios();

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history', // TODO: 放到配置里
  strict: false, // TODO: 啥意思
});

new Vue({
  router,
}).$mount('#app');

