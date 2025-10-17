<template>
  <v-sheet class = "fill-height w-100" color="primary-darken-1">

      
     <v-avatar size = "large" color="primary"></v-avatar>

     <v-form>
                
              <v-text-field style = "width: 75%; "  label="Name"   v-model = "name" ></v-text-field>
              <v-text-field style = "width: 75%"   v-model = "username"  label = "Email"></v-text-field> 
             
             
                Estimated Time
                <v-number-input style = "width: 75%"  v-model = "estimatedTime" min = '0' control-variant="split" ></v-number-input>
            

     
                Maximum Difficulty

                <v-number-input style = "width: 75%" v-model = "maxDifficulty" min = '1' max = '10' control-variant="split"  ></v-number-input>
          

              
              
              <v-btn  class = "elevation-0" style = "background-color: #51d299 ; " @click =" isCreate ? validateProfile() : validateLogin()">Update</v-btn>
                
             
               <v-btn  class="mx-auto my-auto elevation-0" color="error" @click = "isCreate = true" style = " font-size: x-small; " > Delete</v-btn>
                
           

              
             
              

              </v-form>
 

      

        
          <v-card
            class="py-2 mx-auto my-auto"
            style = "background-color: #192b40; width: 75%"
            rounded="lg"
        
          >
            

            <template #title>
              
              
                           
            

               


              
              

              </template>
              
              
         

            
          </v-card>
      

     
    </v-sheet>
  
</template>

<script setup>
import stores from '@/stores';
import { ref } from 'vue';
import { useAppStore } from "../stores/app.js";
  const store = useAppStore();


  const username = ref(store.user.email);
  const password = ref();
  const isIncorrect = ref(false);
  const name = ref(store.user.name)
  const maxDifficulty = ref(store.user.difficulty)
  const estimatedTime = ref()
  const repeatedPassword = ref()
  const isNotSame = ref(false)
  const isCreate = ref(false)
  

  function validateLogin(){
    console.log("bye")

    
    if (typeof( password.value) != null &&password.value == getPassword()){
      console.log("success!!")
      // go to next screen
    }
    else{
      isIncorrect.value = true;

    }
  }

  function validateProfile(){
    console.log("HI")
    if (typeof(password.value) != null && typeof(repeatedPassword.value) != null && password.value != repeatedPassword.value){
      isNotSame.value = true;
    }
  }

// replace with database call that looks for username and returns the password associated with that username from the database
  function getPassword(username){

    return "password"
    
  }
  

</script>
