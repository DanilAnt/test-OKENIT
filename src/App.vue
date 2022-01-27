<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss">
*{
font-family: Avenir, Helvetica, Arial, sans-serif;
ul {
  list-style-type: none;
  padding: 0;
}
}
#app {
   max-width: 1200px;
    margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
