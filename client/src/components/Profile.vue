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
          

              
              
              <v-btn  class = "elevation-0" style = "background-color: #51d299 ; " @click =" updateProfile()">Update</v-btn>
                
             
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
import FetchService from '@/FetchService';
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
  

  function updateProfile(){
    FetchService.updateUser(store.user.id, store.user)

  }


  

</script>
