<template>
  <div>
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';


export default {
  components :{
    ToolBar, Spinner
  },
  data(){
    return{
      loadingStatus : this.$store.state.loading,
    }
  }
}
</script>

<style>
body{padding:0; margin:0}
.page-enter-active, .page-leave-active{
  transition: opacity 0.5s ease;
}
.page-enter-from , .page-leave-to{
  opacity:0;
}
a{
  text-decoration: none;
}
a.router-link-exact-active{
  text-decoration: underline;
}
</style>
