<template>
    <section class="m-footer">
      <section :class="handleActive('index')" @click="handleGoto({path: '/index'})">
        <icon name="home" />
        <div>首页</div>
      </section>
      <section :class="handleActive('list')"  @click="handleGoto({path: '/list'})">
        <icon name="th" />
        <div>列表</div>
      </section>
      <section :class="handleActive('order')"  @click="handleGoto({path: '/order'})">
        <icon name="th-list" />
        <div>订单</div>
      </section>
      <section :class="handleActive('home')"  @click="handleGoto({path: '/home'})">
        <icon name="user-o" />
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

  methods: {
    handleGoto(path) {
      this.$router.push(path);
    },

    handleActive(param) {
      return { active: this.$route.path.indexOf(param) !== -1 || false };
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/components/Footer';
</style>
