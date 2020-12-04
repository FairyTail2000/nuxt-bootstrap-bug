<template>
  <div class="container">
    <b-form id="form">
      <!--suppress XmlInvalidId -->
      <label for="title"><span class="h4">Title</span></label>
      <b-input
        id="title"
        v-model="title"
        required
        placeholder="Title"
        autocomplete="title"
        trim
      />
      <h4>Ingredients</h4>
      <!-- Ingredients -->
      <div class="ingredient-container">
        <ol>
          <li v-for="(item, index) in ingredients" :key="index">
            <b-input v-model="ingredients[index]" placeholder="Ingredient"/>
          </li>
        </ol>
        <b-button variant="primary" pill @click="addIngredient_slot">
          <b-icon id="ingredient-add" icon="plus-circle"/> Add Ingredient
        </b-button>
      </div>

      <h4>Steps</h4>
      <!-- Steps + button -->
      <div class="step-container">
        <ol>
          <li v-for="(item, index) in steps" :key="index">
            <b-input v-model="steps[index]" placeholder="Step"/>
          </li>
        </ol>
        <b-button variant="primary" pill @click="addStepSlot">
          <b-icon id="steps-add" icon="plus-circle"/> Add Step
        </b-button>
      </div>
      <b-button pill variant="primary" @click="save">
        {{ $lang(this).recipe.add.save }}
      </b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BIconPlusCircle } from 'bootstrap-vue'

export default Vue.extend({
  name: 'RecipeAddComponent',
  components: {
    'b-icon': BIconPlusCircle
  },
  data () {
    return {
      title: '',
      ingredients: [],
      steps: []
    }
  },
  methods: {
    save (_event: MouseEvent) {
      this.$store.commit('Recipes/addRecipe', {
        steps: this.steps,
        ingredients: this.ingredients,
        title: this.title
      })

      this.ingredients = []
      this.steps = []
      this.title = ''
    },
    addIngredient_slot (_event: MouseEvent) {
      // @ts-ignore
      this.ingredients.push('')
    },
    addStepSlot (_event: MouseEvent) {
      // @ts-ignore
      this.steps.push('')
    }
  }
})
</script>

<style scoped lang="sass">
  .step-container
    margin-top: 1em
    margin-bottom: 1em

  .ingredient-container
    margin-top: 1em
    margin-bottom: 1em

  #title
    margin-top: 0.5em

  ol
    li
      margin-bottom: 0.2em
</style>
