<template>
    <v-container>
        <v-row>
            <v-col cols="3" v-for="item in tables" 
            :key="item.header">
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
             <!-- <v-col cols="8">
                <div class="text-center">
                        <v-dialog
                            v-model="dialog"
                            width="600"
                            > -->
                            <!-- <template v-slot:activator="{ on }">
                                <v-btn v-btn rounded color="indigo" dark
                                v-on="on"
                                >
                                Запрос
                                </v-btn>
                            </template> -->

                            <!-- <v-card>
                                <v-card-title
                                class="headline grey lighten-2"
                                primary-title
                                >
                                Запрос
                                </v-card-title>

                                <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                        <h4>
                                            ФИО
                                        </h4>
                                            <v-text-field
                                            label="ФИО"
                                            outlined
                                            ></v-text-field>
                                        </v-col>
                                            <v-col cols="12" sm="6">
                                            <h4>
                                                Разрешения
                                            </h4>
                                                <v-text-field
                                                label="Разрешения"
                                                single-line
                                                outlined
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                            <h4>
                                                Запрос
                                            </h4>
                                                <v-text-field
                                                label="Запрос"
                                                single-line
                                                outlined
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                            <h4>
                                                Статус
                                            </h4>
                                                <v-text-field
                                                label="Статус"
                                                single-line
                                                outlined
                                                ></v-text-field>
                                            </v-col>
                                    </v-row>
                                </v-container>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="green"
                                    text
                                    @click="dialog = false"
                                >
                                    Подтвердить
                                </v-btn>
                                <v-btn
                                    color="red"
                                    text
                                    @click="dialog = false"
                                >
                                    Запретить
                                </v-btn>
                                </v-card-actions>
                            </v-card> -->
                            <!-- </v-dialog>
                </div>
            </v-col> -->
                     <v-col cols="12" offset-md="6">
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
                                Закончить смену
                                </v-btn>
                            </template>

                            <v-card>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="green"
                                        text
                                        @click="dialog = false"
                                        >
                                            Подтвердить
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
    name: 'jornal_shift',
    data(){
        return{
            tables: [
                {
                    header:'Время',
                    names:['', '', ''],

                },
                {
                    header:'№ Ключа',
                    names:['1-120', '1-122', '1-118'],

                },
                {
                    header:'ФИО взял',
                    names:['Антонов Н.С.', 'Никонов С.М', 'Иванов М.В.'],

                },
                {
                    header:'ФИО сдал',
                    names:[ 'Антонов Н.С.', 'Никонов С.М', 'Иванов М.В.'],

                }

            ]
        }
    },
    mounted(){
        axios
        .get('http://localhost/journal')
        .then(response => {            
            this.tables=response.data
            console.log(response.data)
    })}
}
</script>