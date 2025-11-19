<template>
  <v-sheet color="navy" class="fill-height pr-0">
    <v-container>
      <v-row style = "margin-bottom: 2%;">
        <v-col cols="8"  class="pb-0 pt-0">
          <div class="text-subtitle-1">{{ store.household.name }} </div>
          <div class="text-subtitle-1">Join Code: {{ store.household.joinCode }} </div>
        </v-col>
      
        <v-col cols="4" sm="6" md="2" offset-sm="6" offset-md="1" class="pr-0 pl-0 pt-0 mb-1">
          <!-- <div class="pr-0 mr-0"> -->
            <v-btn
              color="secondary"
              class="mr-0 mt-1"
              @click="leaveHousehold()"
              block
            >
              Leave
            </v-btn>

            <v-dialog data-testid="dialog" v-model="showDialog" width="500">
        <v-card title="Join or Create a new household" max-width="400">
          <v-text-field data-testid="houseName" :error-messages="errorMessages.household"  v-model = "householdName"  label =  "Enter household name for new household or join code for existing one"></v-text-field>
          <v-card-actions>
             <v-btn id = "test" @click="cancel()" data-testid="cancelButton" > cancel
            </v-btn>
            <v-btn id = "newHouse" @click="createNewHousehold()" > Create New
            </v-btn>
            <v-btn id = "existingHouse" @click="joinNewHousehold()" > Join Existing
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog data-testid="dialog" v-model="showLastToLeaveDialog" width="500">
        <v-card title="You are the last member in your household!" max-width="400">
          <p>If you leave, your household will be deleted</p>
          <v-card-actions>
             <v-btn id = "test" @click="cancel()" data-testid="cancelButton" > cancel
            </v-btn>
            <v-btn id = "newHouse" @click="switchDialogs" > Okay
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
          <!-- </div> -->
        </v-col>
      </v-row>

            
 <div class="bg-primary text-center text-h5 pb-2 pt-2 mb-2">Leaders</div>
      <v-list 
        class="pb-0 pt-0"
        :key = "showDialog"
      
      >
        <v-list-item
          v-for="(chore) in leaders"
          :key="chore.id"
          class="border-b-thin"
           variant="outlined"
        >
          <template
            v-slot:prepend
          >
            <v-avatar color="primary">
              <span class="text-h5">{{ userInitials(chore.name) }}</span>
            </v-avatar>
          </template>

          <template v-slot:default>
            <v-row>
              <v-col cols="8">
                {{ chore.name }}
              </v-col>
              <v-col cols="4">
                {{ chore.totalPoints}} pts
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
               v-if="store.user.role == 'leader' && chore.id != store.user.id"
                block
                color="secondary"
                density="compact"
                class="mt-1 mb-1"
                @click = "changeToMember(chore.id)"
                 
              >
                Make Member
              </v-btn>
        
            </div>
          </template>
        </v-list-item>



        
      </v-list >
 <div class="bg-primary text-center text-h5 pb-2 pt-2 mt-2">Members</div>
      <v-list class = "pt-0 pb-0">
        
        <v-list-item
          v-for="(chore) in members"
          :key="chore.id"
          class="border-b-thin"
           variant="outlined"
        >
          <template
            v-slot:prepend
          >
            <v-avatar color="primary">
              <span class="text-h5">{{ userInitials(chore.name) }}</span>
            </v-avatar>
          </template>

          <template v-slot:default>
            <v-row>
              <v-col cols="8">
                {{ chore.name }}
              </v-col>
              <v-col cols="4">
                {{ chore.totalPoints}} pts
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
               v-if="store.user.role == 'leader' && chore.id != store.user.id"
                block
                color="secondary"
                density="compact"
                class="mt-1 mb-1"
                @click = "changeToLeader(chore.id)"
                 
              >
                Make Leader
              </v-btn>
             
             </div>
          </template>
        </v-list-item>
      </v-list>
    </v-container>
    </v-sheet>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { useAppStore } from '@/stores/app';
  import { useRouter } from 'vue-router'
  import FetchService from '../FetchService.js'

  const store = useAppStore()

  const listMode = ref(true);
  const errorMessages = ref({household: ""})
  const joinCode = ref()
  const showLastToLeaveDialog = ref(false)
  const lastFlag = ref(false)

  const members = ref(store.household.users.filter((user) => user.role == 'member'))
  const leaders = ref(store.household.users.filter((user) => user.role == 'leader'))


  const showDialog = ref(false);
  const isJoin = ref(true)
  const householdName = ref()


  function userInitials(name) {
    return name.substring(0,1)
  }

 
   function leaveHousehold(){
    if (members.value.length == 1){
       showLastToLeaveDialog.value = true;
       lastFlag.value = true
    
    }
    else{
      showDialog.value = true
    }
  
    
   }
   async function joinNewHousehold(){
    console.log("Join new")
    console.log(householdName.value)
    let house =  await FetchService.fetchHouseholdByJoin(householdName.value) 
    console.log("house")
    console.log(house)
    let lastHouseId = store.household.id
    if(!house){
      errorMessages.value.household = "Join code does not exist" 
    }
    else{
      store.household.id = house.id
      store.household.name = house.name
      store.household.joinCode = house.joinCode
      const result = await FetchService.updateUser(store.user.id, {householdId: house.id} );
      householdName.value = ""
      store.household = await FetchService.fetchHousehold(house.id);
      members.value = store.household.users.filter(user => user.role == 'member')
    leaders.value = store.household.users.filter(user => user.role == 'leader')
      showDialog.value = false
      errorMessages.value.household= ""
      if (lastFlag){
        await FetchService.deleteHousehold(lastHouseId)

      }
    }
   }

   function cancel(){
    showDialog.value = false
    showLastToLeaveDialog.value = false
    errorMessages.value.household = ""
    householdName.value = ""
   }

  async function createNewHousehold(){
    let lastHouseId = store.household.id
    if (!householdName.value || householdName.value.length > 50 || !(householdName.value.match(/\.*[A-Z]\.*/)  || householdName.value.match(/\.*[a-z]\.*/))){
      errorMessages.value.household = "Household name must be below 50 characters and have at least 1 letter"
      return false
    }
    const household = {
      name: householdName.value
    }

    let house = await FetchService.createHousehold(household)
    store.household.id = house.id
    store.household.name = house.name
    store.household.joinCode = house.joinCode
    joinCode.value = house.joinCode
    const result = await FetchService.updateUser(store.user.id, {householdId: house.id} );
    householdName.value = ""
    store.household = await FetchService.fetchHousehold(house.id);

    members.value = store.household.users.filter((user) => user.role == 'member')
    leaders.value = store.household.users.filter((user) => user.role == 'leader')
    showDialog.value = false
    errorMessages.value.household = ""
       if (lastFlag){
        await FetchService.deleteHousehold(lastHouseId)

      }
    }

    function switchDialogs(){
      showLastToLeaveDialog.value = false
      showDialog.value = true
    }

    function changeToLeader(id){
      console.log("HI")
      FetchService.updateUser(id, {role: 'leader' })
      store.household.users.find((user)=> user.id == id ).role ='leader'
      members.value = store.household.users.filter((user) => user.role == 'member')
      leaders.value = store.household.users.filter((user) => user.role == 'leader')
    }

      function changeToMember(id){
      console.log("HI")
      FetchService.updateUser(id, {role: 'member' })
      store.household.users.find((user)=> user.id == id ).role ='member'
      members.value = store.household.users.filter((user) => user.role == 'member')
      leaders.value = store.household.users.filter((user) => user.role == 'leader')
            console.log(members.value)
            console.log(leaders.value)
    }



   
</script>

<style scoped>
  .list-append {
    width: 100px;
  }
</style>