<template>
  <v-sheet color="navy" class="fill-height pr-0">
    <v-container>
        <div class="text-h5 ml-1">
            {{store.household.name}} Leaderboard
        </div>
      <v-list 
        class="pb-0 pt-0"
      >
      <v-list-item
      class="border-b-thin bg-secondary"
           variant="outlined">


        <template
            v-slot:prepend
            
          >
            <v-avatar>
              
            </v-avatar>
          </template>
           <template v-slot:default>
            <v-row>
              <v-col cols="8">
                <p>Name</p>
              </v-col>
              <v-col cols="4">
                <p>Total Points</p>
              </v-col>
            </v-row>
          </template>
      </v-list-item>
        <v-list-item
          v-for="(member) in members"
          :key="member.id"
          class="border-b-thin"
           variant="outlined"
        >
          <template
            v-slot:prepend
          >
            <div style="width: 40px" class="mr-3">
            <Avatar :userId="member.id"/>
            </div>
          </template>

          <template v-slot:default>
            <v-row>
              <v-col cols="8">
                {{ member.name }}
              </v-col>
              <v-col cols="4">
                {{ member.totalPoints}} pts
              </v-col>
            </v-row>
          </template>
        </v-list-item>
      </v-list>
    </v-container>
    </v-sheet>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { useAppStore } from '@/stores/app';
  import { watch } from 'vue';
  import Avatar from '@/components/Avatar.vue';

  const store = useAppStore()
  const members = ref(store.household.users.sort((i, j)=> j.totalPoints-i.totalPoints ))

  function userInitials(name) {
    return name.substring(0,1)
  }

</script>

<style scoped>
  .list-append {
    width: 100px;
  }
</style>