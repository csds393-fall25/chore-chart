<template>
    <v-sheet color="navy" class="fill-height pr-3">
      <v-form class="pa-5">
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">*</span>Name: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0">
            <v-text-field
              placeholder="Name"
              required
              variant="outlined"
              id="name"
              v-model="chore.name"
              :error-messages="errorMessages.name"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
              ></v-text-field>
              <div v-else class="text-subtitle-1">{{ chore.name }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold">Description: </div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" class="mb-0 mt-0">
            <v-textarea
              placeholder="Description"
              variant="outlined"
              id="description"
              v-model="chore.description"
              :error-messages="errorMessages.description"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-textarea>
            <p v-else class="text-subtitle-1">{{chore.description}}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">*</span>Difficulty: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0">
            <v-select
              placeholder="Difficulty"
              required
              variant="outlined"
              id="difficulty"
              v-model="chore.difficulty"
              :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
              :error-messages="errorMessages.difficulty"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-select>
            <p v-else class="text-subtitle-1">{{chore.difficulty}}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">*</span>Location: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0">
            <v-select
              placeholder="Location"
              required
              variant="outlined"
              id="location"
              v-model="chore.location"
              :items="['Kitchen', 'Dining Room', 'Living Room', 'Bedroom', 'Outside', 'Laundry Room', 'Bathroom', 'Office', 'Basement', 'Other']"
              :error-messages="errorMessages.location"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-select>
            <p v-else class="text-subtitle-1">{{chore.location}}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">*</span>Estimated Time To Complete (minutes): </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0">
            <v-text-field
              placeholder="minutes"
              required
              variant="outlined"
              id="estimatedTime"
              type="number"
              v-model="chore.estimatedTime"
              :error-messages="errorMessages.estimatedTime"
              tooltip="The time to complete the chore in minutes"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
              ></v-text-field>
              <div v-else class="text-subtitle-1">{{ chore.estimatedTime }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold">Due Date: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0">
            <v-text-field
              type="date"
              required
              variant="outlined"
              id="dueDate"
              v-model="chore.dueDate"
              :error-messages="errorMessages.dueDate"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
              ></v-text-field>
              <div v-else class="text-subtitle-1">{{ chore.dueDate }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">*</span>Assigned To: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0">
            <v-select
              placeholder="No One"
              required
              variant="outlined"
              id="assignedTo"
              v-model="chore.assigneeId"
              :items="members"
              item-title="name"
              item-value="id"
              :error-messages="errorMessages.location"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-select>
            <p v-else class="text-subtitle-1">{{store.household.users.filter(user => user.id == chore.value.assigneeId)[0].name}}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">
          <v-col cols="3">
            <v-btn 
              color="secondary" 
              @click="createChore()"
              block 
              v-if="props.viewMode == 'create'">
              Create
            </v-btn>
            <v-btn 
              color="secondary" 
              @click="updateChore()"
              block 
              v-else>
              Save
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn 
              color="error" 
              block>Cancel</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
</template>
<script setup>
  import { ref, defineProps } from 'vue';
  import { useAppStore } from "../stores/app.js";
  import { useRouter } from 'vue-router';
  import FetchService from '../FetchService.js'

  const store = useAppStore();
  const props = defineProps({
    viewMode: String,
    choreId: Number,
  });
  const router = useRouter();

  if(props.viewMode == "edit" && store.user.role != 'leader') {
    router.push({
      name: 'viewChore',
      params: { choreId: props.choreId }
    })
    //TODO: add a toaster to indicate why it rerouted
  }

  const members = store.household.users
    .filter(user => store.user.role == 'leader' || user.id == store.user.id)
    .map(user => { return {id: user.id, name: user.name}});
  members.push({name: "No One", id: null});
  console.log(members)

  const errorMessages = ref({
    name: '',
    description: '',
    difficulty: '',
    location: '',
    estimatedTime: '',
    dueDate: '',
    assignee: ''
  });

  const chore = ref({});

  if(props.viewMode == "create") {
    chore.value = {
      name: "",
      description: "",
      difficulty: 10,
      location: "",
      estimatedTime: 0,
      dueDate: '',
      repeat: false,
      householdId: store.user.householdId,
      assigneeId: null,
    };
  } else {
    const filterResult = store.household.chores.filter(householdChore => householdChore.id == props.choreId);
    console.log(filterResult);
    if(filterResult.length == 1) {
      chore.value = filterResult[0];
    } else {
      //TODO: add a toast to indicate that the chore was not found
      console.log("no chore with that id is in the household")
    }
  }

  if(chore.value.householdId != store.user.householdId) {
    router.push({ name: 'home' });
    //TODO: add a toaster to indicate why it rerouted
  }

  function validateChore() {
    var valid = true;

    //Validate that the chore has a name
    if(!chore.value.name) {
      valid = false;
      errorMessages.value.name = "Please enter a name for the chore"
    } else {
      errorMessages.value.name = ''
    }

    //Validate that the chore has a difficulty level
    if(!chore.value.difficulty) {
      valid = false;
      errorMessages.value.difficulty = "Please enter a difficulty level";
    } else {
      errorMessages.value.difficulty = ''
    }

    //Validate that the chore has a location specified
    if(!chore.value.location) {
      valid = false;
      errorMessages.value.location = "Please enter a location";
    } else {
      errorMessages.value.location = ''
    }

    //Validate that the chore has an estimated completion time
    if(!chore.value.estimatedTime && chore.value.estimatedTime != 0) {
      valid = false;
      errorMessages.value.estimatedTime = "Please enter how long you believe it will take to complete the chore";
    } else if(isNaN(parseInt(chore.value.estimatedTime)) || chore.value.estimatedTime <= 0) {
      valid = false;
      errorMessages.value.estimatedTime = "Please enter a positive value for the amount of time it will take to complete the chore";
    } else {
      errorMessages.value.estimatedTime = '';
    }

    //Validate that the due date is before the current date
    if(chore.value.dueDate) {
      const dueDate = new Date(chore.value.dueDate);
      const currentDate = new Date();
      if(dueDate < currentDate) {
        valid = false;
        errorMessages.value.dueDate = "The due date must be after today";
      } else {
        errorMessages.value.dueDate = ''
      }
    } else {
      errorMessages.value.dueDate = ''
    }

    //TODO: send a toast if it is not valid
    
    return valid;
  }

  async function createChore() {
    if(validateChore()) {
      //TODO: create chore in the database and update the household with it

      const choreForDatabase = {
        name: chore.value.name,
        description: chore.value.description,
        difficulty: chore.value.difficulty,
        location: chore.value.location,
        estimatedTime: parseInt(chore.value.estimatedTime),
        dueDate: new Date(chore.value.dueDate),
        repeat: chore.value.repeat,
        householdId: chore.value.householdId,
        assigneeId: chore.value.assigneeId
      }

      console.log(choreForDatabase)

      const result = await FetchService.createChore(choreForDatabase);
      console.log(result)
      
      store.household.chores.push(choreForDatabase);

      router.push({ name: 'home'});
    }
  }

  function updateChore() {
    if(validateChore()) {
      //TODO: update the chore in the database and update the household with it
      console.log("update chore")
      console.log(chore)
    }
  }
</script>