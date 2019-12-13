<template>
  <div class="live-monitor">
    <base-video v-for="item in videoList" :key="item.id" :videoObj="item"></base-video>
  </div>
</template>

<script>
import BaseVideo from '@/components/BaseVideo.vue';
export default {
  name: 'LiveMonitor',
  components: {
    BaseVideo
  },
  data() {
    return {
      msg: '视频监控',
      videoList: [
        {
          id: 14456,
          url:
            'http://alhlsgw.lechange.com:9001/LCO/3E00EBAPAZ76A22/0/1/20170925133417/dev_20170925133417_itq70exptp5sa470.m3u8'
        },
        {
          id: 6641,
          url:
            'http://alhlsgw.lechange.com:9001/LCO/3E00EBAPAZ76A22/1/1/20170925134020/dev_20170925134020_h9i7gk3288tadsqg.m3u8'
        },
        {
          id: 7452,
          url:
            'http://alhlsgw.lechange.com:9001/LCO/3E00EBAPAZ76A22/7/1/20170925134508/dev_20170925134508_ipkbxgeff8fkkq0k.m3u8'
        },
        {
          id: 1452,
          url:
            'http://alhlsgw.lechange.com:9001/LCO/3E00EBAPAZ76A22/0/1/20170925133417/dev_20170925133417_itq70exptp5sa470.m3u8'
        },
        {
          id: 1452,
          url:
            'http://alhlsgw.lechange.com:9001/LCO/3E00EBAPAZ76A22/0/1/20170925133417/dev_20170925133417_itq70exptp5sa470.m3u8'
        },
        {
          id: 1452,
          url:
            'http://alhlsgw.lechange.com:9001/LCO/3E00EBAPAZ76A22/0/1/20170925133417/dev_20170925133417_itq70exptp5sa470.m3u8'
        },
        {
          id: 1452,
          url:
            'http://alhlsgw.lechange.com:9001/LCO/3E00EBAPAZ76A22/0/1/20170925133417/dev_20170925133417_itq70exptp5sa470.m3u8'
        }
      ]
    };
  },
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
.live-monitor {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  .base-video {
    margin-right: 2%;
    margin-bottom: 10px;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  > div {
    flex: 0 0 49%;
    height: 100%;
  }
}
</style>
