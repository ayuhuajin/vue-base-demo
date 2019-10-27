<template>
  <div class="vue-cycle">
    45
  </div>
</template>

<script lang="ts">
export default {
  name: 'VueCycle',
  data() {
    return { msg: 'hello' as any };
  },
  created: function() {
    // this.msg += '!!!';
    console.log((this as any).msg);
  }
};
</script>
