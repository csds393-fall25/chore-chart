<template>
    <v-sheet color="navy" class="fill-height pr-3">
      <v-form class="pa-5">
        <v-row>
          <v-col cols="12" sm="3" md="2">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="mode == 'create' || mode == 'edit'">*</span>Title: </div>
          </v-col>
          <v-col cols="12" sm="9" md="6">
            <v-text-field
              placeholder="Title"
              required
              variant="outlined"
              id="title"
              v-model="chore.title"
              v-if="mode == 'create' || mode == 'edit'"
              ></v-text-field>
              <div v-else class="text-subtitle-1">{{ chore.title }}</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3" md="2">
            <div class="text-subtitle-1 font-weight-bold">Description: </div>
          </v-col>
          <v-col cols="12" sm="9" md="6">
            <v-textarea
              placeholder="Description"
              variant="outlined"
              id="description"
              v-model="chore.description"
              v-if="mode == 'create' || mode == 'edit'"
            ></v-textarea>
            <p v-else class="text-subtitle-1">{{chore.description}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3" md="2">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="mode == 'create' || mode == 'edit'">*</span>Difficulty: </div>
          </v-col>
          <v-col cols="12" sm="9" md="6">
            <v-combobox
              placeholder="Difficulty"
              required
              variant="outlined"
              id="difficulty"
              v-model="chore.difficulty"
              :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
              v-if="mode == 'create' || mode == 'edit'"
            ></v-combobox>
            <p v-else class="text-subtitle-1">{{chore.difficulty}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3" md="2">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="mode == 'create' || mode == 'edit'">*</span>Location: </div>
          </v-col>
          <v-col cols="12" sm="9" md="6">
            <v-combobox
              placeholder="Location"
              required
              variant="outlined"
              id="location"
              v-model="chore.location"
              :items="['Kitchen', 'Dining Room', 'Living Room', 'Bedroom', 'Outside', 'Laundry Room', 'Bathroom', 'Office', 'Basement', 'Other']"
              v-if="mode == 'create' || mode == 'edit'"
            ></v-combobox>
            <p v-else class="text-subtitle-1">{{chore.location}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3" md="2">
            <div class="text-subtitle-1 font-weight-bold"><span class="error" v-if="mode == 'create' || mode == 'edit'">*</span>Estimated Time To Complete: </div>
          </v-col>
          <v-col cols="12" sm="9" md="6">
            <v-text-field
              placeholder="hours"
              required
              variant="outlined"
              id="timeToComplete"
              v-model="chore.timeToComplete"
              v-if="mode == 'create' || mode == 'edit'"
              ></v-text-field>
              <div v-else class="text-subtitle-1">{{ chore.timeToComplete }}</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3" md="2">
            <div class="text-subtitle-1 font-weight-bold">Due Date: </div>
          </v-col>
          <v-col cols="12" sm="9" md="6">
            <v-text-field
              type="date"
              required
              variant="outlined"
              id="timeToComplete"
              v-model="chore.timeToComplete"
              v-if="mode == 'create' || mode == 'edit'"
              ></v-text-field>
              <div v-else class="text-subtitle-1">{{ chore.timeToComplete }}</div>
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
</template>
<script setup>
  const chore = {
    title: "title",
    description: "description",
    difficulty: 9,
    location: "kitchen",
    timeToComplete: 1.5,
    due: '',
    assign: ""
  }

  const mode = "create"
</script>