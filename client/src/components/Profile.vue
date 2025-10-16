<template>
  
    <div style = "background-color: #192b40 ; ">
      
     <v-avatar  style = "background-color: red;  "> </v-avatar>

     <v-form>
                
              <v-text-field style = "width: 75%; "    v-model = "name"  label = "Name"></v-text-field>
              <v-text-field style = "width: 75%"   v-model = "username"  label = "Email"></v-text-field> 
              <v-row  class="mx-auto my-auto"  style = "align-items: center;">
              <v-col   style = "font-size: x-small;" cols = "6">
                Estimated Time
                <v-number-input  v-model = "estimatedTime" min = '0' control-variant="split" ></v-number-input>
            

              </v-col>
              <v-col   style = "font-size: x-small;" cols = "6">
                Maximum Difficulty

                <v-number-input  v-model = "maxDifficulty" min = '1' max = '10' control-variant="split"  ></v-number-input>
              </v-col>

              </v-row>
              
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
