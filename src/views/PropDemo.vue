<template>
  <div class="list-demo">
    <base-prop :counter="counter" :obj="obj"></base-prop>
  </div>
</template>

<script lang="ts">
import BaseProp from '@/components/BaseProp.vue';
export default {
  name: 'ListDemo',
  components: {
    BaseProp
  },
  data() {
    return {
      message: 'text',
      counter: 5,
      obj: {
        name: '李白',
        age: 28
      }
    };
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>
