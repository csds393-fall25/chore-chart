<template>
  <v-sheet class="fill-height w-100 " color="primary-darken-1">
    <v-row>
      <v-col cols="4" class="ma-4">
          <Avatar :userId="store.user.id"/>
      </v-col>
    </v-row>
    <v-form class="ma-4">
      <v-text-field style="width: 75%; " label="Name" v-model="name"></v-text-field>
      <v-text-field :disabled="true" style="width: 75%" v-model="username" label="Email"></v-text-field>
      Estimated Time To Complete Chores (minutes)
      <v-number-input style="width: 75%" v-model="estimatedTime" :min='0' control-variant="split"></v-number-input>
      Maximum Difficulty
      <v-number-input style="width: 75%" v-model="maxDifficulty" :min='1' :max='10'
        control-variant="split"></v-number-input>
      <v-btn class="elevation-0" style="background-color: #51d299 ; font-size: small; "
        @click=" updateProfile()">Update</v-btn>
      <v-btn class="mx-auto my-auto elevation-0 ml-4" color="error" @click="showDialog = true"
        style=" font-size: small; "> Delete</v-btn>
      <v-dialog v-model="showDialog" width="auto">
        <v-card title="Delete Profile?" max-width="400">
          <v-card-text>Are you sure you want to delete your profile? This action cannot be reversed.</v-card-text>
          <v-card-actions>
            <v-btn @click="deleteProfile(store.user.id)" text="delete">
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-form>
  </v-sheet>
</template>
<script setup>
import { ref } from 'vue';
import { useAppStore } from "../stores/app.js";
import FetchService from '@/FetchService';
import Avatar from './Avatar.vue'
const store = useAppStore();
const username = ref(store.user.email);
const name = ref(store.user.name)
const maxDifficulty = ref(store.user.difficulty)
const estimatedTime = ref(store.user.maxChoreTime)
const showDialog = ref(false)

async function updateProfile() {
 
  const result = await FetchService.updateUser(store.user.id, {
    name: name.value,
    email: username.value,
    difficulty: maxDifficulty.value,
    maxChoreTime: estimatedTime.value
  })

  store.user.name = name.value
  store.user.email = username.value
  store.user.difficulty = maxDifficulty.value
  store.user.maxChoreTime = estimatedTime.value
  return true;

}

function deleteProfile(id) {
  const result = FetchService.deleteUser(id)
  showDialog.value = false
  store.loggedIn = false
  return result;
}
</script>
