<!--suppress XmlInvalidId -->
<template>
  <div class="container">
    <h1>Trips</h1>
    <h3>Add Trip</h3>
    <AddTrip/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AddTrip from "~/components/AddTrip.vue"

export default Vue.extend({
  name: "index",
  components: {
    AddTrip
  },
  layout: "standard"
})
</script>

<style scoped lang="sass">
  .container
    padding-left: initial
    padding-right: initial
</style>
