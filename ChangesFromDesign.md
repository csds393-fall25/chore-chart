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