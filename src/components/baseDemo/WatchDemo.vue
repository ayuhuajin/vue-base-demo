<template>
  <div class="watch-demo">
    <!-- .sync 的使用 -->
    <input type="number" :value="num" @input="changeNum" />
    <!-- 监听title -->
    <input type="text" :value="title" @input="changeTitle($event, 'title')" />
    <input type="text" :value="titleImmediately" @input="changeTitle($event, 'immediateTitle')" />
    <!-- 人员，监听对象 -->
    <ul class="person">
      <li v-for="(item, index) in persons" :key="index">
        <span>姓名:{{ item.name }}</span>
        <span>年龄:{{ item.age }}</span>
        <span @click="handleDel(index)">删除</span>
        <span @click="handleAdd(index)">添加</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WatchDemo',
  props: {
    num: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: '标题'
    },
    titleImmediately: {
      type: String
    },
    persons: {
      type: Array, // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return { name: '测试' };
      }
    }
  },
  watch: {
    // 监听title
    num(value) {
      console.log('子级num', value);
    },
    // 监听title
    title(value) {
      console.log('子级title', value);
    },
    // 立即监听
    titleImmediately: {
      handler(newValue, oldVal) {
        console.log('子级立即监听', newValue, oldVal);
      },
      immediate: true
    },
    // 人员 监听对象属性值得改变
    persons: {
      handler(newValue, oldVal) {
        console.log('子级人员', newValue, oldVal);
      },
      deep: true
    }
  },
  mounted() {
    console.log((this as any).persons);
  },
  methods: {
    changeNum(e: any) {
      this.$emit('update:num', e.target.value);
    },
    // 改变标题
    changeTitle(e: any, str: string) {
      if (str === 'title') {
        this.$emit('changeTitle', e.target.value);
      } else if (str === 'immediateTitle') {
        this.$emit('changeImmediatelyTitle', e.target.value);
      }
    },
    // 删除人员
    handleDel() {},
    // 添加人员
    handleAdd(index: number) {
      (this as any).persons[index].name = Math.random();
    }
  }
});
</script>

<style lang="scss" scoped>
.watch-demo {
  margin-top: 20px;
  padding: 0 20px;
  border: 1px solid red;
}
input {
  width: 150px;
  margin-right: 20px;
  padding-left: 6px;
  border: none;
  border: 1px solid#999;
  border-radius: 5px;
  line-height: 40px;
  outline: none;
}
.person {
  margin-top: 20px;
  span {
    margin-right: 15px;
  }
}
</style>
