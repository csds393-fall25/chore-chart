<template>
  <v-sheet v-if = "!store.loggedIn" class = "fill-height w-100" color="primary-darken-1">
    <h2 class="text-h5 font-weight-bold">
      ChoreChart
    </h2>
    <v-card
      class="py-2 mx-auto my-auto w-75"
      color="navy"
      rounded="lg"
    >
      <template #title>
        <h2 class="text-h6 font-weight-bold">
          {{isCreate ?  'Create Profile' : 'Login'}}
        </h2>
        <v-form>
          <v-text-field   v-if="isCreate" :error-messages="errorMessages.name" v-model = "displayedName"  label = "Name"></v-text-field>
          <v-text-field  :error-messages="errorMessages.email" v-model = "username"  label = "Email"></v-text-field>
          <v-text-field  :error-messages="errorMessages.password" v-model = "password"  label = "Password" type = "password"  ></v-text-field>
          <v-text-field v-if="isCreate" :error-messages="errorMessages.repeatedPassword" v-model = "repeatedPassword"  label = "Password Again" type = "password" :persistent-hint='isNotSame'  ></v-text-field>   
          <v-row v-if="isCreate" class="mx-auto my-auto">
            <v-col  v-if="isCreate" style = "font-size: x-small;" cols = "6">
              Estimated Time To Complete Chores (minutes)
              <v-number-input v-if="isCreate" :error-messages="errorMessages.estTime" v-model = "estimatedTime" :min = '0' control-variant="split" ></v-number-input>
            </v-col>
            <v-col v-if="isCreate"  style = "font-size: x-small;" cols = "6">
              Maximum Difficulty
              <v-number-input v-if="isCreate" :error-messages="errorMessages.maxDiff" v-model = "maxDifficulty" :min = '1' :max = '10' control-variant="split"  ></v-number-input>
            </v-col>

            <v-dialog v-model="showDialog" width="auto">
        <v-card :title="!isJoin ? 'Create a Household' : 'Join a Household'" max-width="400">
          <v-text-field   v-model = "householdName"  :label = " !isJoin ? 'Enter Household Name' : 'Enter Household Join Code'"></v-text-field>
          <v-card-actions>
            <v-btn @click="createProfile()" > create
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


          </v-row>
          <div>
            <v-row v-if="isCreate" class="mx-auto my-auto">
            <v-col  v-if="isCreate" style = "font-size: x-small;" cols = "6">
  
             <v-btn color="teal" @click ="validateProfile()">Create household</v-btn>
            </v-col>
            <v-col v-if="isCreate"  style = "font-size: x-small;" cols = "6">
             <v-btn color="teal" @click="joinButtonSwitches()">Join household</v-btn>
            </v-col>
             </v-row>
            <v-btn v-if = "!isCreate" class = "elevation-0" color="teal" @click =" isCreate ? validateProfile() : validateLogin()">{{isCreate ? 'Create' : 'Login'}}</v-btn>

          </div>
          <div>
            <v-btn v-if="!isCreate" class="mx-auto my-auto elevation-0" color="navy" @click = "switchCreate()" style = "font-size: x-small; " > Don't have an account? create one here</v-btn>
          </div>
        </v-form>
      </template>
    </v-card>   
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue'
  import FetchService from "../FetchService.js"
  import { useAppStore } from '@/stores/app.js';

  const username = ref();
  const usernameError = ref("Email must follow format xxx@xxx.xxx")
  const password = ref("");
  const passwordError = ref("Password must be 8-25 characters and include at least one capital letter and one number")
  const isIncorrect = ref(false);
  const displayedName = ref()
  const nameError = ref("Name must exist")
  const maxDifficulty = ref()
  const maxDiffError = ref("Maximum difficulty must be between 1 and 10")
  const estimatedTime = ref()
  const estTimeError = ref("Estimated time must be greater than 0")
  const repeatedPassword = ref("")
  const repeatedPasswordError = ref("Passwords much match")
  const errorMessages = ref({name: "", email: "", password: "", repeatedPassword: "", estTime: "", maxDiff: ""})
  const isNotSame = ref(false)
  const isCreate = ref(false)
  const store = useAppStore()
  const showDialog = ref(false)
  const test = ref(store.household.id)
  const code = ref()
  const householdName = ref()
  const isJoin = ref(false)
  
  async function validateLogin(){
    
    try {
      const user = {
        email: username.value,
        password_hash: password.value
      }
      const result = await FetchService.login(user);
      console.log("Login successful!", result);
      console.log(result.user)
      isIncorrect.value = false;
      store.user = (result.user)
      store.household = await FetchService.fetchHousehold(store.user.householdId);

      console.log(store.household)

      //Needs to occur last so that all other data is retrieved before the page changes
      store.loggedIn = true;
    } catch (error) {
      console.error("Login failed:", error);
      isIncorrect.value = true;
    }
  }

  function switchCreate(){
    isCreate.value = true;
    isIncorrect.value = false;
    username.value = ""
    password.value = ""

  }

  function switchLogin(){
    isCreate.value = false;
    username.value = ""
    password.value = ""
  }

  function joinButtonSwitches(){
    isJoin.value = true
    if (validateProfile()){
    showDialog.value = true
    }
  }

  function validateProfile(){
    let flag = true;
  if(!displayedName.value){
    console.log("Name is wrong")
    errorMessages.value.name = "name must exist"
    flag = false;
  }
  else{
    errorMessages.value.name = ""
  }

  let regex = username.value.match(/\w+@\w+\.\w+/)


  if(!username.value || !regex  ){
    console.log("email is wrong")
    errorMessages.value.email = "Email must follow format xxx@xxx.xxx"
    flag = false
  }
  else{
    errorMessages.value.email = ""
  }
  
  if (!password.value || password.value.length < 8 || password.value.length > 25 || !(password.value.match(/\.*\d\.*/) && password.value.match(/\.*[A-Z]\.*/) ) ){
    console.log("password is wrong")
    errorMessages.value.password = "Password must be 8-25 characters and include at least one capital letter and one number"
      flag = false
    }
    else{
      errorMessages.value.password = ""
    }

  if(!(repeatedPassword.value == password.value)){
    flag = false
    errorMessages.value.repeatedPassword = "Passwords do not match"

  }
  else{
    errorMessages.value.repeatedPassword = ""
  }

  if(!estimatedTime.value){
    console.log("estimated time is wrong")
    errorMessages.value.estTime = "Estimated time must be greater than 0"
    flag = false
  }
  else{
    errorMessages.value.estTime = ""

  }

  if(!maxDifficulty.value){
    console.log("max difficulty is wrong")
    errorMessages.value.maxDiff = "Maximum difficulty must be between 1 and 10"
    flag =  false
  }
  else{
    errorMessages.value.maxDiff = ""
  }
  if (flag){

  showDialog.value = true
  }

  return flag

}





  async function createProfile(){
    // if (typeof(password.value) != null && typeof(repeatedPassword.value) != null && password.value != repeatedPassword.value){
    //   isNotSame.value = true;
    //   return;
    // }
    isNotSame.value = false;
    const household = {
      name: householdName.value
    }
    let house = isJoin.value ? await FetchService.fetchHouseholdByJoin(household.name) : await FetchService.createHousehold(household)
    store.household.joinCode = house.joinCode
    const user = {
      name: displayedName.value,
      email: username.value,
      password_hash: password.value,
      householdId: house.id,
      totalPoints: 0,
      difficulty: maxDifficulty.value,
      maxChoreTime: estimatedTime.value,
    }
   
  
    try {

      const result = await FetchService.signup(user);

      switchLogin()
      store.user = result.user
      return result
    } catch (error) {
      console.error("Signup failed:", error);
      return false
    }
  }

</script>
