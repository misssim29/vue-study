<template>
  <div>
    <p>id : {{ askuserInfo.id }}</p>
    <p>title : {{ askuserInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed:{
    askuserInfo(){
      return this.$store.state.askuser;
    }
  },
  created(){
    const userName = this.$route.params.id;
    console.log(userName);
    this.$store.dispatch('FETCH_ASKUSER',userName);
  }
}
</script>

<style>

</style>