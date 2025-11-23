<template>
  <v-sheet color="navy" class="fill-height pr-0">
    <v-container>
      <v-row class="mb-3 text-h2 pl-3">
        <div>Store</div>
      </v-row>

      <v-row class="mb-3">
        <v-col cols="12" sm="4" md="3"
          v-for="(prop) in propsList"
          :key="prop.id"
        >
          <v-card>
            <v-card-item class="pr-0 pl-0 w-100 text-center">
                <img class="pl-0" :src="prop.url" alt="prop image">
            </v-card-item>
            <v-card-text class="text-center text-body-1">
              {{ prop.name }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-if="!isOwned(prop)"
                class="w-100"
                color="secondary"
                variant="elevated"
                density="compact"
                @click="buyProp(prop)"
              >
                Buy
              </v-btn>
              <v-btn
                v-else
                class="w-100"
                color="secondary"
                variant="elevated"
                density="compact"
                @click="equipProp(prop)"
                :disabled="isEquipped(prop)"
              >
                {{ isEquipped(prop) ? 'Equipped' : 'Equip' }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useAppStore } from '@/stores/app'
  import FetchService from '../FetchService.js'

  const store = useAppStore()

  const ownedProps = ref([])
  const propsList = ref([])

  const usersAvatar = ref(store.avatars.find((avatar) => avatar.userId == store.user.id))

  onMounted(async () => {
    if (store.allProps.length == 0) {
      const result = await FetchService.getAvatarProps()
      store.allProps = result
      propsList.value = result
    } else {
      propsList.value = store.allProps
    }

    //TODO: retrieve the props owned by the user and store them in ownedProps

    //If the user's avatar couldn't be found, fetch it
    if(!usersAvatar.value) {
      let avatar = ref({
        userId: store.user.id,
        skinTone: "",
        hat: "",
        hair: "",
        shirt: "",
        background: "",
        handProp: ""
      });

      const avatarFetch = await FetchService.getAvatar(store.user.id);
      avatarFetch.forEach((prop) => {
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
      store.avatars.push = avatar.value;
      usersAvatar.value = avatar.value
    }
  })

  function isOwned(prop) {
    return ownedProps.value.some((ownedProp) => ownedProp.id == prop.id)
  }

  function buyProp(prop) {
    ownedProps.value.push(prop)

    // TODO: implement buy prop function from database
  }

  function equipProp(prop) {
    usersAvatar.value[prop.type] = prop.url;
    store.avatars.find((avatar) => avatar.userId == store.user.id)[prop.type] = prop.url

    // TODO: implement updating the users avatar in the database
  }

  function isEquipped(prop) {
    return Object.entries(usersAvatar.value).some((entry) => entry[1] == prop.url)
  }
</script>

<style scoped>
img {
  width: 90%;
  margin: auto;
}
</style>