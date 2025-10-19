<template>
  <v-app>
    <v-container fluid class="fill-height pa-0" v-if="store.loggedIn">
      <v-row class="pa-0 fill-height ml-0">
        <v-col cols="3" lg="2" class="pa-0 ma-0">
          <NavigationBar/>
        </v-col>
        <v-col class="pa-0">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="fill-height pa-0 w-100" v-else>
      <Login />
    </v-container>
  </v-app>
</template>

<script setup>
  import NavigationBar from "./components/NavigationBar.vue"
  import {useAppStore} from "./stores/app.js";
  import Login from "./components/Login.vue";
import Profile from "./components/Profile.vue";

  const store = useAppStore();
</script>
<style>
</style>