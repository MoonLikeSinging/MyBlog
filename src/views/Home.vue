<template>
  <div class="home">
    <Banner></Banner>
    <PoetryExampleInHome></PoetryExampleInHome>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import PoetryExampleInHome from '@/components/PoetryExampleInHome.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    PoetryExampleInHome,
    Footer,
  }
}
</script>
