<template>
    <section class="m-footer">
      <section @click = "gotoAddress({path: '/index'})">
        <icon name="home" :class="{ active: $route.path.indexOf('index') !== -1, 'icon': true }"></icon>
        <div>首页</div>
      </section>
      <section @click = "gotoAddress({path: '/list'})">
        <icon name="th" :class="{ active: $route.path.indexOf('list') !== -1, 'icon': true }"></icon>
        <div>列表</div>
      </section>
      <section @click = "gotoAddress({path: '/order'})">
        <icon name="th-list" :class="{ active: $route.path.indexOf('order') !== -1, 'icon': true }"></icon>
        <div>订单</div>
      </section>
      <section @click = "gotoAddress({path: '/home'})">
        <icon name="user-o" :class="{ active: $route.path.indexOf('home') !== -1, 'icon': true }"></icon>
        <div>我的</div>
      </section>
    </section>
</template>

<script>
import 'vue-awesome/icons/home';
import 'vue-awesome/icons/th';
import 'vue-awesome/icons/th-list';
import 'vue-awesome/icons/user-o';

export default {
  name: 'Footer',
  data() {
    return {};
  },

  methods: {
    gotoAddress(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/components/Footer';
</style>
