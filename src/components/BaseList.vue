<template>
  <div class="base-list">
    <ul class="list">
      <li v-for="(item, index) in list" :key="index">
        <div>
          <slot :user="item"></slot>
          <!-- <section><span>id</span><input type="text" readonly :value="item.id" /></section>
          <section><span>名称</span><input type="text" :value="item.name" /></section> -->
          <span @click="handleEdit" class="edit">编辑</span>
          <span @click="handleDelete" class="delete">删除</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseList',
  props: {
    list: {
      require: true,
      type: Array
    }
  },
  components: {},
  data() {
    return {
      message: 'text'
    };
  },
  watch: {},
  mounted() {},
  methods: {
    handleEdit() {
      console.log('编辑');
    },
    handleDelete() {
      console.log('删除');
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  section {
    display: inline-block;
  }
  input {
    width: 100px;
    margin-right: 20px;
    padding-left: 6px;
    border: none;
    border: 1px solid#999;
    border-radius: 5px;
    line-height: 30px;
    outline: none;
  }
  .edit {
    color: #3289ff;
    cursor: pointer;
  }
  .delete {
    color: #ff3817;
    cursor: pointer;
  }
}
</style>
