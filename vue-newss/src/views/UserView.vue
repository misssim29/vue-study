<template>
  <div>
    <user-profile :info="user">
      <template #username><h2>{{ user.id }}</h2></template>
      <template #time><span>{{ 'Joined ' + user.created }}</span></template>
      <template #karma><span>{{ user.karma }}</span></template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapState } from 'vuex';
export default {
  components:{
    UserProfile
  },
    computed:{
    ...mapState({
        user : 'user'
    })
    },
    created(){
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER',userName);
    }
}
</script>