import Recipe from '~/things/Recipe'

export const state = () => {
  return {
    recipes: []
  }
}

export const mutations = {
  addRecipe (state: any, value: Recipe) {
    state.recipes.push(value)
  },
  remove (state: any, value: number) {
    state.recipes.splice(value, 1);
  }
}

export const getters = {
  recipes (state: any) {
    return state.recipes
  }
}
