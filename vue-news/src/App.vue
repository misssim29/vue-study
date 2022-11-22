<template>
  <div>
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components :{
    'tool-bar':ToolBar
  }
}
</script>

<style>

</style>
