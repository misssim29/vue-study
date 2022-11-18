<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo()">Clear All</span>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo(){
      this.$emit('removeAll');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer{
    width:8.5rem;
    height:50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 5px;
    margin:10px auto;
  }
  .clearAllBtn{
    color:#e20303;
    display: block;
  }
</style>