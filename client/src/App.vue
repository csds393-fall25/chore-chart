<template>
  <v-app>
    <v-container fluid class="h-100 pa-0" v-if="store.loggedIn">
      <v-row class="pa-0 height-screen ma-0 w-100">
        <v-col cols="12" md="3" lg="2" class="pa-0 ma-0 d-print-none fill-height">
          <NavigationBar/>
        </v-col>
        <v-col class="pa-0 ma-0 h-100" cols="12" md="9" lg="10">
          <div class="fill-height">
            <v-sheet color="navy" class="fill-height overflow-auto">
              <Suspense>
                <router-view></router-view>
                <template #fallback><Loading /></template>
              </Suspense>
            </v-sheet>
          </div>
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

  const store = useAppStore();
</script>
<style>
.height-screen {
  height: 100dvh;
}
</style>