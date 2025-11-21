<template>
  <v-sheet color="navy" class="fill-height pr-0">
    <v-container>
      <v-row class="mb-3 text-h3 justify-center">
        <div>Store</div>
      </v-row>

      <v-row class="mb-3">
        <v-col cols="12" sm="6" md="4"
          v-for="(prop) in propsList"
          :key="prop.id"
        >
          <v-card class="pr-2">
            <v-card-item class="pr-0">
              <template v-slot:prepend>
                <img height="60" width="60" :src="prop.url" alt="prop image">
              </template>
            </v-card-item>
            <v-card-text class="text-center text-body-1">
              {{ prop.name }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="w-50"
                color="secondary"
                variant="elevated"
                density="compact"
                @click="buyProp(prop)"
                :disabled="isOwned(prop)"
              >
                {{ isOwned(prop) ? 'Owned' : 'Buy' }}
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

const propsList = ref([])

onMounted(async () => {
  if (store.allProps.length == 0) {
    const result = await FetchService.getAvatarProps()
    store.allProps = result
    propsList.value = result
  } else {
    propsList.value = store.allProps
  }
})

function isOwned(prop) {
  // TODO: implement fetching list of props the user owns
}

function buyProp(prop) {
  // TODO: implement buy prop function
}
</script>

<style scoped>
.list-append {
  width: 100px;
}
</style>