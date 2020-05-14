<template>
  <div class="container-fluid">
            <div v-if="responseBody" class="row">
                <div class="col-3 col-sm col-md-3">
                    <router-link to="/">
                        <img  class="logo" src="../assets/img/logo.png">
                    </router-link>
                </div>
                <div  class="col-5 col-sm col-md-3" style="margin-top: 5px">
                    <span class="header-fontsize">
                        <i class="iconfont  icon-zhuye"></i>
                        {{responseBody.blogDesc}}
                    </span>
                </div>
                <div class="col-3 col-sm col-md-3 col-4" style="margin-top: 5px">
                    <span class="header-fontsize">
                        <i class="iconfont icon-yonghu"></i>
                        {{responseBody.nickName}}
                    </span>
                </div>
            </div>
    </div>
</template>

<script>
// import axios from 'axios'
import {getClientProfileById} from '@/api/clientProfile'

export default {
  name: 'Header',
  components:{},
  props:{},
  data(){
    return {
        responseBody : null,
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
    getClientProfileById(100000)
      .then(response =>(this.responseBody =response.data))
      .catch(function (error){
          console.error();      
      });
  }
}
</script>
<style lang="scss">
@import '../styles/header.scss';
</style>