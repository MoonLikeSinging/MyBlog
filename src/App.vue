<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link class="col-md-4 col-4" to="/">首页</router-link>
      <router-link class="col-md-4 col-4" to="/poetry">诗词</router-link>
      <router-link class="col-md-4 col-4" to="/blog">博客</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components:{
    Header,
  },
}
</script>
<style lang="scss">
@import './styles/app.scss';

</style>
