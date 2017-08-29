<template>
  <div class="Banner">
    <div v-swiper:mySwiper="swiperOption" style="overflow: hidden">
      <div class="swiper-wrapper">
        <div
          v-for="(item, $index) in data.list"
          :key="$index"
          class="swiper-slide"
        >
            <img
                :src="item.url"
                class="Banner-img"
                :alt="`图片${$index + 1}`"
            />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';

  export default {
    name: 'banner',

    exports: {
      name: 'banner',
      label: '轮播图',
    },

    props: {
      data: {
        type: Object,
        default() {
          return {
            list: [{
              url: 'http://meipu4.video.meipai.com/c034ec38-b846-4208-ad14-789c1588cb8b.jpeg?imageView2/2/w/750/q/70',
            }, {
              url: 'http://meipu1.video.meipai.com/39ab00c5-8df1-4c3f-ae16-d5a733a043f6.jpeg?imageView2/2/w/750/q/70',
            },
            ],
          };
        },
      },
    },

    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          autoplayDisableOnInteraction: this.autoplay,
          direction: 'horizontal',
          loop: true,
          pagination: '.swiper-pagination',
          paginationElement: 'div',
        },
      };
    },
  };
</script>

<style lang="scss">
  @import '../../styles/components/widgets/Banner.scss';
</style>
