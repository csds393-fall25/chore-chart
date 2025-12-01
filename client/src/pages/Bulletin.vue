<template>
  <v-sheet color="navy" class="fill-height pr-0">
    <v-container>
      <v-row class="mb-3 text-h4 text-sm-h2 pl-3">
        <div>{{ store.household.name }}'s Bulletin Board</div>
      </v-row>
      <v-row class="pl-3">
        <v-btn 
          id="addButton" 
          @click="addPost()"
          color="secondary"
        >Add Post</v-btn>
      </v-row>

      <v-row class="mb-3">
        <v-col cols="12" sm="6" md="4"
          v-for="(item) in itemsList"
          :key="item.id"
        >
          <v-card>
            <v-card-text class="text-body-1 mb-0 pb-0">
              <div
                v-for="(line) in contentLines(item.content)"
                :key="line.key"
              >{{ line.line }}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn id="like" @click="likePost(item.id, item.likeCount)" :text=" item.likeCount + ' Likes'">
            </v-btn>
             <v-btn  
              v-if="item.authorId == store.user.id" 
              id="delete" 
              @click="deletePost(item.id)"
              variant="elevated"
              color="error"
              text="Delete">
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog 
      data-testid="dialog"
      v-model="showDialog" 
      max-width="500"
    >
      <v-card>
        <v-card-item>
          <v-card-title>Create Post</v-card-title>
        </v-card-item>
        <v-textarea data-testid="text" :error-messages="errorMessages.text" v-model="text" label = "Post content"> </v-textarea>
        <v-card-actions>
          <v-btn
            variant="elevated"
            color="secondary"
            @click="post()"
            id="PostButton"
          >
            Post
          </v-btn>
          <v-btn
            variant="elevated"
            color="error"
            @click="cancel()"
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
   const errorMessages = ref({text: ""})

  const usersAvatar = ref(store.avatars.find((avatar) => avatar.userId == store.user.id))
  const mounted = ref(false)

  const tooExpensiveDialogOpen = ref(false)

  onMounted(async () => {
    //get bulletin board items
    let result = await FetchService.fetchPosts(store.household.id)
    store.bulletin.items = result
    itemsList.value = store.bulletin.items
    
  })

  function contentLines(content) {
    return content.split("\n").map((line, index) => {
      return {key: index, line: line};
    });
  }

  function addPost(){
    showDialog.value = true


  }

  async function post(){

    if(!text.value){
      errorMessages.value.text = "Post must have a message"
      return
    }
    let item = {
        content: text.value,
        authorId: store.user.id,
        householdId: store.household.id
    }
    let post = await FetchService.createPost(item)
    let result = await FetchService.fetchPosts(store.household.id)
    store.bulletin.items = result
    itemsList.value = store.bulletin.items
    showDialog.value = false
    text.value = ""
    return post

    
  }

  async function deletePost(id){
    let result2 = await FetchService.deletePost(id)
    let result = await FetchService.fetchPosts(store.household.id)
    store.bulletin.items = result
    itemsList.value = store.bulletin.items
    return result2


  }

  async function likePost(id, likes){
    let likeResult = await FetchService.likePost(id, (likes+1) )

    let result = await FetchService.fetchPosts(store.household.id)
    store.bulletin.items = result
    itemsList.value = store.bulletin.items
    return likeResult


  }

  function cancel(){
    errorMessages.value.text = ""
    showDialog.value = false
  }

 
</script>

<style scoped>
img {
  width: 90%;
  margin: auto;
}
</style>