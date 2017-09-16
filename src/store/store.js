// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
// import { fetchItem } from './api';

Vue.use(Vuex);

function createStore() {
  return new Vuex.Store({
    state: {
      items: {},
    },
    actions: {
      fetchItem({ commit }) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return axios.get('banner').then(({ data }) => {
          console.log('get banner data');
          commit('setItem', data);
        });
      },
    },
    mutations: {
      setItem(state, { id, item }) {
        Vue.set(state.items, id, item);
      },
    },
  });
}

export default createStore;
