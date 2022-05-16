<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon app class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Thanh</span>
                <span>Dong</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="success">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                    <v-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    name: 'App',
    data(){
        return{
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                { icon: 'mdi-account', text: 'Team', route: '/team' },
            ],
        }
    }
}
</script>