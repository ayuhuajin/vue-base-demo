<template>
  <div class="base-demo">
    <watch-demo
      :num.sync="num"
      :title="title"
      :titleImmediately="titleImmediately"
      :persons="persons"
      @changeTitle="changeTitle"
      @changeImmediatelyTitle="changeImmediatelyTitle"
    >
    </watch-demo>
    <span @click="changeValue">改变数值</span>
  </div>
</template>

<script lang="ts">
import WatchDemo from '@/components/baseDemo/WatchDemo.vue';
export default {
  name: 'home',
  components: {
    WatchDemo
  },
  data() {
    return {
      num: 10,
      title: '标题',
      titleImmediately: '立即监听',
      persons: [
        // { id: 1, name: '张三', age: 25 },
        // { id: 2, name: '李四', age: 26 },
        // { id: 3, name: '王五', age: 100 },
        // { id: 4, name: '陈留', age: 52 }
      ] as any
    };
  },
  watch: {
    title() {
      console.log('父级监听', this.title);
    },
    titleImmediately: {
      handler(newValue: any, oldVal: any) {
        console.log(newValue, oldVal);
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    setTimeout(() => {
      (this as any).persons = [
        { id: 1, name: '张三', age: 25 },
        { id: 2, name: '李四', age: 26 },
        { id: 3, name: '王五', age: 100 },
        { id: 4, name: '陈留', age: 52 }
      ];
    }, 200);
  },
  methods: {
    // 修改标题
    changeTitle(title: string) {
      (this as any).title = title;
    },
    // 修改立即监听的标题
    changeImmediatelyTitle(title: string) {
      (this as any).titleImmediately = title;
    },
    changeValue() {
      (this as any).num = 9999;
      (this as any).title = '123';
      (this as any).titleImmediately = '456';
      (this as any).persons = [{ id: 8, name: '李白', age: 100 }, { id: 9, name: '王五', age: 52 }];
    }
  }
};
</script>

<style lang="scss" scoped></style>
