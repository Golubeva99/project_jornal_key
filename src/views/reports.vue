<template>
<div>
       <v-container>
            <div class="table">
                <v-tabs v-model="tab">
                    <v-tab><p class="subtitle-1">Смены</p></v-tab>
                    <v-tab><p class="subtitle-1">Ключи</p></v-tab>
                    <v-tab><p class="subtitle-1">Разрешения</p></v-tab>
                    <v-tab><p class="subtitle-1">Журналы</p></v-tab>
                </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <change></change>
                </v-tab-item>
                <v-tab-item>
                    <keys></keys>
                </v-tab-item>
                <v-tab-item>
                    <solve></solve>
                </v-tab-item>
                <v-tab-item>
                    <journal_report></journal_report>
                </v-tab-item>
                
            </v-tabs-items>
            </div>
    </v-container>
</div>
</template>
<script>
import keys from '../components/keys'
import change from '../components/change'
import solve from '../components/solve'
import journal_report from '../components/journal_report'
export default {
    name: 'reports', 
    components: {
      keys, change, solve, journal_report
        },
    data(){
        return{
            tab:null
        }
    }
}
</script>

<style>
.table {
    padding-top: 20px;
}

</style>