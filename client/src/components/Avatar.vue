<template class="mb-0 pb-0">
  <div  @click="profile($event)" class="w-100 mb-0 pb-0 position-relative">
    <img id = "background" v-if="avatar.background" :src="avatar.background.url" class="top-0 left-0 w-100 pb-0 mb-0"/>
    <img v-if="avatar.skinTone" :src="avatar.skinTone.url" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.hair" :src="avatar.hair.url" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.hat" :src="avatar.hat.url" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.shirt" :src="avatar.shirt.url" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.handProp" :src="avatar.handProp.url" class="position-absolute top-0 left-0 w-100"/>
    <img src="../assets/BorderCircle.png" class="position-absolute top-0 left-0 w-100"/>
  
  </div>


     <v-dialog data-testid="profileDialog" v-model="profileDialog" width="500">
        <v-card :title="name + '\'s profile'" max-width="400">
          
        <div class="w-50 mb-0 pb-0 ml-auto mr-auto position-relative">
    <img id = "background" v-if="avatar.background" :src="avatar.background.url" class="top-0 left-0 w-100 pb-0 mb-0"/>
    <img v-if="avatar.skinTone" :src="avatar.skinTone.url" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.hair" :src="avatar.hair.url" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.hat" :src="avatar.hat.url" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.shirt" :src="avatar.shirt.url" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.handProp" :src="avatar.handProp.url" class="position-absolute top-0 left-0 w-100"/>
    <img src="../assets/BorderCircle.png" class="position-absolute top-0 left-0 w-100"/>
  
  </div>
          <v-row class = "pa-2">
          <v-col class="ml-2  ">
          <p> Role: {{ role }}   </p>
          <p>Total points: {{totalPoints}} pts</p>
          </v-col>
          <v-col class="mr-1">
          <p>Difficulty: {{maxDifficulty}} </p>
          <p>Time: {{maxChoreTime}} mins</p>
          </v-col>
          </v-row>
           <v-card-actions>
             <v-btn variant="elevated" color= "error" @click="cancel()" data-testid="cancelButton" > Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    

</template>
  
<script setup>
import { ref, onMounted, defineProps } from 'vue';
import FetchService from '@/FetchService';
import { useAppStore } from "../stores/app.js";

const props = defineProps({
    userId: Number,
    dis: Boolean
  });

const name = ref()
const maxChoreTime = ref()
const maxDifficulty = ref()
const totalPoints = ref()
const route = ref("")
const role = ref()
const profileDialog = ref(false)
const store = useAppStore();
const avatar = ref({
  userId: props.userId,
  skinTone: {},
  hat: {},
  hair: {},
  shirt: {},
  background: {},
  handProp: {}
});

onMounted(async () => {

  if (props.dis){
    route.value = "/profile" 
  }
  else{
    route.value = ""
  }
  // Check if user is set in store
  if (store && store.household && store.household.users.some((user) => user.id == props.userId)) {
    // Fetch avatar once
    if (!store.avatars.some((avatar) => avatar.userId == props.userId)) {
      const avatarProps = await FetchService.getAvatar(props.userId);
      if (avatarProps){
      avatarProps.forEach((prop) => {
        switch(prop.type) {
          case "skinTone":
            avatar.value.skinTone = {
              url: prop.url,
              id: prop.id
            };
            break;
          case "hat":
            avatar.value.hat = {
              url: prop.url,
              id: prop.id
            };
            break;
          case "hair":
            avatar.value.hair = {
              url: prop.url,
              id: prop.id
            };
            break;
          case "shirt":
            avatar.value.shirt = {
              url: prop.url,
              id: prop.id
            };
            break;
          case "background":
            avatar.value.background = {
              url: prop.url,
              id: prop.id
            };
            break;
          case "handProp":
            avatar.value.handProp = {
              url: prop.url,
              id: prop.id
            };
            break;
          default:
            console.log(`Unexpected prop type ${prop.type}`);
        }
      });
    }
      store.avatars.push(avatar.value);
      if(props.userId == store.user.id) {
        store.user.avatar = avatar.value
      }
    } else {
      // Retrieve from store after first time fetching
      avatar.value = store.avatars.find((avatar) => avatar.userId == props.userId);
    }
  }
})

function profile(event){
  if (!props.dis){
    event.preventDefault()
    event.stopPropagation()
    let currentUser = store.household.users.find((user)=> user.id==props.userId)
    if(currentUser) {
      profileDialog.value = true
      name.value = currentUser.name
      role.value = currentUser.role
      maxChoreTime.value = currentUser.maxChoreTime
      maxDifficulty.value = currentUser.difficulty
      totalPoints.value = currentUser.totalPoints
    }
  }
}

function cancel(){
  profileDialog.value= false
}



 

</script>
<style scoped>
</style>