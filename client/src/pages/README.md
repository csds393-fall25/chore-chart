# Pages

Vue components in this directory represent major pages of the webpage.

## Adding a new page
When adding a new page, you need to:
- Create the vue file and whatever content you want it to have
- Update the router. The router likely already has the link to the page, so you just need to import the component to the router and edit the path you want to include the component. If you need props for your component follow [this page](https://router.vuejs.org/guide/essentials/passing-props) with whether you need a prop from the url or a default prop value.


