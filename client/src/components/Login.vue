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
          <v-text-field v-if="isCreate" :error-messages="errorMessages.repeatedPassword" v-model = "repeatedPassword"  label = "Password Again" type = "password"   ></v-text-field>   
          <v-row v-if="isCreate" class="mx-auto my-auto">
            <v-col  v-if="isCreate" style = "font-size: x-small;" cols = "6">
              Estimated Time To Complete Chores (minutes)
              <v-number-input v-if="isCreate" :error-messages="errorMessages.estTime" v-model = "estimatedTime" :min = '1' control-variant="split" ></v-number-input>
            </v-col>
            <v-col v-if="isCreate"  style = "font-size: x-small;" cols = "6">
              Maximum Difficulty
              <v-number-input v-if="isCreate" :error-messages="errorMessages.maxDiff" v-model = "maxDifficulty" :min = '1' :max = '10' control-variant="split"  ></v-number-input>
            </v-col>

            <v-dialog v-model="showDialog" width="500">
        <v-card :title="!isJoin ? 'Create a Household' : 'Join a Household'" max-width="400">
          <v-text-field  :error-messages=" isJoin ? errorMessages.jc : errorMessages.houseName" v-model = "householdName"  :label = " !isJoin ? 'Enter Household Name' : 'Enter Household Join Code'"></v-text-field>
          <v-card-actions>
             <v-btn id = "test" @click="showDialog = false" data-testid="cancelButton" > cancel
            </v-btn>
            <v-btn @click="createProfile()" > create
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


          </v-row>
          <div>
            <v-row v-if="isCreate" class="mx-auto my-auto" style="align-items: center;">
              <v-col v-if="isCreate"  style = "font-size: x-small; align-items: center; justify-content: center;" cols = "2">
             <v-btn data-testid="cancelLogin"  color="teal" @click="switchLogin">Cancel</v-btn>
            </v-col>
            <v-col  v-if="isCreate"  style = "font-size: x-small; align-items: center; justify-content: center" cols = "5">
  
             <v-btn color="teal" @click ="CreateButtonSwitches()">Create household</v-btn>
            </v-col>
            <v-col v-if="isCreate"   style = "font-size: x-small; align-items: center; justify-content: center" cols = "5">
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
  const password = ref("");
  const isIncorrect = ref(false);
  const displayedName = ref()
  const maxDifficulty = ref()
  const estimatedTime = ref()
  const repeatedPassword = ref("")
  const errorMessages = ref({name: "", email: "", password: "", repeatedPassword: "", estTime: "", maxDiff: "", houseName: "", jc: ""})
  const isCreate = ref(false)
  const store = useAppStore()
  const showDialog = ref(false)
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
      errorMessages.value.password = "incorrect username or password"
      isIncorrect.value = true;
    }
  }

  function switchCreate(){
    isCreate.value = true;
    isIncorrect.value = false;
    username.value = ""
    password.value = ""
    repeatedPassword.value = ""
    estimatedTime.value = 0
    maxDifficulty.value = 1
    errorMessages.value.maxDiff = ""
    errorMessages.value.estTime = ""
    errorMessages.value.email = ""
    errorMessages.value.name = ""
    errorMessages.value.password = ""
    errorMessages.value.repeatedPassword = ""
    showDialog.value = false;


  }

  function switchLogin(){
    isCreate.value = false;
    username.value = ""
    password.value = ""
    errorMessages.value.email = ""
    errorMessages.value.password = ""
  }

  function joinButtonSwitches(){
    isJoin.value = true
    if (validateProfile()){
    showDialog.value = true
    }
  }

  function CreateButtonSwitches(){
    isJoin.value = false
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

  if(!estimatedTime.value || estimatedTime.value <= 0){
    console.log("estimated time is wrong")
    errorMessages.value.estTime = "Estimated time must be greater than 0"
    flag = false
  }
  else{
    errorMessages.value.estTime = ""

  }

  if(!maxDifficulty.value || maxDifficulty.value < 1 || maxDifficulty.value > 10){
    console.log("max difficulty is wrong")
    errorMessages.value.maxDiff = "Maximum difficulty must be between 1 and 10"
    flag =  false
  }
  else{
    errorMessages.value.maxDiff = ""
  }
  if (flag){

  showDialog.value = true
  householdName.value = ""
  errorMessages.value.houseName = ""
  errorMessages.value.jc = ""
  }

  return flag

}

  async function createProfile(){
    if(!isJoin.value){
    if (!householdName.value || householdName.value.length > 50 || !(householdName.value.match(/\.*[A-Z]\.*/)  || householdName.value.match(/\.*[a-z]\.*/))){
      errorMessages.value.houseName = "Household name must be below 50 characters and have at least 1 letter"
      return false
    }
  }
    const household = {
      name: householdName.value
    }
    let house = isJoin.value ? await FetchService.fetchHouseholdByJoin(household.name) : await FetchService.createHousehold(household)
    if(!house){
      errorMessages.value.jc = "Join code does not exist"
      return false;
    }
     showDialog.value = false
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
      showDialog.value = false;
      if (result == 513){
        console.log("Violate unique constraint on email")
        errorMessages.value.email = "There already exists an account for this email"
      }
      else{

      switchLogin()
      store.user = result.user
      return result
      }
    } catch (error) {
      console.error("Signup failed:", error);
      return false
    }
  }

</script>
