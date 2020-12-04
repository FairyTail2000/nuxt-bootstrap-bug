<template>
  <div class="container">
    <h1>{{ $lang(this).recipe.index.title }}</h1>
    <h3>{{ $lang(this).recipe.index.new }}</h3>
    <RecipeAddComponent/>
    <hr/>
    <h3>{{ $lang(this).recipe.index.existent }}</h3>
    <Recipes/>
    <!-- Popup template? -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RecipeAddComponent from '~/components/RecipeAddComponent.vue'
import Recipes from '~/components/Recipes.vue'

export default Vue.extend({
  name: 'index',
  layout: 'standard',
  components: {
    RecipeAddComponent,
    Recipes
  }
})
</script>

<style lang="sass" scoped>
  hr
    border: 0
    clear: both
    display: block
    width: 96%
    background-color: black
    height: 1px
</style>
