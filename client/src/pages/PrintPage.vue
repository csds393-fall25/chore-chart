<template>
  <v-sheet color="navy" class="fill-height pr-0 w-100">
    <v-container class="w-100">
      <v-row class="d-print-none">
        <v-col cols="12" sm="3" md="2" class="pb-0">
          <div class="text-subtitle-1">Filter: </div>
        </v-col>
        <v-col cols="12" sm="6" md="5" class="pb-0">
          <v-select
            variant="outlined"
            :items="members"
            item-title="name"
            item-value="id"
            data-testid="filteruserselect"
            v-model="filterUserId"
            id="filteruser"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="3" md="2" class="pl-0 pr-0 pb-0 mb-1">
          <v-btn
            id="filterbutton"
            color="secondary"
            block
            @click="filterChores()"
          >
            Filter
          </v-btn>
        </v-col>
        <v-col class="text-right">
          <v-btn
            id="printbutton"
            color="secondary"
            @click="printChoreChart()"
          >
            Print
          </v-btn>
        </v-col>
      </v-row>
      <v-sheet
        color="white"
        class="mt-2 w-100"
        id="tablesheet"
      >
        <table class="border-md border-black border-opacity-100 w-100" style="border-collapse: collapse;">
          <thead class="border-md border-black border-opacity-100">
              <tr class="border-md border-black border-opacity-100">
                  <th class="border-md border-black border-opacity-100 chore">Chore</th>
                  <th class="border-md border-black border-opacity-100 weekday">Sun</th>
                  <th class="border-md border-black border-opacity-100 weekday">Mon</th>
                  <th class="border-md border-black border-opacity-100 weekday">Tues</th>
                  <th class="border-md border-black border-opacity-100 weekday">Wed</th>
                  <th class="border-md border-black border-opacity-100 weekday">Thurs</th>
                  <th class="border-md border-black border-opacity-100 weekday">Fri</th>
                  <th class="border-md border-black border-opacity-100 weekday">Sat</th>
              </tr>
          </thead>
          <tbody class="border-md border-black border-opacity-100">
            <tr 
              class="border-md border-black border-opacity-100"
              v-for="(chore) in choreList"
              :key="chore.id"
            >
              <td class="border-md border-black border-opacity-100 pa-2">
                <div class="text-body-1 text-center w-100">{{ chore.name }}</div>
                <div class="text-caption text-center w-100 pt-2">{{ assignedToName(chore.assigneeId) }}</div>
              </td>
              <td class="border-md border-black border-opacity-100"></td>
              <td class="border-md border-black border-opacity-100"></td>
              <td class="border-md border-black border-opacity-100"></td>
              <td class="border-md border-black border-opacity-100"></td>
              <td class="border-md border-black border-opacity-100"></td>
              <td class="border-md border-black border-opacity-100"></td>
              <td class="border-md border-black border-opacity-100"></td>
            </tr>
          </tbody>
        </table>
      </v-sheet>
    </v-container>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAppStore } from '@/stores/app';
  const store = useAppStore()

  const filterUserId = ref(null);

  const members = store.household.users
    .map(user => { return {id: user.id, name: user.name}});
  members.push({name: "Unassigned", id: -1});
  members.push({name: "No Filter", id: null});

  const choreList = ref(store.household.chores);

  function assignedToName(assigneeId) {
    let filterResult = store.household.users.filter(user => user.id == assigneeId);
    if(filterResult.length == 1) {
      return filterResult[0].name;
    } else {
      return "____________"
    }
  }
  
  function filterChores() {
    if(filterUserId.value == null) {
      choreList.value = store.household.chores;
    } else if (filterUserId.value == -1) {
      choreList.value = store.household.chores.filter(chore => chore.assigneeId == null);
    } else {
      choreList.value = store.household.chores.filter(chore => chore.assigneeId == filterUserId.value);
    }
  }

  function printChoreChart() {
    window.print()
  }

</script>
<style scoped>
  table {
    border-collapse: collapse;
  }

  .weekday {
    width: 4em;
    min-width: 4em;
  }

  .chore {
    min-width: 15em;
  }

  #tablesheet {
    overflow-x:auto
  }

  @media print {
    #tablesheet {
      overflow-x: visible;
    }
  }
</style>