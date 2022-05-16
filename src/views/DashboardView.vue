<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="ma-1 mb-4">
        <v-btn small text color="grey" @click="sortBy('title')">
          <v-icon left small> mdi-folder </v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
        <v-btn small text color="grey" @click="sortBy('person')">
          <v-icon left small> mdi-account </v-icon>
          <span class="caption text-lowercase">By person</span>
        </v-btn>
        <v-btn small text color="grey" @click="sortBy('status')">
          <v-icon left small> mdi-check-all </v-icon>
          <span class="caption text-lowercase">By status</span>
        </v-btn>
      </v-row >
      <v-card class="pa-4 ma-1" v-for="project in projects" :key="project.title">
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-col xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col xs2 sm4 md2>
            <div class="text-right">
              <v-chip :class="`${project.status} white--text caption my-2`" small>{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <!-- <v-container class="my-5">
      <v-row row>
        <v-col xs12 md6>
          <v-btn outline block class="primary">1</v-btn>
        </v-col>
        <v-col xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-col>
        <v-col xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-col>
        <v-col xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
  
</template>
<script>
  export default {
    data(){
      return{
        projects: [
          { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
      }
    },
  methods:{
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1)
      }
    }
  }
</script>
<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left: 4px solid tomato ;
}
.v-chip.v-chip--no-color.theme--light.complete{
  background: #3cd1c2;
}
.v-chip.v-chip--no-color.theme--light.ongoing{
  background: orange;
}
.v-chip.v-chip--no-color.theme--light.overdue{
  background:  tomato ;
}
</style>