<template>
  <v-sheet color="navy" class="fill-height pr-0">
    <v-container>
      <v-row class="mb-3 text-h2 pl-3">
        <div>{{ store.household.name }}'s Bulletin Board</div>
        <v-btn @click="addPost()">Add Post</v-btn>
      </v-row>


      <v-row class="mb-3">
        <v-col cols="12" sm="5" md="4"
          v-for="(item) in itemsList"
          :key="item.id"
        >
          <v-card>
            <v-card-text class="text-center text-body-1 mb-0 pb-0">
              {{ item.content }}
            </v-card-text>
            <v-card-actions>
                <v-btn id="like" @click="likePost(item.id, item.likeCount)" :text=" item.likeCount + ' Likes'">
            </v-btn>
             <v-btn  v-if="item.authorId == store.user.id" id="cancel" @click="deletePost(item.id)" text="Delete">
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog 
      v-model="showDialog" 
      max-width="500"
      data-testid="Add"
    >
      <v-card>
        <v-card-item>
          <v-card-title>Create Post</v-card-title>
        </v-card-item>
        <v-text-field v-model="text" label = "Post content"> </v-text-field>
        <v-card-actions>
            <v-btn
            @click="post()"
            id="PostButton"
          >
            Post
          </v-btn>
          <v-btn
            @click="showDialog = false"
            id="cancelButton"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useAppStore } from '@/stores/app'
  import FetchService from '../FetchService.js'

  const store = useAppStore()

  const ownedProps = ref([])
  const itemsList = ref([])
  const showDialog = ref(false)
  const title = ref()
  const text = ref()

  const usersAvatar = ref(store.avatars.find((avatar) => avatar.userId == store.user.id))
  const mounted = ref(false)

  const tooExpensiveDialogOpen = ref(false)

  onMounted(async () => {
    //get bulletin board items
    
  
    console.log("HERE")
    let result = await FetchService.fetchPosts()
    console.log(result)
    store.bulletin.items = result
    itemsList.value = store.bulletin.items
    
  })

  function isOwned(prop) {
    return ownedProps.value.some((ownedProp) => ownedProp == prop.id)
  }

  async function buyProp(prop) {
    if(store.user.currentPoints >= prop.cost) {
      let result = await FetchService.buyProp(store.user.id, prop.id)

      ownedProps.value.push(prop.id)
      store.user.currentPoints = result.currentPoints

      return true;
    } else {
      tooExpensiveDialogOpen.value = true;
      return false
    }
  }

  async function equipProp(prop) {
    let result = await FetchService.equipProp(store.user.id, prop)

    usersAvatar.value[prop.type] = prop.url;
    store.avatars.find((avatar) => avatar.userId == store.user.id)[prop.type] = prop.url

    return true;
  }

  function isEquipped(prop) {
    return Object.entries(usersAvatar.value).some((entry) => entry[1] == prop.url)
  }




  function addPost(){
    showDialog.value = true


  }

  async function post(){
    let item = {
        content: text.value,
      
        authorId: store.user.id
    }
    await FetchService.createPost(item)
    let result = await FetchService.fetchPosts()
    store.bulletin.items = result
    itemsList.value = store.bulletin.items
    showDialog.value = false

    
  }

  async function deletePost(id){
    console.log(id)
    await FetchService.deletePost(id)
    let result = await FetchService.fetchPosts()
    store.bulletin.items = result
    itemsList.value = store.bulletin.items


  }

  async function likePost(id, likes){
    console.log(id)
    await FetchService.likePost(id, (likes+1) )
    let result = await FetchService.fetchPosts()
    store.bulletin.items = result
    itemsList.value = store.bulletin.items


  }

 
</script>

<style scoped>
img {
  width: 90%;
  margin: auto;
}
</style>