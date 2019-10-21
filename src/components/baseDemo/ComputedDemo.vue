<template>
  <div class="computed-demo">
    <span>{{ priceValue }}</span>
    <span>{{ fullName }}</span>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ bookName(item, index) }}
      </li>
    </ul>
    <input type="text" v-model="grade" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ComputedDemo',
  props: {
    price: {
      require: true,
      type: Number,
      default: 5
    },
    obj: {
      require: true,
      type: Object
    },
    base: {
      require: true,
      type: Array
    }
  },
  data() {
    return {
      list: [
        {
          id: 1,
          book: '野性的呼唤'
        },
        {
          id: 2,
          book: '平凡的世界'
        }
      ]
    };
  },
  watch: {
    info(value) {
      console.log(456, value);
    }
  },
  computed: {
    priceValue() {
      return '$' + this.price + '元';
    },
    fullName() {
      return (this as any).obj.firstName + (this as any).obj.lastName + (this as any).priceValue;
    },
    // computed传参
    bookName() {
      return function(item: any, index: number) {
        return index + ':' + item.book;
      };
    },
    // get,set
    grade: {
      get() {
        return '年级1';
      },
      set(val) {
        console.log(val);
      }
    },
    info() {
      return (this as any).base[0].info;
    }
  },
  mounted() {
    console.log(55);
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.computed-demo {
  margin-top: 20px;
  padding: 0 20px;
  input {
    width: 150px;
    margin-left: 30px;
    padding-left: 6px;
    border: none;
    border: 1px solid#999;
    border-radius: 5px;
    line-height: 40px;
    outline: none;
  }
}
</style>
