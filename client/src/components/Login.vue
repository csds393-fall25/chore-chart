<template>
  
    <div style = "background-color: #192b40 ; ">
      <h2 class="text-h5 font-weight-bold">
                ChoreChart
              </h2>
     

      

        
          <v-card
            class="py-2 mx-auto my-auto"
            style = "background-color: #192b40; width: 75%"
            rounded="lg"
        
          >
            

            <template #title>
              
              <h2 class="text-h6 font-weight-bold">
                 {{isCreate ?  'Create Profile' : 'Login'}}
              </h2>
              <v-form>
                
              <v-text-field  v-if="isCreate"  v-model = "name"  label = "Name"></v-text-field>
              <v-text-field   v-model = "username"  label = "Email"></v-text-field>
              <v-text-field  v-model = "password"  label = "Password" type = "password" :persistent-hint='isIncorrect' :hint = " isIncorrect ? 'Incorrect username or password' : ''" ></v-text-field>
              <v-text-field v-if="isCreate" v-model = "repeatedPassword"  label = "Password Again" type = "password" :persistent-hint='isNotSame' :hint = " isNotSame ? 'Passwords do not match' : ''" ></v-text-field>   
              <v-row v-if="isCreate" class="mx-auto my-auto"  style = "align-items: center;">
              <v-col  v-if="isCreate" style = "font-size: x-small;" cols = "6">
                Estimated Time
                <v-number-input v-if="isCreate" v-model = "estimatedTime" min = '0' control-variant="split" ></v-number-input>
                


              </v-col>
              <v-col v-if="isCreate"  style = "font-size: x-small;" cols = "6">
                Maximum Difficulty

                <v-number-input v-if="isCreate" v-model = "maxDifficulty" min = '1' max = '10' control-variant="split"  ></v-number-input>
              </v-col>

              </v-row>
              <div>
              <v-btn  class = "elevation-0" style = "background-color: #51d299 ; " @click =" isCreate ? validateProfile() : validateLogin()">{{isCreate ? 'Create' : 'Login'}}</v-btn>
                </div>
                <div >
               <v-btn v-if="!isCreate" class="mx-auto my-auto elevation-0" @click = "isCreate = true" style = "background-color: #192b40; font-size: x-small; " > Don't have an account? create one here</v-btn>
                </div>
           

              
             
              

              </v-form>
              
            

               


              
              

              </template>
              
              
         

            
          </v-card>
      

     
    </div>
  
</template>

<script setup>


  const username = ref();
  const password = ref();
  const isIncorrect = ref(false);
  const name = ref()
  const maxDifficulty = ref()
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
