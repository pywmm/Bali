<template>
    <section class="m-footer">
      <div><icon name="home" class="icon active"></icon><div>首页</div></div>
      <div><icon name="th" class="icon"></icon><div>列表</div></div>
      <div><icon name="th-list" class="icon"></icon><div>订单</div></div>
      <div><icon name="user-o" class="icon"></icon><div>我的</div></div>
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
};
</script>

<style lang="scss">
  @import '../styles/components/Footer';
</style>

