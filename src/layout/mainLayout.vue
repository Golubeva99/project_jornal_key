<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary=""
        
      >
        <v-list dense>
          <v-list-item 
          v-for="link of links"
          :key="link.title"
          :to="link.url">
            <v-list-item-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        color="#18224B"
        dark
      >
        <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>Журнал</v-toolbar-title>
        <v-spacer></v-spacer>
            <v-btn icon
            href="https://www.uni-dubna.ru/">
            <div class="img">
              <v-img
              :src="require('../assets/logo.png')"
              class="my-3"
              contain
              height="60"
              >
              </v-img>
            </div>
            </v-btn>
      </v-app-bar>
  
      <v-content>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
          </v-row>
        </v-container>
      </v-content>
      <v-footer app
      color="#18224B">
        <span class="white--text">&copy; 2020 Государственный университет «Дубна»</span>
      </v-footer>
 </div>
</template>

<script>
export default {
name:'home',
   data(){
     return {
       drawer:false,
       links:[
         {title:'Войти', icon:'mdi-account', url: '/login'},
         {title:'Журнал', icon:'', url: '/journal'},
         {title:'Отчет', icon:'', url: '/reports'},
       ]
     }
   }
}
</script>
<style>
      .img{
      filter: invert(1);
      margin-right: 40px;
      }
</style>