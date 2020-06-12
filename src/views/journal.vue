<template>
    <div>
        <v-container>
        <v-tabs v-model="tab">
            <v-tab>Журнал</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
        <v-tab-item>
            <journal_report></journal_report>
        </v-tab-item>
            
        </v-tabs-items>
    </v-container>
    </div>
</template>

<script>
import journal_report from '../components/journal_report'
export default {
    name: 'journal', 
    components: {
    journal_report
    },
    data(){
        return{
            tab:null
        }
    }
}
</script>