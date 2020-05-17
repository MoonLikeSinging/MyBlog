<template>
  <div>
    <div class="container-fluid">
        <div class="row" v-lazy:background-image = footerBgImg style="background-repeat: no-repeat; background-size: 100% 100%; height: auto">
            <div class="offset-1"></div>
            <div class="col-lg-7 col-7">
                <img v-lazy = footerDesc  class="img-fluid"/>
            </div>
            <div class="col-lg-3 col-3">
                <img v-lazy = qrCode  class="img-fluid" style="margin-top: 1%">
            </div>

        </div>
    </div>       
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components:{},
  props:{},
  data(){
    return {
        footerBgImg : require('../assets/img/footer-bg.png'),
        footerDesc : require('../assets/img/footer.png'),
        qrCode : require('../assets/img/QRcode.png'),
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
</style>