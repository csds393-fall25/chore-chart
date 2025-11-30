<template>
  <v-sheet class="fill-height text-center d-flex flex-column" color="primary-lighten-1 pa-0 ma-0" width="100%">
    <v-card to="/profile" color="primary-lighten-1" >
      <v-container class="text-center" width="100%">
        <v-row width="100%" class="mb-0 mr-0 ml-0">
          <v-col cols="6" offset="3" class="pa-0 position-static">
            <!-- <v-avatar size = "large" color="primary"></v-avatar> -->
            <Avatar :userId="store.user.id"/>
          </v-col>
        </v-row>
        <v-row width="100%" class="mr-0 ml-0 mt-0 position-relative">
          <v-col cols="12" class="pa-0">
            <p class = "text-h4">{{ store.user.name }}</p>
          </v-col>
        </v-row>
        <v-row width="100%" class="mr-0 ml-0 position-relative">
          <v-col cols="12" class="pt-0">
            <p class = "text-subtitle-2">{{ store.user.currentPoints }} pts</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-container class="primary-lighten-1 text-center pa-0" width="100%">
      <v-list bg-color="primary" width="100%">
        <v-list-item title = "Chores" value = "chores" to="/chores"></v-list-item>
        <v-list-item title = "House" value = "house" to="/house"></v-list-item>
        <v-list-item title = "Create" value = "create" to="/chore/create"></v-list-item>
        <v-list-item v-if="store.user.role == 'leader'" title = "Random" value = "random" to="/random">
        </v-list-item>
        <v-list-item title = "Print" value = "print" to="/print"></v-list-item>
        <v-list-item title = "Help" value = "help" to="/help"></v-list-item>
      </v-list>
    </v-container>
    <v-container class="primary-lighten-1 text-center pa-0 mt-auto" width="100%">
      <v-list bg-color="primary" width="100%">
        <v-list-item title = "Leaderboard" value = "leaderboard" to="/leaderboard"></v-list-item>
        <v-list-item title = "Store" value = "store" to="/store"></v-list-item>
        <v-list-item title = "Bulletin" value = "bulletin" to="/bulletin"></v-list-item>
      </v-list>
    </v-container>
  </v-sheet>
</template>

<script setup>
  import { useAppStore } from "../stores/app.js";
  import Avatar from "./Avatar.vue";
  const store = useAppStore();


</script>
<style scoped>
  v-navigation-drawer {
    width: 100%;
  }
</style>