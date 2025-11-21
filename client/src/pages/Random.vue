<template>
  <v-sheet class="w-100 fill-height" color="primary">
    <div class="text-h2">Random Assignment</div>
    <v-row>
        <v-col cols="4">
            <v-btn
                color="secondary"
            >
                Re-randomize
            </v-btn>
        </v-col>
        <v-col cols="4">
            <v-btn
                color="secondary"
            >
                Assign
            </v-btn>
        </v-col>
        <v-col cols="4">
            <v-btn
                color="error"
            >
                Cancel
            </v-btn>
        </v-col>
    </v-row>
    <div class="w-100 text-align-center text-h5 bg-navy">Chores to Assign</div>
    <v-list>
      <v-list-item color="secondary">
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
              {{ userName(chore.assigneeId) }}
            </v-col>
            <v-col cols="3">
              {{ chore.estimatedTime }} min
            </v-col>
          </v-row>
        </template>
      </v-list-item>
    </v-list>
    <div class="w-100 text-align-center text-h5 bg-navy">Still Unassigned</div>
    <v-list>
      <v-list-item color="secondary">
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
  </v-sheet>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useAppStore } from "../stores/app.js";
  import { useRouter, useRoute } from 'vue-router';
  import FetchService from '../FetchService.js'

  const store = useAppStore();
  const router = useRouter();

  const assignedChores = ref([{name: "hi", difficulty: 4, estimatedTime: 20, assigneeId: 2}])
  const unassignedChores = ref([{name: "hi", difficulty: 4, estimatedTime: 20, assigneeId: 2}])

  // onMounted(async () => {
    
  // })

  function userName(userId) {
    return store.household.users.find((user) => user.id == userId);
  }
</script>