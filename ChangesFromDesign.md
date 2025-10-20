# Overall
## Vuetify
We are using the Vuetify materials library instead of the Nuxt materials library because more of our members are familliar with vuetify.

# Chore
## Cancel
Added a cancel function that cancels the update or create. This method was missed in the design specification.

## Enter Edit
Added an enterEdit function that allows a household leader to enter edit mode for the chore from the view page. This method was missed in the design specification.

## Retrieve Chore
Added a retreiveChore method that retrieves the chore from the household with the given choreId and viewMode. This method was missed in the design specification because we did not know that the router would require this to update when the route changed between edit and view mode.

# ChoreDashboard
## filterToUser
This boolean attribute is not included because it was found to be unnecessary.

## unassignedList
This is a list of unassgined chores that was added to be able to display the unassigned chores all together at the bottom of the page. This was missed in the design specification.

## viewDetails
This method is now unecessary because the router is able to switch to the details view without an extra function.

## Extra attributes
Two extra attributes were needed for each of the assign to self dialog, the delete dialog, and the complete dialog. One of the attributes stores whether the dialog should be open and the other stores the chore that the dialog is acting with. These attributes were missed in the design specification.

## userInitials
This function is only needed temporarily until we are able to implement the avatar component. This function retrieves the initials of the user assigned to the chore to display on the avatar instead of an image.

## choreAssignable
This function helps determine if the chore is assignable to the user. It is used to determine if the user is a leader, or if the users maximum difficulty level is high enough that they can complete the chore.

# FetchService
This class helps the frontend code make calls to the api by making a set of methods for the frontend code to call. This was missed in the design specification because we thought each component would handle these calls themselves, but it is less error prone to have standard methods defined for all of the components to use.