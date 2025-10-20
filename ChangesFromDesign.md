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