<template>
  <div class="home">
    <Banner></Banner>
    <PoetryExampleInHome></PoetryExampleInHome>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import PoetryExampleInHome from '@/components/PoetryExampleInHome.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    PoetryExampleInHome,
  }
}
</script>
