<template>
  <div class="container-fluid">
            <div v-if="responseBody" class="row">
                <div class="col-sm-4 col-md-3 d-none d-sm-block">
                    <img  class="logo" src="../assets/img/logo.png">
                </div>
                <div  class="col-sm-4 col-md-auto col-7" style="margin-top: 5px">
                    <span>
                        <i class="iconfont  icon-zhuye"></i>
                        {{responseBody.blogDesc}}
                    </span>
                </div>
                <div class="col-md-5 d-none d-md-block"></div>
                <div class="col-sm-4 col-md-auto col-4" style="margin-top: 5px">
                    <span>
                        <i class="iconfont icon-yonghu"></i>
                        {{responseBody.nickName}}
                    </span>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  components:{},
  props:{},
  data(){
    return {
        responseBody : null
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
    axios
      .get('http://localhost:9000/client',{
          params:{
              clientId:100000
          }
      })
      .then(response =>(this.responseBody =response.data))
      .catch(function (error){
          console.error();
          
      });

  }
}
</script>
<style>
.logo {
    height: 36px;
    float: left;
    margin-left: 66px;
}

.container-fluid .row{
    font-size: 12px ; 
    height: 37px;
    color: #666; 
    background-color: #eeeeee
}
</style>