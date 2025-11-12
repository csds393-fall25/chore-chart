<template>
  <v-sheet class="fill-height w-100 " color="primary-darken-1">
    <v-row>
      <v-col cols="4" class="ma-4">
          <Avatar :userId="store.user.id"/>
      </v-col>
    </v-row>
    <v-form class="ma-4">
      <v-text-field data-testid="name"  v-if="isUpdate" :error-messages="errorMessages.name" style="width: 75%; " label="Name" v-model="name"></v-text-field>
      <p v-if="!isUpdate">Name: {{name}}</p>
      <p v-if="!isUpdate"> Points: {{store.user.totalPoints}}</p>
      <v-text-field data-testid="email" v-if="isUpdate" :error-messages="errorMessages.email" :disabled="true" style="width: 75%" v-model="username" label="Email"></v-text-field>
      <!-- <v-text-field :error-messages="errorMessages.password" style="width: 75%; " label="password" v-model="password"></v-text-field>
      <v-text-field :error-messages="errorMessages.repeatedPassword" style="width: 75%" v-model="repeatedPassword" label="verify password"></v-text-field> -->
      <p v-if="!isUpdate">Email: {{username}}</p>
      <p  v-if="!isUpdate"> Estimated Time To Complete Chores (minutes): {{estimatedTime}}</p>
      <p v-if="isUpdate">Estimated Time To Complete Chores (minutes)</p>
      <v-number-input data-testid="estTime" v-if="isUpdate" :disabled="!isUpdate" :error-messages="errorMessages.estTime" style="width: 75%" v-model="estimatedTime" :min='0' control-variant="split"></v-number-input>
        <p v-if="!isUpdate">Maximum Difficulty: {{maxDifficulty}}</p>
      <p v-if="isUpdate">Maximum Difficulty</p>
      <v-number-input v-if="isUpdate" :disabled="!isUpdate" :error-messages="errorMessages.maxDiff" style="width: 75%" v-model="maxDifficulty" :min='1' :max='10'
        control-variant="split"></v-number-input>
      <v-btn id="update" class="elevation-0" style="background-color: #51d299 ; font-size: small; "
        @click=" !isUpdate ? updateButton() : updateProfile()">Update</v-btn>
      <v-btn id="deleteButton" class="mx-auto my-auto elevation-0 ml-4" color="error" @click="showDialog = true"
        style=" font-size: small; "> Delete</v-btn>
      <v-dialog data-testid="dialog" v-model="showDialog" width="auto">
        <v-card title="Delete Profile?" max-width="400">
          <v-card-text>Are you sure you want to delete your profile? This action cannot be reversed.</v-card-text>
          <v-card-actions>
            <v-btn id="delete" @click="deleteProfile(store.user.id)" text="delete">
            </v-btn>
             <v-btn id="cancel" @click="showDialog = false" text="cancel">
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
const isUpdate = ref(false)
const password = ref();
const repeatedPassword = ref();
const name = ref(store.user.name)
const maxDifficulty = ref(store.user.difficulty)
const estimatedTime = ref(store.user.maxChoreTime)
const showDialog = ref(false)
const errorMessages = ref({name: "", email: "", password: "", repeatedPassword: "", estTime: "", maxDiff: "", houseName: "", jc: ""})

function updateButton(){
  isUpdate.value = true
}

async function updateProfile() {

  if(!validateProfile()){
    return

  }
 
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
  isUpdate.value = false;
  return true;

}

function deleteProfile(id) {
  const result = FetchService.deleteUser(id)
  showDialog.value = false
  store.loggedIn = false
  return result;
}

function validateProfile(){
    let flag = true;
  if(!name.value){
    errorMessages.value.name = "name must exist"
    flag = false;
  }
  else{
    errorMessages.value.name = ""
  }

  if(!estimatedTime.value || estimatedTime.value <= 0){
    errorMessages.value.estTime = "Estimated time must be greater than 0"
    flag = false
  }
  else{
    errorMessages.value.estTime = ""

  }

  if(!maxDifficulty.value || maxDifficulty.value < 1 || maxDifficulty.value > 10){
    errorMessages.value.maxDiff = "Maximum difficulty must be between 1 and 10"
    flag =  false
  }
  else{
    errorMessages.value.maxDiff = ""
  }
  if (flag){


  errorMessages.value.houseName = ""
  errorMessages.value.jc = ""
  }

  return flag

}


</script>
