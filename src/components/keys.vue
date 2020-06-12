<template>
    <v-container>
        <v-row>
            <v-col cols="3" 
            v-for="item in tables" 
            :key="item.header">
                <v-simple-table>
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left"><p class="subtitle-1">{{item.header}}</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr 
                            v-for="name in this.$store.state.keys" 
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
      width="600"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color= '#A1C758'
          dark
          v-on="on"
        >
          Новый ключ
        </v-btn>
      </template>

                      <v-card>
                        <v-card-title
                          class="headline grey lighten-2"
                          primary-title
                        >
                          Новый ключ
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
                                    label="Наименование"
                                    single-line
                                    outlined
                                    v-model="name"
                                    :rules="nameRules"
                                    ></v-text-field>
                                </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                        label="Номер ключа"
                                        single-line
                                        outlined
                                        v-model="num_key"
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
    name: 'keys',
    data(){
        return{
          name:'',
          num_key:'',
          valid:false,
          tables: [
               

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
                  num:this.num_key
                }
                console.log(keys)
              }
            }
          },
          mounted(){
            axios
            .get('http://localhost/key')
            .then(response => {            
            this.tables=response.data
            console.log(response.data)
          })
          }
  }
</script>