import Swiper from 'swiper';

export default {
  install(Vue) {
    Vue.directive('swiper', {
      bind: (el) => {
        console.log('v-bind');
        if (!el.classList.contains('swiper-container')) {
          el.classList.add('swiper-container');
        }
      },

      inserted: () => {
        console.log('v-inserted');
      },

      update: () => {
        console.log('v-update');
      },

      componentUpdated: (el, binding, vnode) => {
        console.log('v-componentUpdated');
        const context = vnode.context;
        const instanceName = binding.arg;
        const options = binding.value;
        const swipe = context[instanceName];
        if (!swipe) {
          context[instanceName] = new Swiper(el, options);
        }
      },

      unbind: (el, binding, vnode) => {
        console.log('v-unbind');
        const swipe = vnode.context[binding.arg];
        if (swipe) {
          swipe.destroy();
          delete vnode.context[binding.arg];
        }
      },
    });
  },
};
