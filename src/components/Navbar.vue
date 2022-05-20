<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="3000" bottom color="success">
            <span>Awesome! You click</span>
            <v-btn flat text color="white" @click="snackbar = false">close</v-btn>
        </v-snackbar>
        <v-toolbar flat app>
            <v-app-bar-nav-icon app class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Thanh</span>
                <span>Dong</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- drop down menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn flat text color="grey" v-bind="attrs" v-on="on">
                        Menu
                        <v-icon class="pl-1">mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link" :to="link.route">
                    <v-list-item-title >{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <!-- /drop down menu -->
            <v-btn flat text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="success">
            <v-container>
                <v-row no-gutters class="mt-5">
                    <v-col cols="12" align="center">
                        <v-avatar size="100">
                            <v-img src="/avatar-1.jpg"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="12" align="center">
                        <p class="white--text subheading mt-1">The Net Ninja</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" align="center">
                        <Popup @projectAdded="snackbar= true"/>
                    </v-col>
                </v-row>
            </v-container>
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
import Popup from './Popup'

export default {
    components: { Popup },
    name: 'App',
    data(){
        return{
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                { icon: 'mdi-account', text: 'Team', route: '/team' },
            ],
            snackbar: false
        }
    }
}
</script>