<template>
    <v-sheet color="navy" class="fill-height pr-3">
      <v-form class="pa-5">
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold">Name: </div>
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
              <div v-else class="text-body-1">{{ chore.name }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0 pb-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0 pb-0">
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
            <div v-else class="text-body-1">
              <div
                v-for="(line) in viewDescription"
                :key="line.key"
              >{{ line.line }}</div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold">Difficulty: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0">
            <v-select
              placeholder="Difficulty"
              required
              variant="outlined"
              id="difficulty"
              data-testid="difficulty"
              v-model="chore.difficulty"
              :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
              :error-messages="errorMessages.difficulty"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-select>
            <p v-else class="text-body-1">{{chore.difficulty}}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold">Location: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0">
            <v-select
              placeholder="Location"
              required
              variant="outlined"
              id="location"
              data-testid="location"
              v-model="chore.location"
              :items="['Kitchen', 'Dining Room', 'Living Room', 'Bedroom', 'Outside', 'Laundry Room', 'Bathroom', 'Office', 'Basement', 'Other']"
              :error-messages="errorMessages.location"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-select>
            <p v-else class="text-body-1">{{chore.location}}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold">Estimated Time To Complete (minutes): </div>
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
              <div v-else class="text-body-1">{{ chore.estimatedTime }}</div>
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
              <div v-else class="text-body-1">{{ chore.dueDate ? chore.dueDate.substring(5, 7) + "/" + chore.dueDate.substring(8, 10) + "/" + chore.dueDate.substring(0, 4) : "" }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
          <v-col cols="12" sm="3" class="mb-0 mt-0">
            <div class="text-subtitle-1 font-weight-bold">Assigned To: </div>
          </v-col>
          <v-col cols="12" sm="9" class="mb-0 mt-0">
            <v-select
              placeholder="No One"
              required
              variant="outlined"
              id="assigneeId"
              data-testid="assigneeId"
              v-model="chore.assigneeId"
              :items="members"
              item-title="name"
              item-value="id"
              :error-messages="errorMessages.asignee"
              v-if="props.viewMode == 'create' || props.viewMode == 'edit'"
            ></v-select>
            <p v-else class="text-body-1">{{ viewAssignee }}</p>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0" v-if="props.viewMode == 'create' || props.viewMode == 'edit'">
          <v-col cols="3">
            <v-btn 
              color="secondary" 
              @click="checkChore()"
              id="createButton"
              block 
              v-if="props.viewMode == 'create'">
              Create
            </v-btn>
            <v-btn 
              color="secondary" 
              @click="checkChore()"
              id="updateButton"
              block 
              v-else>
              Save
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn 
              color="error" 
              @click="cancel()"
              id="cancelButton"
              block>Cancel</v-btn>
          </v-col>
        </v-row>
        <v-row class="mb-0 mt-0" v-else-if="store.user.role == 'leader'">
          <v-col cols="3">
            <v-btn
              color="secondary"
              id="editButton"
              @click="enterEdit()"
              block
            >
            Edit
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <!-- Difficulty Warning Dialog -->
      <v-dialog 
        v-model="difficultyDialogOpen" 
        max-width="750"
        data-testid="difficultyDialog"
      >
        <v-card>
          <v-card-text>This chore is above the maximum difficulty level for the person you are assigning it to.</v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="4" class="pb-0 pt-0" v-if="store.user.role=='member'"></v-col>
              <v-col cols="4" class="pb-0 pt-0">
                <v-btn
                  block
                  @click="cancelDifficulty()"
                  id="cancelDifficultyButton"
                >
                  Edit Chore
                </v-btn>
              </v-col>
              <v-col cols="4" class="pb-0 pt-0">
                <v-btn
                  color="secondary"
                  variant="elevated"
                  id="leaveUnassignedButton"
                  block
                  @click="leaveUnassigned(completeDialogChore)"
                >
                  Leave Unassigned
                </v-btn>
              </v-col>
              <v-col cols="4" class="pb-0 pt-0" v-if="store.user.role == 'leader'">
                <v-btn
                  color="secondary"
                  variant="elevated"
                  id="assignAnywayButton"
                  block
                  @click="assignChoreAnyway(completeDialogChore)"
                >
                  Assign Anyway
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-sheet>
</template>
<script setup>
  import { ref, defineProps, watch } from 'vue';
  import { useAppStore } from "../stores/app.js";
  import { useRouter, useRoute } from 'vue-router';
  import FetchService from '../FetchService.js'
  import { useToast } from 'vue-toastification'

  const store = useAppStore();
  const toast = useToast()
  const props = defineProps({
    viewMode: String,
    choreId: Number,
  });
  const router = useRouter();
  const route = useRoute();
  const difficultyDialogOpen = ref(false);

  if(props.viewMode == "edit" && store.user.role != 'leader') {
    router.push({
      name: 'viewChore',
      params: { id: props.choreId }
    })
    
    toast.error("You cannot edit a chore if you are not a leader")
  }

  const members = store.household.users
    .filter(user => store.user.role == 'leader' || user.id == store.user.id)
    .map(user => { return {id: user.id, name: user.name}});
  members.push({name: "No One", id: null});

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
  const viewDescription = ref([])
  const viewAssignee = ref("")
  retrieveChore(props.viewMode, props.choreId);

  //handle id changing
  watch(
    () => route.params.id,
    (newId, oldId) => {
      retrieveChore(props.viewMode, newId)
    }
  )
  //handle changing between view modes
  watch(
    () => route.name,
    (newName, oldName) => {
      if(newName == "editChore" && store.user.role != 'leader') {
        router.push({
          name: 'viewChore',
          params: { id: props.choreId }
        })
        toast.error("You cannot edit a chore if you are not a leader")
      }

      let viewMode;
      if(newName == 'editChore') {
        viewMode = 'edit'
      } else if(newName == 'viewChore') {
        viewMode = 'view'
      } else {
        viewMode = 'create'
      }
      retrieveChore(viewMode, props.choreId)
    }
  )

  function retrieveChore(viewMode, choreId) {
    if(viewMode == "create") {
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
      const filterResult = store.household.chores.filter(householdChore => householdChore.id == choreId);
      if(filterResult.length == 1) {
        chore.value = {...filterResult[0]};
        const choreDate = new Date(chore.value.dueDate);
        chore.value.dueDate = choreDate.toLocaleDateString('en-CA');
      } else {
        toast.error("That chore was not found in your household")
        console.log("no chore with " + choreId + " id is in the household")
        return {};
      }
    }

    if(chore.value.householdId != store.user.householdId) {
      router.push({ name: 'home' });
      toast.error("That chore was not found in your household")
    }

    //Create the values needed to display description and assignee in view mode
    viewDescription.value = chore.value.description.split("\n").map((line, index) => {
      return {key: index, line: line};
    });
    
    const filterAssigneeResult = store.household.users.filter(user => user.id == chore.value.assigneeId)
    if(filterAssigneeResult.length == 1) {
      viewAssignee.value = filterAssigneeResult[0].name;
    } else {
      viewAssignee.value = "No One";
    }

    return chore.value;
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
    } else if(chore.value.difficulty < 1 || chore.value.difficulty > 10) {
      valid = false;
      errorMessages.value.difficulty = "The difficulty value must be between 1-10";
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
    if(!chore.value.dueDate) {
      valid = false;
      errorMessages.value.dueDate = "Please enter a due date";
    } else {
      const dueDate = new Date(chore.value.dueDate + " EST");
      const currentDate = new Date();
      if(dueDate < currentDate) {
        valid = false;
        errorMessages.value.dueDate = "The due date must be after today";
      } else {
        errorMessages.value.dueDate = ''
      }
    }
    
    return valid;
  }

  async function createChore() {
    if(validateChore()) {
      const choreForDatabase = {
        name: chore.value.name,
        description: chore.value.description,
        difficulty: chore.value.difficulty,
        location: chore.value.location,
        estimatedTime: parseInt(chore.value.estimatedTime),
        dueDate: new Date(chore.value.dueDate + " EST"),
        repeat: chore.value.repeat,
        householdId: chore.value.householdId,
        assigneeId: chore.value.assigneeId
      }

      const result = await FetchService.createChore(choreForDatabase);

      if(result) {
        store.household.chores.push(result);

        toast.success("Chore created successfully")
      } else {
        toast.error("Something went wrong. The chore was unable to be created.")
      }

      router.push({ name: 'home'});
      return result;
    }
  }

  async function updateChore() {
    //TODO: fix dates possibly being 1 off based on timezone
    if(validateChore()) {
      const choreForDatabase = {
        id: chore.value.id,
        name: chore.value.name,
        description: chore.value.description,
        difficulty: chore.value.difficulty,
        location: chore.value.location,
        estimatedTime: parseInt(chore.value.estimatedTime),
        dueDate: new Date(chore.value.dueDate + " EST"),
        repeat: chore.value.repeat,
        householdId: chore.value.householdId,
        assigneeId: chore.value.assigneeId
      }

      const result = await FetchService.editChore(props.choreId, choreForDatabase);

      if(result) {
        toast.success("Chore updated successfully")

        var choreIndex = -1;
        for(var index = 0; index < store.household.chores.length; index++) {
          if(store.household.chores[index].id == props.choreId) {
            choreIndex = index
          }
        }

        store.household.chores[choreIndex] = choreForDatabase;
      } else {
        toast.error("Something went wrong. The chore was unable to be updated.")
      }

      router.push({ name: 'viewChore', params: {id: props.choreId}});
      return result;
    }
  }

  function cancel() {
    if(props.viewMode == 'edit') {
      router.push({ name: 'viewChore', params: {id: props.choreId}})
    } else {
      router.push({ name: 'home' })
    }
  }

  function enterEdit() {
    router.push({ name: 'editChore', params: {id: props.choreId}})
  }

  async function leaveUnassigned() {
    chore.value.assigneeId = null
    difficultyDialogOpen.value = false;
    if(props.viewMode == 'edit') {
      await updateChore()
    } else {
      await createChore()
    }
  }

  async function assignChoreAnyway() {
    difficultyDialogOpen.value = false;
    if(props.viewMode == 'edit') {
      return await updateChore()
    } else {
      return await createChore()
    }
  }

  function cancelDifficulty() {
    difficultyDialogOpen.value = false;
  }

  async function checkChore() {
    if(validateChore()) {
      if(chore.value.assigneeId && store.household.users.find((user) => user.id == chore.value.assigneeId) && store.household.users.find((user) => user.id == chore.value.assigneeId).difficulty < chore.value.difficulty) {
        difficultyDialogOpen.value = true;
        return 'too difficult'
      } else {
        if(props.viewMode == 'edit') {
          await updateChore()
          return 'edit'
        } else {
          await createChore()
          return 'create'
        }
      }
    } else {
      return 'invalid';
    }
  }
</script>