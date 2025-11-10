<template class="mb-0 pb-0">
  <div class="w-100 mb-0 pb-0 position-relative">
    <img v-if="avatar.background" :src="avatar.background" class="top-0 left-0 w-100 pb-0 mb-0"/>
    <img v-if="avatar.skinTone" :src="avatar.skinTone" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.hair" :src="avatar.hair" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.hat" :src="avatar.hat" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.shirt" :src="avatar.shirt" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="avatar.handProp" :src="avatar.handProp" class="position-absolute top-0 left-0 w-100"/>
    <img src="../assets/BorderCircle.png" class="position-absolute top-0 left-0 w-100"/>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import FetchService from '@/FetchService';
import { useAppStore } from "../stores/app.js";

const store = useAppStore();
const avatar = ref({
  skinTone: "",
  hat: "",
  hair: "",
  shirt: "",
  background: "",
  handProp: ""
});

// Check if user is set in store
if (store && store.user && store.user.id) {
  // Fetch avatar once
  if (!store.user.avatar) {
    const avatarProps = await FetchService.getAvatar(store.user.id);
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
    store.user.avatar = avatar.value;
  } else {
    // Retrieve from store after first time fetching
    avatar.value = store.user.avatar;
  }
} 

</script>
<style scoped>
</style>