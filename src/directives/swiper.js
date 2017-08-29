import Swiper from 'swiper';

export default {
  install(Vue) {
    Vue.directive('swiper', {
      bind: (el) => {
        if (!el.classList.contains('swiper-container')) {
          el.classList.add('swiper-container');
        }
      },

      inserted: (el, binding, vnode) => {
        const context = vnode.context;
        const instanceName = binding.arg;
        const options = binding.value;
        const swipe = context[instanceName];
        if (!swipe) {
          context[instanceName] = new Swiper(el, options);
        }
      },

      componentUpdated: (el, binding, vnode) => {
        const swipe = vnode.context[binding.arg];
        if (swipe) {
          swipe.update(true);
          swipe.updatePagination(true);
          swipe.slideTo(0, 0, false);
          if (binding.value.loop) {
            swipe.reLoop();
          }
        }
      },

      unbind: (el, binding, vnode) => {
        const swipe = vnode.context[binding.arg];
        if (swipe) {
          swipe.destroy();
          delete vnode.context[binding.arg];
        }
      },
    });
  },
};
