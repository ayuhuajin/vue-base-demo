<template>
  <div class="vue-cycle">
    姓：<input type="text" placeholder="firstName" v-model="firstName" /><br />
    名：<input type="text" placeholder="lastName" v-model="lastName" /><br />
    姓名1(单向):<input type="text" placeholder="FullName1" v-model="fullName1" /><br />
    姓名2(双向):<input type="text" placeholder="FullName2" v-model="fullName2" /><br />
  </div>
</template>

<script lang="ts">
export default {
  name: 'VueCycle',
  data() {
    return { firstName: 'A', lastName: 'B', fullName2: 'A B' };
  },
  computed: {
    //什么时候执行：初始化显示/ 相关的data属性发生变化
    // fullName1() {
    //   //计算属性中的get方法，方法的返回值就是属性值
    //   return (this as any).firstName + ' ' + (this as any).lastName;
    // },
    fullName1: {
      //计算属性中的get方法，方法的返回值就是属性值
      get() {
        console.log(41);
        return (this as any).firstName + ' ' + (this as any).lastName;
      },
      set(val: any) {
        console.log(val);
        const names = val.split(' ');
        console.log(names);
        (this as any).firstName = names[0];
        (this as any).lastName = names[1];
      }
    },

    fullName3: {
      get() {
        //回调函数 当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
        return (this as any).firstName + ' ' + (this as any).lastName;
      },
      set(val: any) {
        //监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
        //val就是fullName3的最新属性值
        console.log(val);
        const names = val.split(' ');
        console.log(names);
        (this as any).firstName = names[0];
        (this as any).lastName = names[1];
      }
    }
  }
};
</script>
