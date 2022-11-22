<template>
  <div>
    <h1>{{ this.$store.getters.getUserInfo }}</h1>
    <h1>{{ this.$store.state.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style scoped>

</style>
