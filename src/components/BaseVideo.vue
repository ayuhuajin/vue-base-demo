<template>
  <div class="base-video">
    <div :id="videoObj.id"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseVideo',
  props: {
    videoList: {
      type: Array,
      require: true
    },
    videoObj: {
      type: Object,
      required: true
    }
  },
  data() {
    return { msg: '视频监控' };
  },
  mounted() {
    this.init();
  },
  watch: {},
  methods: {
    init() {
      var player = new TcPlayer(this.videoObj.id, {
        m3u8: this.videoObj.url, //请替换成实际可用的播放地址
        autoplay: false, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        controls: false,
        posterImage: true, //是否显示封面。
        muted: true, // 静音播放
        pausePosterEnabled: true,
        preload: 'auto',
        poster: { style: 'stretch', src: 'http://ylwzn.nxin.com/images/wave.png' },
        width: '200px', //视频的显示宽度，请尽量使用视频分辨率宽度
        height: '120px' //视频的显示高度，请尽量使用视频分辨率高度
      });
    }
  }
};
</script>
<style lang="scss">
.base-video {
  border-radius: 4px;
  overflow: hidden;
}
video {
  width: 100%;
  object-fit: fill;
  height: 120px;
}
</style>
