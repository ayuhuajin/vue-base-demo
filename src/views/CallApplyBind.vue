<template>
  <div class="demo">
    1231
  </div>
</template>

<script lang="ts">
export default {
  name: 'CallApplyBind',
  data() {
    return {};
  },
  mounted() {
    (this as any).myPush();
  },
  methods: {
    myPush() {
      Array.prototype.push = function(...items) {
        console.log('kk', ...items);
        let O = Object(this);
        console.log(O);

        let len = this.length >>> 0;
        let argCount = items.length >>> 0;
        // 2 ** 53 - 1 为JS能表示的最大正整数
        if (len + argCount > 2 ** 53 - 1) {
          throw new TypeError('The number of array is over the max value restricted!');
        }
        for (let i = 0; i < argCount; i++) {
          O[len + i] = items[i];
        }
        let newLength = len + argCount;
        O.length = newLength;
        return newLength;
      };
      let a = [];
      a.push(456);
      // console.log(a);
    }
    // myApply() {
    //   Function.prototype.myApply = function(context, arg) {
    //     const fn = Symbol('临时属性');

    //     console.log(this);
    //     context[fn] = this;
    //     console.log(context);
    //     console.log(context[fn]);
    //     context[fn](...arg);
    //     delete context[fn];
    //   };
    //   const obj2 = {
    //     a: 1,
    //     name: '444'
    //   };
    //   function test(a, b, c) {
    //     console.log(this.name);

    //     console.log(a, b, c);
    //   }
    //   test.myApply(obj2, [2, 3, 4]);
    // }
  }
};
</script>

<style lang="scss" scoped></style>
