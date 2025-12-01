<template>
  <v-sheet class="fill-height w-100 " color="primary-darken-1">
    <v-btn id="logout" class="float-sm-right ma-3" color="secondary" @click="store.loggedIn=false">Logout</v-btn>
    <v-row class="mt-0">
      <v-col cols="6" md ="4" class="ma-4">
          <Avatar dis :userId="store.user.id"/>
      </v-col>
    </v-row>

    <v-form class="ma-4">
      <v-row>
        <v-col cols="12" md="9" v-if="isUpdate">
          <v-text-field data-testid="name" :error-messages="errorMessages.name" label="Name" v-model="name"></v-text-field>
        </v-col>
        <v-col cols="12" md="9" v-else>
          <p>Name: {{name}}</p>
        </v-col>
      </v-row>
      <v-row v-if="!isUpdate">
        <v-col cols="12">
          <p> Points: {{store.user.totalPoints}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="9" v-if="isUpdate">
          <v-text-field data-testid="email" :error-messages="errorMessages.email" :disabled="true" v-model="username" label="Email"></v-text-field>
        </v-col>
        <v-col cols="12" v-else>
          <p>Email: {{username}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="9" v-if="isUpdate">
          <v-text-field data-testid="password" :error-messages="errorMessages.password" type="password" label="new password" v-model="password"></v-text-field>
          <v-text-field data-testid="repeatedPassword" :error-messages="errorMessages.repeatedPassword" type="password" v-model="repeatedPassword" label="verify new password"></v-text-field> 
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="9" v-if="isUpdate">
          <p>Estimated Time To Complete Chores (minutes)</p>
          <v-number-input data-testid="estTime" :disabled="!isUpdate" :error-messages="errorMessages.estTime" v-model="estimatedTime" :min='0' control-variant="split"></v-number-input>
        </v-col>
        <v-col cols="12" md="9" v-else>
          <p> Estimated Time To Complete Chores (minutes): {{estimatedTime}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="9" v-if="isUpdate">
          <p>Maximum Difficulty</p>
          <v-number-input :disabled="!isUpdate" :error-messages="errorMessages.maxDiff" v-model="maxDifficulty" :min='1' :max='10' control-variant="split"></v-number-input>
        </v-col>
        <v-col cols="12" md="9" v-else>
          <p class="mb-5">Maximum Difficulty: {{maxDifficulty}}</p>
        </v-col>
      </v-row>
      
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
             <v-btn id="deleteCancel" @click="showDialog = false" text="cancel">
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
       <v-dialog data-testid="passwordDialog" v-model="showPasswordDialog" width="auto" >
        <v-card title="change Password?" >
          <v-text-field data-testid="prevPass" :error-messages="errorMessages.previousPassword" class="ml-1 mr-1" v-model="previousPassword" type="password" label="Previous Password"></v-text-field> 
          <v-card-actions>
            <v-btn id="confirm" @click="confirm" text="Confirm">
            </v-btn>
             <v-btn id="cancel" @click="cancel" text="cancel">
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
import Avatar from '../components/Avatar.vue'
import { useToast } from 'vue-toastification'

const store = useAppStore();
const toast = useToast();
const username = ref(store.user.email);
const isUpdate = ref(false)
const password = ref();
const repeatedPassword = ref();
const name = ref(store.user.name)
const maxDifficulty = ref(store.user.difficulty)
const estimatedTime = ref(store.user.maxChoreTime)
const showDialog = ref(false)
const errorMessages = ref({name: "", email: "", password: "", repeatedPassword: "", estTime: "", maxDiff: "", houseName: "", jc: "", previousPassword: ""})
const showPasswordDialog = ref(false)
const previousPassword = ref()
const confirmed = ref(false)
const test = ref (true)

function updateButton(){
  isUpdate.value = true
}

async function updateProfile() {
  if(!validateProfile() && !confirmed.value){
    return
  }
  
  if (password.value && !confirmed.value ){
    showPasswordDialog.value = true
    return
  }

  if(password.value && confirmed.value) {
    const user = {
        email: store.user.email,
        password_hash: previousPassword.value
    }
    let pastPass = await FetchService.login(user)
    if(pastPass){
      const result = await FetchService.updateUser(store.user.id, {
        name: name.value,
        email: username.value,
        password_hash: password.value,
        difficulty: maxDifficulty.value,
        maxChoreTime: estimatedTime.value
        
      })
      showPasswordDialog.value = false
      confirmed.value = false
      password.value = ""
      repeatedPassword.value = ""
      if(result) {
        toast.success("Your profile was updated successfully")
        store.user.name = name.value
        store.user.email = username.value
        store.user.difficulty = maxDifficulty.value
        store.user.maxChoreTime = estimatedTime.value
      } else {
        toast.error("Something went wrong. Your profile was unable to be updated")
      }
      isUpdate.value = false;
      errorMessages.value.previousPassword = ""
      return true;
    } else{
      errorMessages.value.previousPassword = "Please enter correct password"
      test.value = false
      return
    }
  } else {
    const result = await FetchService.updateUser(store.user.id, {
      name: name.value,
      email: username.value,
      difficulty: maxDifficulty.value,
      maxChoreTime: estimatedTime.value
    })

    if(result) {
      toast.success("Profile updated sucessfully")
    } else {
      toast.error("Something went wrong. Your profile was unable to be updated")
    }
  }

  store.user.name = name.value
  store.user.email = username.value
  store.user.difficulty = maxDifficulty.value
  store.user.maxChoreTime = estimatedTime.value
  isUpdate.value = false;
  errorMessages.value.previousPassword = ""
  return true;
}

function deleteProfile(id) {
  const result = FetchService.deleteUser(id)
  showDialog.value = false
  if(result) {
    store.loggedIn = false
    toast.success("Your profile was deleted successfully")
  } else {
    toast.error("Something went wrong. Your profile was unable to be deleted")
  }
  
  return result;
}

function validateProfile(){
  let flag = true;
  if(!name.value){
    errorMessages.value.name = "name must exist"
    flag = false;
  } else{
    errorMessages.value.name = ""
  }

  if(!estimatedTime.value || estimatedTime.value <= 0){
    errorMessages.value.estTime = "Estimated time must be greater than 0"
    flag = false
  } else{
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

  if (password.value){
    if(!password.value || password.value.length < 8 || password.value.length > 25 || !(password.value.match(/\.*\d\.*/) && password.value.match(/\.*[A-Z]\.*/) ) ){
      errorMessages.value.password = "Password must be 8-25 characters and include at least one capital letter and one number"
      flag = false
    }
    else{
      errorMessages.value.password = ""
    }

    if(password.value != repeatedPassword.value){
      errorMessages.value.repeatedPassword = "Passswords do not match"
      flag = false
    }
    else{
      errorMessages.value.repeatedPassword = ""
    }
  }
  return flag
}

function cancel(){
  showPasswordDialog.value = false
  password.value = ""
  repeatedPassword.value =""
  confirmed.value=false
  previousPassword.value=""
  errorMessages.value.previousPassword = ""
}

function confirm(){
  confirmed.value = true
  updateProfile()
}


</script>
