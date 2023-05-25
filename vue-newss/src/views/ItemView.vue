<template>
  <div>
    <div class="flex user">
      <i class="fa-regular fa-user"></i>
      <p>id : {{ Info.id }}</p>
    </div>
    <router-link :to="'/user/'+Info.user">{{ Info.user }}</router-link>
    <p>title : {{ Info.title }}</p>
    <div v-html="Info.content"></div>
  </div>
</template>

<script>
export default {
  computed:{
    Info(){
      return this.$store.state.items;
    }
  },
  created(){
    const userId = this.$route.query.id;
    this.$store.dispatch('FETCH_ITEM',userId);
  }
}
</script>

<style scoped>
  .flex{display: flex; align-items: center;}
  .user i{margin-right:10px;}
</style>