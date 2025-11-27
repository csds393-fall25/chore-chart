<template>
  <v-app>
    <v-container fluid class="fill-height pa-0" v-if="store.loggedIn">
      <v-row class="pa-0 fill-height ma-0 w-100">
        <v-col cols="12" md="3" lg="2" class="pa-0 ma-0 d-print-none ">
          <NavigationBar/>
        </v-col>
        <v-col class="pa-0 ma-0 fill-height" cols="12" md="9" lg="10">
          <v-main class="fill-height">
            <Suspense>
              <router-view></router-view>
              <template #fallback><Loading /></template>
            </Suspense>
          </v-main>
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
  import Loading from './components/Loading.vue'
  import { useDisplay } from 'vuetify';

  const store = useAppStore();
  const { xsAndDown } = useDisplay();
  
</script>
<style>
</style>