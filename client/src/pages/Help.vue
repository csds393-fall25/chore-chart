<template>
  <v-sheet color="navy" class="pl-5 pr-5">
    <div class="pt-2 text-primary-lighten-1 text-h4 text-sm-h3 text-md-h1 text-center">Welcome to ChoreChart!</div>
    <div class="mt-2 text-body1">With ChoreChart, you can organize your chores in a simple and engaging way! </div>
    <ul class="mt-2 ml-5">
      <li class="text-body-1">Assign chore to members of your household</li>
      <li class="text-body-1">When they complete a chore, they earn points</li>
      <li class="text-body-1">These points can be used to buy props for their avatar</li>
    </ul>
    <div class="mt-4 text-primary-lighten-1 text-h4 text-md-h2">Contents</div>
    <ul class="mt-2 ml-5">
      <li class="text-body-1"><a href="#glossary-heading" class="text-white">Glossary</a>
        <ul class="ml-5">
          <li class="text-body-1"><a href="#difficulty-heading" class="text-white">Difficulty</a></li>
          <li class="text-body-1"><a href="#estimated-time-heading" class="text-white">Estimated Time</a></li>
          <li class="text-body-1"><a href="#chores-heading" class="text-white">Chores</a></li>
          <li class="text-body-1"><a href="#points-heading" class="text-white">Points</a></li>
          <li class="text-body-1"><a href="#household-heading" class="text-white">Household</a></li>
          <li class="text-body-1"><a href="#members-heading" class="text-white">Members vs. Leaders</a></li>
        </ul>
      </li>
      <li class="text-body-1"><a href="#pages-heading" class="text-white">Pages</a>
        <ul class="ml-5">
          <li class="text-body-1"><a href="#dashboard-heading" class="text-white">Chore Dashboard</a></li>
          <li class="text-body-1"><a href="#profile-heading" class="text-white">Profile</a></li>
          <li class="text-body-1"><a href="#create-heading" class="text-white">Create Chores</a></li>
          <li class="text-body-1"><a href="#house-heading" class="text-white">House</a></li>
          <li class="text-body-1"><a href="#random-heading" class="text-white">Random</a></li>
          <li class="text-body-1"><a href="#print-heading" class="text-white">Print</a></li>
          <li class="text-body-1"><a href="#leaderboard-heading" class="text-white">Leaderboard</a></li>
          <li class="text-body-1"><a href="#store-heading" class="text-white">Store</a></li>
        </ul>
      </li>
    </ul>
    <div class="mt-4 text-primary-lighten-1 text-h4 text-md-h2" id="glossary-heading">Glossary</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="difficulty-heading">Difficulty</div>
    <div class="mt-2 text-body1">Each chore has a difficulty level which represents how hard the chore is to complete. These difficulties range from 1-10. 1 is the easiest and 10 is the hardest. Each user has a maximum difficulty level which represents the maximum difficulty level of a chore that they are able to be assigned. There are ways to assign a more difficult chore to a user, however all of them have a warning first and will be explained later.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="estimated-time-heading">Estimated Time</div>
    <div class="mt-2 text-body1">Estimated time is the amount of time a chore should take to complete. Each user has a maximum chore time which represents the maximum amount of time they are available to do chores each week. Users can be assigned chores past their maximum chore time, so this will not block them if they need to do more chores than the amount of time they specified.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="chores-heading">Chores</div>
    <div class="mt-2 text-body1">Chores each represent a task that a user is supposed to complete. Chores can either be assigned so that a specific user needs to complete them, or they can be left unassigned so that any user can assign the chore to themself and complete it.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="points-heading">Points</div>
    <div class="mt-2 text-body-1">ChoreChart has a points system to incentivize users to complete chores. There are 2 types of points: total points and current points. The total points represent all of the points the user has ever earned, while the current points represent the number of points the user has available to spend in the store. Users are able to gain points by completing chores. A chore that is completed before its due date earns the user 5 * (difficulty level of the chore) points while a chore completed after its due date earns the user 2 * (difficulty level of the chore) points. The user's current points are visible in the upper left corner under their name, and their total points are visible on the Leaderboard.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="household-heading">Household</div>
    <div class="mt-2 text-body1">All users are a part of a household. A household represents a group of users that have the same pool of chores. The chores in a household can only be assigned to members of that household, or they can remain unassigned. Users in the same household are able to see any of the chores in the household no matter who is assigned to complete them.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="members-heading">Members vs. Leaders</div>
    <div class="mt-2 text-body1">Users of choreChart are considered either a member or leader of a household. Members of households can create chores, assign chores to themselves, complete chores, and customize their avatar. Leaders have all the same abilities as members, except they can also assign chores to other users, edit and delete chores, and change the leader/member status of other users in their household. Upon account creation, if the user chooses to create a household, they are automatically a leader of that household. If the user chooses to join a household, they will become a member of that household.</div>
    <div class="mt-4 text-primary-lighten-1 text-h4 text-md-h2" id="pages-heading">Pages</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="dashboard-heading">Chore Dashboard</div>
    <div class="mt-2 text-body1">This page is accessible from the "Chore" button and is the home of all the chores created for the household. Users can filter the chores by specific people using the "filter" dropdown on the top of the page, as well as view the page in both a tile and list view by clicking the "Tile View" or "List View" button on the top of the page. If a user clicks the "My Chores" button it filters the chores to those assigned to the user.</div>
    <div class="mt-2 text-body1">The dashboard is also where the users are able to interact with chores in several ways. Users are able to view the details of a chore by clicking on it. To complete a chore that is assigned to them, users can click the "complete" button and then the user will gain the points for the chore. Users can also assign unassigned chores to themselves by clicking the "Assign" button. Household leaders also have the additional ability to edit and delete chores from this page.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="profile-heading">Profile</div>
    <div class="mt-2 text-body1">By clicking their name in the top left corner, users can access their profile information. This includes their name, number of points they have, email, estimated time they have to complete chores, and maximum difficulty. They can update their name, estimated time to complete chores, and maximum difficulty by clicking the "update' button. Users are also able to change their password by entering a new password, clicking the "update" button, and then confirming their old password. They can also delete their account from this page by clicking the "delete" button, or logout by clicking the logout button.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="create-heading">Create Chores</div>
    <div class="mt-2 text-body1">Users can create a chore from the "Create" page displayed on the left. They must input the name of a chore, the difficulty level of the chore, the location that the chore takes place, the estimated time it takes to complete that chore, and the date that chore is due. They may also enter an optional description for that chore or also assign it to someone. If the chore is not assigned to anyone, it will remain unassigned.</div>
    <div class="mt-2 text-body1">A member will not be able to create and assign a chore to themselves unless the chore's difficulty is at or below their maximum difficulty level. A leader can assign anyone a chore regardless of their difficulty level, however they will be warned if the chore is above the user's difficulty level.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="house-heading">House</div>
    <div class="mt-2 text-body-1">Users can view all the members of their household through the "House" page. The members of the household are listed separately between leaders and members, and their avatar, name, difficulty, max chore time, and points are listed. Users can view the name and join code of the household, and leaders are able to edit the household name. Users can leave the household by clicking the "Leave" button and entering a new household name or existing household's join code. Household leaders are also able to change the role of a different user to be a leader/member.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="random-heading">Random</div>
    <div class="mt-2 text-body1">This page is only available to household leaders and it is a way to assign the unassigned chores in the household randomly. When the page is opened, the unassigned chores in the household will be listed divided by whether the randomization was able to assign them or not. The random assignment will not assign a chore above a user's maximum difficulty level. It also won't assign chores to a user if the estimated time from the chores assigned to the user will go above the user's maximum chore time. If the household leader does not like the randomization, they are able to re-randomize using the button in the upper right. Once the household leader is happy with the randomization, they are able to assign the chores to the given users by using the "Assign" button.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="print-heading">Print</div>
    <div class="mt-2 text-body1">Users have the ability to print out a physical copy of their weekly chore chart. This chore chart will be printed with the chore, the user assigned to the chore (if there is no assignee, a blank line will be printed so that it can be filled in later), as well as the days of the week. This follows a popular physical chore charting method, which involves posting the chart in a public part of the house and marking off what day the chore was finished. The print page can also be filtered so that it only shows the chores assigned to a specific user. Once a user has filtered to their desired chore chart, they can click the "Print" button to print through their browser.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="leaderboard-heading">Leaderboard</div>
    <div class="mt-2 text-body1">The leaderboard is a way for the users in a household to see who has the most total points. This page shows an ordered list of the people in the household. This encourages the household to have friendly competition to see who can earn the most points and complete more chores.</div>
    <div class="mt-2 text-primary-lighten-1 text-h6 text-md-h4" id="store-heading">Store</div>
    <div class="mt-2 pb-3 text-body1">The store is where users are able to spend their current points to buy customizations for their avatar. When a user first creates their account, they have a default avatar, but once they have completed chores, they can view the available customizations in the store. Users are able to buy customizations and afterward, the user can equip the customization if they want to. The user can only have one customization of each type on their avatar. The available customizations are: background, face, hair, hat/hair accessory, shirt, and an extra accessory.</div>
  </v-sheet>
</template>

<script setup>

</script>
