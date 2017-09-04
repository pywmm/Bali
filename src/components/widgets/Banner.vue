<template>
    <div v-swiper:mySwiper="swiperOption">
    <!-- <div class="swiper-container"> -->
      <div class="swiper-wrapper">
        <div
          v-for="(item, $index) in list"
          :key="$index"
          class="swiper-slide"
        >
            <img
              :alt="`图片${$index + 1}`"
              :src="item.imgUrl"
              class="u-banner-img"
            />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import axios from 'axios';

  export default {
    name: 'banner',

    // props: {
    //   data: {
    //     type: Object,
    //     default() {
    //       return {
    //         list: [{
    //           url: 'http://meipu4.video.meipai.com/c034ec38-b846-4208-ad14-789c1588cb8b.jpeg?imageView2/2/w/750/q/70',
    //         }, {
    //           url: 'http://meipu1.video.meipai.com/39ab00c5-8df1-4c3f-ae16-d5a733a043f6.jpeg?imageView2/2/w/750/q/70',
    //         },
    //         ],
    //       };
    //     },
    //   },
    // },

    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          autoplayDisableOnInteraction: true,
          direction: 'horizontal',
          loop: true,
          pagination: '.swiper-pagination',
          paginationElement: 'div',
        },
        list: [],
      };
    },

    beforeCreate() {
      console.log('beforeCreate');
      axios.get('banner').then(({ data }) => {
        console.log('get banner data');
        this.list = data;
      });
    },
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    activated() {
      console.log('activated');
    },
    deactivated() {
      console.log('deactivated');
    },
    beforeDestroy() {
      console.log('beforeDestroy');
    },
    destroyed() {
      console.log('destroyed');
    },
  };
</script>

<style lang="scss">
  @import '../../styles/components/widgets/Banner.scss';
</style>
