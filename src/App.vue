<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link class="col-md-4 col-4" to="/">首页</router-link> |
      <router-link class="col-md-4 col-4" to="/about">诗词</router-link> |
      <router-link class="col-md-4 col-4" to="/about">博客</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components:{
    Header,
  }
  
}

var windownWidth = window.innerWidth;



</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a1b1b;
}

#nav {
  
  padding: 50px;

  a {
    color: #00000080;
    font-family: STXingkai; 
    text-decoration:none;

    &.router-link-exact-active {
      color: #000000e6;
    };


    @media screen and (max-width: 576px){
      font-size: 30px;
      padding: 5px;
    }

    @media screen and (min-width: 576px){
      font-size: 36px;
      padding: 5px;
    }
    @media screen and (min-width: 768px){
      font-size: 36px;
      padding: 50px;
    }

    @media screen and (min-width: 992px){
      font-size: 42px;
      padding: 75px;
    }

    @media screen and (min-width: 1200px){
      font-size: 48px;
      padding: 100px;
    }
  }
}


</style>
