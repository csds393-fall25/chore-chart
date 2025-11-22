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
              color="error"
              class="mr-0 mt-1"
              id = "leave"
              @click="leaveHousehold()"
              block
            >
              Leave
            </v-btn>
            
            <v-btn
              v-if="store.user.role == 'leader'"
              color="secondary"
              id="edit"
              class="mr-0 mt-1"
              @click="editHousehold()"
              block
            >
              Edit
            </v-btn>
            


            <v-dialog data-testid="dialog" v-model="showDialog" width="500">
        <v-card title="Join or Create a new household" max-width="400">
          <v-text-field class = "ml-2 mr-2" data-testid="houseName" :error-messages="errorMessages.household"  v-model = "householdName"  label =  "Enter a new name or an existing join code"></v-text-field>
          <v-card-actions>
             <v-btn id = "cancel" @click="cancel()" data-testid="cancelButton" > cancel
            </v-btn>
            <v-btn id = "newHouse" @click="createNewHousehold()" > Create New
            </v-btn>
            <v-btn id = "existingHouse" @click="joinNewHousehold()" > Join Existing
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog data-testid="lastToLeaveDialog" v-model="showLastToLeaveDialog" width="500">
        <v-card title="You are the last member in your household!" max-width="400">
          <p>If you leave, your household will be deleted</p>
          <v-card-actions>
             <v-btn id = "cancelLast" @click="cancel()" data-testid="cancelButton" > cancel
            </v-btn>
            <v-btn id = "newHouse" @click="switchDialogs" > Okay
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
          <v-dialog data-testid="confirmation" v-model="showConfirmation" width="500">
        <v-card title="You are changing the following:" max-width="400">
          <p>{} will become a {}</p>
          <v-card-actions>
             <v-btn id = "confirmationCancel" @click="cancel()" data-testid="cancelButton" > cancel
            </v-btn>
            <v-btn id = "changeRoles" @click="changeRoles()" > Proceed
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

         <v-dialog data-testid="ShowEditdialog" v-model="showEditDialog" width="500">
        <v-card title="Edit Household" max-width="400">
          <v-text-field class="ml-2 mr-2" data-testid="houseEditName" :error-messages="errorMessages.household"  v-model = "householdName"  label =  "Enter a household name"></v-text-field>
          <v-card-actions>
             <v-btn id = "cancelEdit" @click="cancel()" data-testid="cancelButton" > cancel
            </v-btn>
            <v-btn id = "editHouse" @click="editHouseholdData(store.household.id)" > Change Name
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog data-testid="lastLeaderDialog" v-model="showLastLeaderDialog" width="500">
        <v-card title="You are the last leader" max-width="400">
          <p>You must assign someone else a leader before you leave</p>
           <v-card-actions>
             <v-btn id = "lastLeaderCancel" @click="cancel()" data-testid="cancelButton" > cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
          <!-- </div> -->
        </v-col>
      </v-row>

            
 <div class="bg-primary text-center text-h5 pb-2 pt-2">Leaders</div>
     
 <v-list 
        class="pb-0 pt-0"
        :key = "showDialog"
      
      >
      <v-list-item
          class="border-b-thin h-25 bg-secondary "
           variant="outlined"
           
        >
          <template
            v-slot:prepend
          >
            <v-avatar></v-avatar>
          </template>

          <template v-slot:default>
            <v-row>
              <v-col cols="3">
                Name
              </v-col>
              <v-col cols="2">
                Difficulty
              </v-col>
              <v-col cols="3">
                Max Chore Time
              </v-col>
              <v-col cols="4">
                Points
              </v-col>
            </v-row>
          </template>

          <template
            v-slot:append
            min-width="8em"
          >
            <div
              class="list-append"
            >
             </div>
          </template>
        </v-list-item>
        <v-list-item
          v-for="(chore) in leaders"
          :key="chore.id"
          class="border-b-thin "
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
              <v-col cols="3">
                {{ chore.name }}
              </v-col>
              <v-col cols="2">
                {{ chore.difficulty }}
              </v-col>
              <v-col cols="3">
                {{ chore.maxChoreTime }} {{chore.maxChoreTime == 1 ? 'min' : 'mins'}}
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
                id="makeMember"
                density="compact"
                class="mt-1 mb-1"
                @click ="confirmation('member', chore.id)"
                min-width="8em"
                 
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
          class="border-b-thin bg-secondary"
           variant="outlined"
           
        >
          <template
            v-slot:prepend
          >
            <v-avatar></v-avatar>
          </template>

          <template v-slot:default>
            <v-row>
              <v-col cols="3">
                Name
              </v-col>
              <v-col cols="2">
                Difficulty
              </v-col>
              <v-col cols="3">
                Max Chore Time
              </v-col>
              <v-col cols="4">
                Points
              </v-col>
            </v-row>
          </template>

          <template
            v-slot:append
            min-width="8em"
          >
            <div
              class="list-append"
            >
             </div>
          </template>
        </v-list-item>
        
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
              <v-col cols="3">
                {{ chore.name }}
              </v-col>
              <v-col cols="2">
                {{ chore.difficulty }}
              </v-col>
              <v-col cols="3">
                {{ chore.maxChoreTime }} {{chore.maxChoreTime == 1 ? 'min' : 'mins'}}
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
                id="makeLeader"
                color="secondary"
                density="compact"
                class="mt-1 mb-1"
                @click = "confirmation('leader', chore.id)"
                min-width="8em"
                 
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
  const showLastLeaderDialog = ref(false)
  const members = ref(store.household.users.filter((user) => user.role == 'member'))
  const leaders = ref(store.household.users.filter((user) => user.role == 'leader'))
  const showEditDialog = ref(false)
  const showConfirmation = ref(false)
  const changeRole = ref(false)
  const roleChangingID = ref()
  const roleChanging = ref()


  const showDialog = ref(false);
  const isJoin = ref(true)
  const householdName = ref()


  function userInitials(name) {
    return name.substring(0,1)
  }

 
   function leaveHousehold(){
    if (members.value.length + leaders.value.length == 1){
       showLastToLeaveDialog.value = true;
       lastFlag.value = true
       console.log("BYE1")
    
    }
    else if(leaders.value.length == 1 && store.user.role == 'leader'){
      console.log("BYE")
        showLastLeaderDialog.value = true;
    }
    else{
      console.log("BYE3")
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
      console.log("JH")
      errorMessages.value.household = "Join code does not exist" 
    }
    else{
      console.log("efgq")
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
      console.log(lastFlag.value)
      if (lastFlag.value){
        console.log("bad")
        console.log(lastHouseId)
        await FetchService.deleteHousehold(lastHouseId)
        lastFlag.value = false

      }
    }
   }

   function cancel(){
    showDialog.value = false
    showLastToLeaveDialog.value = false
    errorMessages.value.household = ""
    householdName.value = ""
    showEditDialog.value = false
    showLastLeaderDialog.value = false
    showConfirmation.value = false
   }

  async function createNewHousehold(){
    let lastHouseId = store.household.id
    if (!householdName.value || householdName.value.length > 50 || ((!householdName.value.match(/\.*[A-Z]\.*/)  && !householdName.value.match(/\.*[a-z]\.*/)))){
      errorMessages.value.household = "Household name must be below 50 characters and have at least 1 letter"
      console.log(householdName.value)
    console.log("createNewHousehold")
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
       if (lastFlag.value){
         console.log("badCreate")
        console.log(lastHouseId)
        await FetchService.deleteHousehold(lastHouseId)
        lastFlag.value = false

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
      if(store.household.users.find((user)=> user.id == id )){
      store.household.users.find((user)=> user.id == id ).role ='member'
      }
      members.value = store.household.users.filter((user) => user.role == 'member')
      leaders.value = store.household.users.filter((user) => user.role == 'leader')
            console.log(members.value)
            console.log(leaders.value)
    }

    function editHousehold(){
      console.log("HI")
      showEditDialog.value = true;
    }
    
    function editHouseholdData(hid){
      console.log("LOOK HERE")
      console.log(hid)
       if (!householdName.value || householdName.value.length > 50 || ((!householdName.value.match(/\.*[A-Z]\.*/)  && !householdName.value.match(/\.*[a-z]\.*/)))){
        console.log("IN editHouseholdData")
      errorMessages.value.household = "Household name must be below 50 characters and have at least 1 letter"
      return false
    }
    let house = {id: hid, name: householdName.value}
    console.log("HIHI")
      FetchService.editHousehold(house)
      showEditDialog.value = false
      store.household.name = householdName
      errorMessages.value.household = ""


    }

    function confirmation(role, id){
      roleChangingID.value = id
      roleChanging.value = role
      showConfirmation.value = true


    }

    function changeRoles(){
      showConfirmation.value = false
      console.log("IN ChangeRoles")
      if (roleChanging.value == "leader"){
        console.log("IN LEADER")
        changeToLeader(roleChangingID.value)
      }
      else{
        changeToMember(roleChangingID.value)
      }

    }



   
</script>

<style scoped>
  .list-append {
    width: 100px;
  }
</style>