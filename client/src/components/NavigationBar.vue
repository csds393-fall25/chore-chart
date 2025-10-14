<template>
  <v-container class="fill-height">
    <v-navigation-drawer
      permanent
      color="primary-lighten-1"
      class = "text-center"
    >
      <template v-slot:prepend>
        <v-list-item>
          <v-avatar size = "large" color="primary"></v-avatar>
          <p class = "text-h4">Jane Doe</p>
          <p class = "text-subtitle-2">250 pts</p>
        </v-list-item>
      </template>
      <v-list bg-color="primary">
        <v-list-item title = "Chores" value = "chores"></v-list-item>
        <v-list-item title = "House" value = "house"></v-list-item>
        <v-list-item title = "Create" value = "create"></v-list-item>
        <v-list-item title = "Random" value = "random">
        </v-list-item>
        <v-list-item title = "Print" value = "print"></v-list-item>
        <v-list-item title = "Bulletin Board" value = "bulletin"></v-list-item>
        <v-list-item title = "Help" value = "help"></v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list bg-color="primary">
          <v-list-item title = "Leaderboard" value = "leaderboard"></v-list-item>
          <v-list-item title = "Store" value = "store"></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script setup>
  
</script>
<style scoped>
</style>