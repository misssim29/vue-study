<template>
  <div>
    <user-profile :info="Info">
      <template #username>
        <router-link :to="'/user/'+Info.user"><h2>{{ Info.user }}</h2></router-link>
      </template>
      <template #time><span>{{ 'created ' + Info.time_ago }}</span></template>
    </user-profile>
    <p>title : {{ Info.title }}</p>
    <div v-html="Info.content"></div>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components: {
    UserProfile
  },
  computed:{
    Info(){
      return this.$store.state.items;
    }
  },
  created(){
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM',userId);
  }
}
</script>

<style scoped>
  .flex{display: flex; align-items: center;}
  .user i{margin-right:10px;}
</style>