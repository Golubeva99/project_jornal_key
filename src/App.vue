<template>
  <v-app id="inspire"> 
    <home></home>
      <v-content>
          <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import Home from './views/home.vue'
export default {
 
name:'App',
   data(){
     return {
     }
   },
   components:{
     Home
   }
}
</script>
