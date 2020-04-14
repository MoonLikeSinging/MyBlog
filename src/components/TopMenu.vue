<template>
  <div class="container-fluid" style="font-size: 12px ; height: 37px; color: #666; background-color: #eeeeee">
        <div class="container">
            <div class="row">
                <div></div>
                <div class="col-md-auto col-8" style="margin-top: 5px">
                    <span>
                        <i class="iconfont  icon-zhuye"></i>
                        {{responseBody.blogDesc}}
                    </span>
                </div>
                <div class="col-md-6 d-none d-sm-block"></div>
                <div class="col-md-auto col-4" style="margin-top: 5px">
                    <div>
                    <span>
                        <i class="iconfont icon-yonghu"></i>
                        {{responseBody.nickName}}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TopMenu',
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
</style>