<template>
    <v-container>
        <v-row>
            <v-col cols="6" v-for="item in tables" :key="item.header">
                <v-simple-table>
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left"><p class="subtitle-1">{{item.header}}</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="name in item.names" 
                            :key="name">
                            <td><p class="subtitle-1">{{ name }}</p></td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
            </v-col>
            <v-col cols="12" offset-md="4">
                <div class="text-center">
                <v-dialog
                v-model="dialog"
                width="600"
                >
                <template v-slot:activator="{ on }">
                    <v-btn
                    color= '#A1C758'
                    dark
                    v-on="on"
                    >
                    Добавить
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                    >
                    Разрешение
                    </v-card-title>

                    <v-card-text>
                        <v-form
                        v-model="valid" 
                        ref="form" 
                        validation>
                        <v-container>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                single-line
                                label="ФИО"
                                outlined
                                v-model="name"
                                :rules="nameRules"
                                >
                                </v-text-field>
                            </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field                                   
                                    single-line
                                    label="№ Ключа"
                                    outlined
                                    v-model="key"
                                    :rules="keyRules"
                                    ></v-text-field>
                                </v-col>
                        </v-row>
                    </v-container>
                    </v-form>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="onSubmit"
                        :disabled="!valid"
                    >
                        Добавить
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
                 </div>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'solve',
    data(){
        return{
          name:'',
          key:'',
          valid:false,
            tables: [
                {
                    header:'ФИО',
                    names:['', '', ''],

                },
                {
                    header:'№ Ключа',
                    names:['1-120', '1-122', '1-118'],

                },
                

                    ],
            keyRules:[
            v => !!v || 'Введите данные'
            ],
            nameRules:[
                v => !!v || 'Введите данные'
            ],
            
        }
    },
    methods:{ 
            onSubmit(){
              if (this.$refs.form.validate()){
                const keys = {
                name:this.name,
                key:this.key
                }
                console.log(keys)
              }
            }
          },
          mounted(){
              axios
              .get('http://localhost/solve')
              .then(response => {            
              this.tables=response.data
              console.log(response.data)

          })
                .catch(error => {
                console.log(error)
            })

               /*/ .post('http://localhost/SolveUser',{
                  name: 'name',
                  key: 'key'
                })
                .then(function (response) {
                console.log(response);
                })*/
          }
}
</script>