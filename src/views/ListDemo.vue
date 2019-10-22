<template>
  <div class="list-demo">
    <base-list :list="list" v-slot="data">
      <span>{{ data }}</span>
    </base-list>
  </div>
</template>

<script lang="ts">
import BaseList from '@/components/BaseList.vue';
export default {
  name: 'ListDemo',
  components: {
    BaseList
  },
  data() {
    return {
      message: 'text',
      list: [
        {
          id: 1,
          name: '养殖模式'
        },
        {
          id: 2,
          name: '渔生产单'
        },
        {
          id: 3,
          name: '养殖类型'
        },
        {
          id: 4,
          name: '渔种类型'
        },
        {
          id: 5,
          name: '损耗类型'
        },
        {
          id: 6,
          name: '用药时间'
        },
        {
          id: 7,
          name: '物资管理'
        },
        {
          id: 8,
          name: '用药方式'
        }
      ]
    };
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>
