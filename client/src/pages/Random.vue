<template>
  <v-sheet class="w-100 fill-height" color="navy">
    <div class="text-h4 text-md-h2 ml-3 pt-2 mb-3">Random Assignment</div>
    <v-row class="mr-2 ml-2 mb-3 mt-3">
      <v-col cols="12" md="5">
        <v-tooltip 
          text="This allows the random assignment to go beyond a users maximum available time so that more chores can be assigned."
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <v-checkbox
              v-model="overrideMaxTime"
              label="Override the users' maximum time?"
              v-bind="props"
              density="compact"
              id="overrideMaxTimeCheckbox"
            ></v-checkbox>
          </template>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="3" class="pt-1 pb-1">
        <v-btn
            color="secondary"
            block
            id="randomizeButton"
            @click="randomize()"
        >
            Re-randomize
        </v-btn>
      </v-col>
      <v-col cols="12" md="2" class="pt-1 pb-1">
        <v-btn
            color="secondary"
            block
            id="assignChoresButton"
            @click="assignChores()"
        >
            Assign
        </v-btn>
      </v-col>
      <v-col cols="12" md="2" class="pt-1 pb-1">
        <v-btn
            color="error"
            block
            id="cancelButton"
            @click="cancel()"
        >
            Cancel
        </v-btn>
      </v-col>
    </v-row>
    <div class="w-100 text-center text-h5 bg-primary mt-2">Chores to Assign</div>
    <div class="overflow-x-auto">
      <v-list class="pt-0 list">
        <v-list-item class="bg-secondary">
          <template v-slot:default>
            <v-row>
              <v-col cols="6">
                Name
              </v-col>
              <v-col cols="3">
                Assigned To
              </v-col>
              <v-col cols="3">
                Est. Time
              </v-col>
            </v-row>
          </template>
        </v-list-item>
        <v-list-item
          v-for="(chore) in assignedChores"
          :key="chore.id"
        >
          <template v-slot:default>
            <v-row>
              <v-col cols="6">
                {{ chore.name }}
              </v-col>
              <v-col cols="3">
                <!-- TODO: add an avatar for the user here -->
                <div style="width: 40px" class="mr-3">
                  <Avatar :userId="chore.assigneeId"/>
                </div>
                {{ userName(chore.assigneeId) }}
              </v-col>
              <v-col cols="3">
                {{ chore.estimatedTime }} min
              </v-col>
            </v-row>
          </template>
        </v-list-item>
      </v-list>
    </div>
    <div class="w-100 text-center text-h5 bg-primary mt-2">Still Unassigned</div>
    <div class="overflow-x-auto">
      <v-list class="pt-0 list">
        <v-list-item class="bg-secondary">
          <template v-slot:default>
            <v-row>
              <v-col cols="6">
                Name
              </v-col>
              <v-col cols="3">
                Difficulty
              </v-col>
              <v-col cols="3">
                Est. Time
              </v-col>
            </v-row>
          </template>
        </v-list-item>
        <v-list-item
          v-for="(chore) in unassignedChores"
          :key="chore.id"
        >
          <template v-slot:default>
            <v-row>
              <v-col cols="6">
                {{ chore.name }}
              </v-col>
              <v-col>
                {{ chore.difficulty }}
              </v-col>
              <v-col cols="3">
                {{ chore.estimatedTime }} min
              </v-col>
            </v-row>
          </template>
        </v-list-item>
      </v-list>
    </div>
  </v-sheet>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useAppStore } from "../stores/app.js";
  import { useRouter, useRoute } from 'vue-router';
  import FetchService from '../FetchService.js'
  import { useToast } from 'vue-toastification'
  import Avatar from '@/components/Avatar.vue';

  const store = useAppStore();
  const toast = useToast();
  const router = useRouter();

  const assignedChores = ref([])
  const unassignedChores = ref([])
  const mounted = ref(false)
  const overrideMaxTime = ref(false)

  if(store.user.role != 'leader') {
    router.push({
      name: 'home'
    })
    toast.error("Only a leader is able to randomly assign chores")
  }

  onMounted(async () => {
    store.household = await FetchService.fetchHousehold(store.user.householdId)
    randomize()
    mounted.value = true;
  })

  function userName(userId) {
    return store.household.users.find((user) => user.id == userId).name;
  }

  function cancel() {
    router.push({ name: 'home' });
  }

  function randomize() {
    assignedChores.value = []
    unassignedChores.value = []

    //get the chores in the household that are not currently assigned to users
    let originalChores = store.household.chores.filter((chore) => !chore.assigneeId).map((chore) => {
      return {
        id: chore.id, 
        name: chore.name,
        assigneeId: null, 
        difficulty: chore.difficulty, 
        estimatedTime: chore.estimatedTime
      };
    }).sort((chore1, chore2) => Math.random() - 0.5) //shuffles the array so that it won't always be in the same order and will be more random
    .sort((chore1, chore2) => chore2.difficulty - chore1.difficulty);

    //get the chores that are currently assigned to users
    let originalAssignedChores = store.household.chores.filter((chore) => chore.assigneeId)

    //get the users, their difficulty and their time
    let userTime = store.household.users.map((user) => {
      return {
        id: user.id,
        difficulty: user.difficulty,
        maxChoreTime: user.maxChoreTime,
      }
    }).sort((user1, user2) => user2.difficulty - user1.difficulty);

    //Remove the time from chores that are already assigned to the users
    for(let choreIndex = 0; choreIndex < originalAssignedChores.length; choreIndex++) {
      if(userTime.find((user) => originalAssignedChores[choreIndex].assigneeId == user.id)) {
        userTime.find((user) => originalAssignedChores[choreIndex].assigneeId == user.id).maxChoreTime -= originalAssignedChores[choreIndex].estimatedTime;
      }
    }

    //identify last index of a user that has the corresponding max difficulty or above
    let userDifficultyIndex = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    for(let userIndex = 0; userIndex < userTime.length; userIndex++) {
      for(let difficultyIndex = userTime[userIndex].difficulty; difficultyIndex > 0; difficultyIndex--) {
        userDifficultyIndex[difficultyIndex] = userIndex;
      }
    }

    //assign as many chores as possible
    for(let choreIndex = 0; choreIndex < originalChores.length; choreIndex++) {
      let choreDifficulty = originalChores[choreIndex].difficulty;

      //find users that have time to complete this chore
      let availableUsers = [];
      for(let userIndex = 0; userIndex < userDifficultyIndex[choreDifficulty] + 1; userIndex++) {
        if(userTime[userIndex].maxChoreTime >= originalChores[choreIndex].estimatedTime) {
          availableUsers.push(userTime[userIndex])
        }
      }

      if(availableUsers.length > 0) {
        //Select a random available user
        let userIndex = Math.floor(Math.random() * availableUsers.length)
        
        //Update the chore information and the user information for the chore to be assigned
        originalChores[choreIndex].assigneeId = availableUsers[userIndex].id
        userTime.find((user) => user.id == availableUsers[userIndex].id).maxChoreTime -= originalChores[choreIndex].estimatedTime;
        assignedChores.value.push(originalChores[choreIndex])
      } else {
        unassignedChores.value.push(originalChores[choreIndex])
      }
    }

    if(overrideMaxTime.value) {
      //Only want to sort the chores that would have been unassigned before
      let randomUnassignedChores = unassignedChores.value
      unassignedChores.value = []

      for(let choreIndex = 0; choreIndex < randomUnassignedChores.length; choreIndex++) {
        let choreDifficulty = randomUnassignedChores[choreIndex].difficulty;

        //find users that have time to complete this chore
        let availableUsers = [];
        for(let userIndex = 0; userIndex < userDifficultyIndex[choreDifficulty] + 1; userIndex++) {
          availableUsers.push(userTime[userIndex])
        }

        //Sort the users by the time they have available
        availableUsers = availableUsers.sort((user1, user2) => user2.maxChoreTime - user1.maxChoreTime)

        if(availableUsers.length > 0) {
          //Select a random available user
          //Weight it so that users with more time available have a higher weight
          let userWieght = Math.floor(Math.random() * (availableUsers.length * (availableUsers.length + 1) / 2))

          //Find the users index by doing the reverse of how it was weighted
          let userIndex = Math.floor(Math.sqrt(2 * userWieght + 0.25) - 0.5)

          if(userIndex < 0) {
            userIndex = 0
          } else if(userIndex >= availableUsers.length) {
            userIndex = availableUsers.length - 1
          }
          
          //Update the chore information and the user information for the chore to be assigned
          randomUnassignedChores[choreIndex].assigneeId = availableUsers[userIndex].id
          userTime.find((user) => user.id == availableUsers[userIndex].id).maxChoreTime -= randomUnassignedChores[choreIndex].estimatedTime;
          assignedChores.value.push(randomUnassignedChores[choreIndex])
        } else {
          unassignedChores.value.push(randomUnassignedChores[choreIndex])
        }
      }
    }
  }

  async function assignChores() {
    for(let choreIndex = 0; choreIndex < assignedChores.value.length; choreIndex++) {
      let result = await FetchService.editChore(assignedChores.value[choreIndex].id, {assigneeId: assignedChores.value[choreIndex].assigneeId});

      store.household.chores.find((chore) => chore.id == assignedChores.value[choreIndex].id).assigneeId = assignedChores.value[choreIndex].assigneeId
    }

    router.push({ name: 'home' });
  }
</script>
<style scoped>
.list {
  min-width: 25em;
}
</style>