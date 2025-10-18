<template>
    <v-sheet color="navy" class="fill-height pr-3">
      <v-form class="pa-5">
        <v-row class="mb-0 mt-0 pb-0 pt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0 pb-0 pt-0">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">*</span>Name: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0 pb-0 pt-0">
            <v-text-field
              placeholder="Name"
              required
              variant="outlined"
              id="name"
              :v-model="chore.name"
              :error-messages="errorMessages.name"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
              ></v-text-field>
              <div v-else class="text-subtitle-1">{{ chore.name }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0 pb-0 pt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0 pb-0 pt-0">
            <div class="text-subtitle-1 font-weight-bold">Description: </div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0 pb-0 pt-0">
          <v-col cols="12" class="mb-0 mt-0 pb-0 pt-0">
            <v-textarea
              placeholder="Description"
              variant="outlined"
              id="description"
              :v-model="chore.description"
              :error-messages="errorMessages.description"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-textarea>
            <p v-else class="text-subtitle-1">{{chore.description}}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0 pb-0 pt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0 pb-0 pt-0">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">*</span>Difficulty: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0 pb-0 pt-0">
            <v-combobox
              placeholder="Difficulty"
              required
              variant="outlined"
              id="difficulty"
              :v-model="chore.difficulty"
              :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
              :error-messages="errorMessages.difficulty"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-combobox>
            <p v-else class="text-subtitle-1">{{chore.difficulty}}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0 pb-0 pt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0 pb-0 pt-0">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">*</span>Location: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0 pb-0 pt-0">
            <v-combobox
              placeholder="Location"
              required
              variant="outlined"
              id="location"
              :v-model="chore.location"
              :items="['Kitchen', 'Dining Room', 'Living Room', 'Bedroom', 'Outside', 'Laundry Room', 'Bathroom', 'Office', 'Basement', 'Other']"
              :error-messages="errorMessages.location"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-combobox>
            <p v-else class="text-subtitle-1">{{chore.location}}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0 pb-0 pt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0 pb-0 pt-0">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">*</span>Estimated Time To Complete (minutes): </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0 pb-0 pt-0">
            <v-text-field
              placeholder="minutes"
              required
              variant="outlined"
              id="estimatedTime"
              :v-model="chore.estimatedTime"
              :error-messages="errorMessages.estimatedTime"
              tooltip="The time to complete the chore in minutes"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
              ></v-text-field>
              <div v-else class="text-subtitle-1">{{ chore.estimatedTime }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0 pb-0 pt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0 pb-0 pt-0">
            <div class="text-subtitle-1 font-weight-bold">Due Date: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0 pb-0 pt-0">
            <v-text-field
              type="date"
              required
              variant="outlined"
              id="dueDate"
              :v-model="chore.dueDate"
              :error-messages="errorMessages.dueDate"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
              ></v-text-field>
              <div v-else class="text-subtitle-1">{{ chore.dueDate }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0 pb-0 pt-0" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">
          <v-col cols="3">
            <v-btn color="secondary" block v-if="props.viewMode == 'create'">Create</v-btn>
            <v-btn color="secondary" block v-else>Save</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn color="error" block>Cancel</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
</template>
<script setup>
  import { ref, defineProps } from 'vue';
  import { useAppStore } from "../stores/app.js";
  import { useRouter } from 'vue-router';

  const store = useAppStore();
  const props = defineProps({
    viewMode: String,
    choreId: String,
  });
  const router = useRouter();

  if(props.viewMode == "edit" && store.user.role != 'leader') {
    router.push({
      name: 'viewChore',
      params: { choreId: props.choreId }
    })
    //TODO: add a toaster to indicate why it rerouted
  }

  const chore = ref({});
  const errorMessages = ref({
    name: '',
    description: '',
    difficulty: '',
    location: '',
    estimatedTime: '',
    dueDate: '',
    assignee: ''
  });

  if(props.viewMode == "create") {
    chore.value = {
      name: "",
      description: "",
      difficulty: 10,
      location: "",
      estimatedTime: 0,
      dueDate: '',
      repeat: false,
      householdId: '',
      assigneeId: ""
    };
  } else {
    //TODO: retreive chore from household
    //TODO: retrieve due date as a string instead of a date
    chore.value = {
      name: "Do the dishes",
      description: "do the dishes description",
      difficulty: 5,
      location: "Kitchen",
      estimatedTime: 1.5,
      dueDate: '10-29-2025',
      repeat: false,
      householdId: 2,
      assigneeId: ""
    }
  }

  if(chore.value.householdId != store.user.householdId) {
    router.push({ name: 'home' });
    //TODO: add a toaster to indicate why it rerouted
  }

  function validateChore() {
    var valid = true;
    if(!chore.value.name) {
      valid = false;
      errorMessages.name = "Please enter a name for the chore"
    }
    if(!chore.value.difficulty) {
      valid = false;
      errorMessages.difficulty = "Please enter a difficulty level";
    }
    if(!chore.value.location) {
      valid = false;
      errorMessages.location = "Please enter a location";
    }
    if(!chore.value.estimatedTime) {
      valid = false;
      errorMessages.estimatedTime = "Please enter how long you believe it will take to complete the chore";
    } else if(chore.value.estimatedTime < 0) {
      valid = false;
      errorMessages.estimatedTime = "Please enter a positive value for the amount of time it will take to complete the chore";
    }
    if(chore.value.dueDate) {
      const dueDate = new Date(chore.value.dueDate);
      const currentDate = new Date();
      if(dueDate < currentDate) {
        valid = false;
        errorMessages.dueDate = "The due date must be after today";
      }
    }

    //TODO: send a toast if it is not valid
    
    return valid;
  }

  function createChore() {
    if(validateChore()) {
      //TODO: create chore in the database and update the household with it
    }
  }

  function updateChore() {
    if(validateChore()) {
      //TODO: update the chore in the database and update the household with it
    }
  }
</script>