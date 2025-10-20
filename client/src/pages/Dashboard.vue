<template>
  <v-sheet color="navy" class="fill-height pr-0">
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" md="2" class="pb-0 pt-0">
          <div class="text-subtitle-1">Filter: </div>
        </v-col>
        <v-col cols="12" sm="6" md="5" class="pb-0 pt-0">
          <v-select
            variant="outlined"
            :items="members"
            item-title="name"
            item-value="id"
            v-model="filterUserId"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="3" md="2" class="pa-0 mb-1">
          <v-btn
            color="secondary"
            block
            @click="filterChores()"
          >
            Filter
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="2" offset-sm="6" offset-md="1" class="pr-0 pl-0 pt-0 mb-1">
          <!-- <div class="pr-0 mr-0"> -->
            <v-btn
              color="secondary"
              class="mr-0"
              block
              @click="changeView()"
              v-if="listMode"
            >
              Tile View
            </v-btn>
            <v-btn 
              color="secondary"
              class="mr-0"
              block
              @click="changeView()"  
              v-else
            >
              List View
            </v-btn>
            <v-btn
              color="secondary"
              class="mr-0 mt-1"
              @click="filterUserId = store.user.id; filterChores()"
              block
            >
              My Chores
            </v-btn>
          <!-- </div> -->
        </v-col>
      </v-row>
      <v-list class="pb-0 pt-0">
        <v-list-item
          v-for="(chore) in choreList"
          :key="chore.id"
          :to="'/chore/'+chore.id"
          class="border-b-thin"
        >
          <template
            v-slot:prepend
          >
            <v-avatar color="primary">
              <span class="text-h5">{{ userInitials(chore.assigneeId) }}</span>
            </v-avatar>
          </template>

          <template v-slot:default>
            <v-row>
              <v-col cols="8">
                {{ chore.name }}
              </v-col>
              <v-col cols="4">
                {{ chore.difficulty * 5 }} pts
              </v-col>
            </v-row>
          </template>

          <template
            v-slot:append
          >
            <div
              class="list-append"
            >
              <v-btn
                block
                color="secondary"
                density="compact"
                class="mb-1"
                @click.prevent="completeChorePrompt(chore)"
                v-if="chore.assigneeId == store.user.id"
              >
                Complete
              </v-btn>
              <v-btn
                block
                color="secondary"
                density="compact"
                class="mt-1 mb-1"
                @click.prevent="updateChore(chore.id)"
                v-if="store.user.role == 'leader'"
              >
                Edit
              </v-btn>
              <v-btn
                block
                color="error"
                density="compact"
                class="mt-1"
                @click.prevent="promptDelete(chore)"
                v-if="store.user.role == 'leader'"
              >
                Delete
              </v-btn>
            </div>
          </template>
        </v-list-item>
      </v-list>
      <div class="bg-primary text-center text-h5 pb-2 pt-2">Unassigned Chores</div>
      <v-list>
        <v-list-item
          v-for="(chore) in unassignedList"
          :key="chore.id"
          :to="'/chore/'+chore.id"
        >
          <template
            v-slot:prepend
          >
            <v-avatar color="primary-lighten-1"></v-avatar>
          </template>

          <template v-slot:default>
            <v-row>
              <v-col cols="8">
                {{ chore.name }}
              </v-col>
              <v-col cols="4">
                {{ chore.difficulty * 5 }} pts
              </v-col>
            </v-row>
          </template>

          <template
            v-slot:append
          >
            <div class="list-append">
              <v-btn
                block
                color="secondary"
                density="compact"
                class="mb-1"
                @click.prevent="assignToSelfPrompt(chore)"
              >
                Assign
              </v-btn>
              <v-btn
                block
                color="secondary"
                density="compact"
                class="mt-1 mb-1"
                @click.prevent="updateChore(chore.id)"
                v-if="store.user.role == 'leader'"
              >
                Edit
              </v-btn>
              <v-btn
                block
                color="error"
                density="compact"
                class="mt-1"
                @click.prevent="promptDelete(chore)"
                v-if="store.user.role == 'leader'"
              >
                Delete
              </v-btn>
            </div>
          </template>
        </v-list-item>
      </v-list>
    </v-container>
    <!-- Delete Dialog -->
    <v-dialog v-model="deleteDialogOpen" max-width="500">
      <v-card>
        <v-card-item>
          <v-card-title>Delete?</v-card-title>
        </v-card-item>
        <v-card-text v-if="deleteDialogChore">Are you sure you want to delete {{ deleteDialogChore.name }}?</v-card-text>
        <v-card-text v-else>Something went wrong, please cancel and try again</v-card-text>
        <v-card-actions>
          <v-btn
            @click="cancelDelete()"
          >
            Cancel
          </v-btn>
          <v-btn
            color="error"
            variant="elevated"
            @click="deleteChore(deleteDialogChore.id)"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Assign Dialog -->
    <v-dialog v-model="assignDialogOpen" max-width="500">
      <v-card>
        <v-card-item>
          <v-card-title>Assign to self</v-card-title>
        </v-card-item>
        <v-card-text v-if="assignDialogChore && choreAssignable(assignDialogChore.difficulty)">Are you sure you want to assign {{ assignDialogChore.name }} to yourself?</v-card-text>
        <v-card-text v-else-if="assignDialogChore">This chore is too difficult for you. If you would like to complete this chore please talk to a household leader.</v-card-text>
        <v-card-text v-else>Something went wrong, please cancel and try again</v-card-text>
        <v-card-actions>
          <v-btn
            @click="cancelAssign()"
          >
            Cancel
          </v-btn>
          <v-btn
            color="secondary"
            variant="elevated"
            @click="assignToSelf(assignDialogChore)"
            v-if="assignDialogChore && choreAssignable(assignDialogChore.difficulty)"
          >
            Assign
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Complete Dialog -->
    <v-dialog v-model="completeDialogOpen" max-width="500">
      <v-card>
        <v-card-item>
          <v-card-title>Complete?</v-card-title>
        </v-card-item>
        <v-card-text v-if="completeDialogChore">Are you sure you have completed {{ completeDialogChore.name }}?</v-card-text>
        <v-card-text v-else>Something went wrong, please cancel and try again</v-card-text>
        <v-card-actions>
          <v-btn
            @click="cancelComplete()"
          >
            Cancel
          </v-btn>
          <v-btn
            color="secondary"
            variant="elevated"
            @click="completeChore(completeDialogChore)"
          >
            Complete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { useAppStore } from '@/stores/app';
  import { useRouter } from 'vue-router'
  import FetchService from '../FetchService.js'

  const store = useAppStore()
  const router = useRouter()

  const listMode = ref(true);
  const filterUserId = ref(null);

  const members = store.household.users
    .map(user => { return {id: user.id, name: user.name}});
  members.push({name: "No Filter", id: null});

  const choreList = ref(store.household.chores.filter(chore => chore.assigneeId))
  const unassignedList = ref(store.household.chores.filter(chore => !chore.assigneeId));

  const deleteDialogOpen = ref(false);
  const deleteDialogChore = ref(null);
  const assignDialogOpen = ref(false);
  const assignDialogChore = ref(null);
  const completeDialogOpen = ref(false);
  const completeDialogChore = ref(false);

  function changeView() {
    listMode.value = !listMode.value;
  }

  function userInitials(userId) {
    let filterResult = store.household.users.filter(user => user.id == userId)
    if(filterResult.length == 1) {
      return filterResult[0].name.substring(0, 1)
    }
    return "N/A"
  }

  function updateChore(choreId) {
    router.push({ name: 'editChore', params: {id: choreId}})
  }

  function promptDelete(chore) {
    deleteDialogChore.value = chore;
    deleteDialogOpen.value = true
  }

  function cancelDelete() {
    deleteDialogOpen.value = false
    deleteDialogChore.value = null
  }

  async function deleteChore(choreId) {
    const result = await FetchService.deleteChore(choreId)
    deleteDialogOpen.value = false
    deleteDialogChore.value = null
    console.log(result)
    choreList.value = choreList.value.filter(chore => chore.id != choreId)
    unassignedList.value = unassignedList.value.filter(chore => chore.id != choreId)
    store.household.chores = store.household.chores.filter(chore => chore.id != choreId)

    //TODO: add toaster that confirms it was deleted
  }

  function assignToSelfPrompt(chore) {
    assignDialogChore.value = chore;
    assignDialogOpen.value = true;
  }

  function choreAssignable(difficulty) {
    return store.user.role == 'leader' || store.user.difficulty >= difficulty;
  }

  function cancelAssign() {
    assignDialogOpen.value = false
    assignDialogChore.value = null
  }

  async function assignToSelf(chore) {
    let choreForDatabase = { ...chore };
    choreForDatabase.assigneeId = store.user.id;

    const result = await FetchService.editChore(chore.id, choreForDatabase);

    assignDialogOpen.value = false;
    assignDialogChore.value = null;

    console.log(result)
    choreList.value.push(choreForDatabase)
    unassignedList.value = unassignedList.value.filter(listChore => listChore.id != chore.id);
    store.household.chores.filter(listChore => listChore.id == chore.id).forEach(listChore => listChore.assigneeId = store.user.id)

    //TODO: add toaster to confirm the chore was able to be assigned
  }

  function completeChorePrompt(chore) {
    completeDialogChore.value = chore;
    completeDialogOpen.value = true;
  }

  function cancelComplete() {
    completeDialogOpen.value = false;
    completeDialogChore.value = null
  }

  async function completeChore(chore) {
    //TODO: Add points to the user upon chore completion
    const result = await FetchService.deleteChore(chore.id)
    completeDialogOpen.value = false
    completeDialogChore.value = null
    console.log(result)
    choreList.value = choreList.value.filter(listChore => listChore.id != chore.id)
    store.household.chores = store.household.chores.filter(listChore => listChore.id != chore.id)

    //TODO: add a toaster to confirm that the chore was completed.
  }

  function filterChores() {
    if(filterUserId.value) {
      choreList.value = store.household.chores.filter(chore => chore.assigneeId == filterUserId.value)
    } else {
      choreList.value = store.household.chores.filter(chore => chore.assigneeId)
    }
  }
</script>

<style scoped>
  .list-append {
    width: 100px;
  }
</style>