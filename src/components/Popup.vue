<template>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
            Add a New Project
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pen"></v-textarea>
            
            
            <v-menu max-width="290">
                <template v-slot:activator="{ on }">
                    <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            
            <div class="text-center">
              <v-btn flat color="success" class="mx-1" @click="submit()">Add project</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format'

export default {
    name: 'App',
    data(){
        return{
            title:'',
            content: '',
            due: null,
        }
    },
    methods:{
      submit(){
        return console.log(this.title, this.content)
      },
    },
    computed: {
    formattedDate() {
      return this.due ? format(this.due,"Do MMMM YYYY") : ''
    }
  }
}
</script>