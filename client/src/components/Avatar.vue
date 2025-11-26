<template class="mb-0 pb-0">
  <div class="w-100 mb-0 pb-0 position-relative">
    <img @click.prevent="profile" :to="route"  v-if="avatar.background" :src="avatar.background" class="top-0 left-0 w-100 pb-0 mb-0"/>
    <img @click.prevent="profile" :to="route"  v-if="avatar.skinTone" :src="avatar.skinTone" class="position-absolute top-0 left-0 w-100"/>
    <img @click.prevent="profile" :to="route"  v-if="avatar.hair" :src="avatar.hair" class="position-absolute top-0 left-0 w-100"/>
    <img @click.prevent="profile" :to="route"  v-if="avatar.hat" :src="avatar.hat" class="position-absolute top-0 left-0 w-100"/>
    <img @click.prevent="profile" :to="route"  v-if="avatar.shirt" :src="avatar.shirt" class="position-absolute top-0 left-0 w-100"/>
    <img @click.prevent=" profile" :to="route" v-if="avatar.handProp" :src="avatar.handProp" class="position-absolute top-0 left-0 w-100"/>
    <img @click.prevent=" profile" :to="route"  src="../assets/BorderCircle.png" class="position-absolute top-0 left-0 w-100"/>
  
  </div>


     <v-dialog data-testid="profileDialog" v-model="profileDialog" width="500">
        <v-card class="text-center" :title="name + '\'s profile'" max-width="400">
          <v-row>
          <v-col class="ml-1 ">
          <p> Role: {{ role }}   </p>
          <p>Total points: {{totalPoints}} pts</p>
          </v-col>
          <v-col class="mr-1">
          <p>Difficulty: {{maxDifficulty}} </p>
          <p>Time: {{maxChoreTime}} mins</p>
          </v-col>
          </v-row>
           <v-card-actions>
             <v-btn id = "lastLeaderCancel" @click="cancel()" data-testid="cancelButton" > cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      {{route}}

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
  skinTone: "",
  hat: "",
  hair: "",
  shirt: "",
  background: "",
  handProp: ""
});

onMounted(async () => {

  if (props.dis){
    route.value = "/profile" 
    console.log("HI")

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
            avatar.value.skinTone = prop.url;
            break;
          case "hat":
            avatar.value.hat = prop.url;
            break;
          case "hair":
            avatar.value.hair = prop.url;
            break;
          case "shirt":
            avatar.value.shirt = prop.url;
            break;
          case "background":
            avatar.value.background = prop.url;
            break;
          case "handProp":
            avatar.value.handProp = prop.url;
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

function profile(){
  if (!props.dis){
  store.household.users.forEach((user)=>{
    console.log("HI")
    profileDialog.value = true
    if(user.id==props.userId){
      name.value = user.name
      role.value = user.role
      maxChoreTime.value = user.maxChoreTime
      maxDifficulty.value = user.difficulty
      totalPoints.value = user.totalPoints
    }
  })
}
}

function cancel(){
  profileDialog.value= false
}

function nothing(){

}


 

</script>
<style scoped>
</style>