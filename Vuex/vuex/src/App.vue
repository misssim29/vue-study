<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    console.log("");
    console.log("[MainComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");    
    console.log("이름 : " + this.$store.state.name);
    console.log("get 정보 : " + this.$store.getters.getUserInfo);
    console.log("");

    // [사용자 정보 set 지정 실시]
    this.$store.commit("setUserInfo", "TWOK");

    console.log("");
    console.log("[MainComponent] : [data] : [update]");
    console.log("get 정보 : " + this.$store.getters.getUserInfo);
    console.log("");

    return {
      data: "MAIN" // [데이터 정의]
    }    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
