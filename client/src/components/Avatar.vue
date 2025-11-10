<template class="mb-0 pb-0">
  <div class="w-100 mb-0 pb-0 position-relative">
    <img v-if="background" :src="background" class="top-0 left-0 w-100 pb-0 mb-0"/>
    <img v-if="skinTone" :src="skinTone" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="hair" :src="hair" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="hat" :src="hat" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="shirt" :src="shirt" class="position-absolute top-0 left-0 w-100"/>
    <img v-if="handProp" :src="handProp" class="position-absolute top-0 left-0 w-100"/>
    <img src="../assets/BorderCircle.png" class="position-absolute top-0 left-0 w-100"/>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import FetchService from '@/FetchService';
import { useAppStore } from "../stores/app.js";
const store = useAppStore();
const skinTone = ref();
const hat = ref();
const hair = ref();
const shirt = ref();
const background = ref();
const handProp = ref();

// Check if user is set in store
if (store && store.user && store.user.id) {
  const props = await FetchService.getAvatar(store.user.id);
  props.forEach((prop) => {
    switch(prop.type) {
      case "skinTone":
        skinTone.value = prop.url;
        break;
      case "hat":
        hat.value = prop.url;
        break;
      case "hair":
        hair.value = prop.url;
        break;
      case "shirt":
        shirt.value = prop.url;
        break;
      case "background":
        background.value = prop.url;
        break;
      case "handProp":
        handProp.value = prop.url;
        break;
      default:
        console.log(`Unexpected prop type ${prop.type}`);
    }
  })
} 

</script>
<style scoped>
</style>