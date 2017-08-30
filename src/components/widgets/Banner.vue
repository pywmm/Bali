<template>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(item, $index) in data.list"
          :key="$index"
          class="swiper-slide"
        >
            <img
              :alt="`图片${$index + 1}`"
              :src="item.url"
              class="u-banner-img"
            />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';

  export default {
    name: 'banner',

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
