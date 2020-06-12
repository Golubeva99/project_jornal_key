<template>
    <div>
       <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-20">
              <v-toolbar
                color="#18224B"
                dark
                flat
              >
                <v-toolbar-title>Авторизация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" validation> 
                  <v-text-field
                    label="Логин"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="login"
                    :rules="loginRules"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Пароль"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                    :counter="6"
                    :rules="passRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#18224B" 
                href="http://localhost:8080/journal"
                dark=""
                @click="onSubmit"
                :disabled="!valid"
                >
                Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
<script>
export default {
    data (){
        return {
            login:'',
            password:'',
            valid:false,
            loginRules:[
                 v => !!v || 'Введите данные'
            ],
            passRules:[
                 v => !!v || 'Введите данные',
                 v => (v && v.length >=6) || 'Введите правильный пароль'
            ]
        }
    },
    methods:{
        onSubmit(){
        if (this.$refs.form.validate()){
        const user = {
        login:this.login,
        password:this.password
        }
        console.log(user)
        }
    }
}
}
</script>