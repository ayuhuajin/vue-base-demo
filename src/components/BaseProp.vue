<template>
  <div class="base-prop">{{ count }}</div>
</template>

<script lang="ts">
export default {
  name: 'BaseProp',
  props: {
    counter: {
      type: Number
    },
    obj: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      count: (this as any).counter,
      items: (this as any).obj
    };
  },
  watch: {},
  mounted() {
    (this as any).count = (this as any).count + 5;
    console.log((this as any).counter);
    console.log((this as any).obj);

    (this as any).items.name = 'wsinghai';
    console.log((this as any).items);
    console.log((this as any).obj);
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
