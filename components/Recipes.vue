<template>
  <div class="recipes">
    <b-modal ref="modal" :visible="visible" ok-only title="Recipe" centered>
      <h3>{{ this.current.title }}</h3>
      <h4>Ingredients</h4>
      <ol>
        <li v-for="(item, index) in current.ingredients" :key="index">
          {{ item }}
        </li>
      </ol>

      <h4>Steps</h4>
      <ol>
        <li v-for="(item, index) in current.steps" :key="index">
          {{ item }}
        </li>
      </ol>
    </b-modal>
    <b-list-group v-if="recipes.length !== 0">
      <b-list-group-item v-for="(item, index) in recipes" :key="index" class="d-flex justify-content-between align-items-center" button @click="show($event, index)">
        {{ item.title }}
        <div id="icons">
          <download-icon varient="primary" @click="generatePDF($event, index)"/>
          <trash-icon variant="danger" @click="remove($event, index)"/>
        </div>
      </b-list-group-item>
    </b-list-group>
    <span v-else>No Recipes saved</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { jsPDF } from 'jspdf'
import { mapState } from 'vuex'
import { BIconTrash, BIconDownload } from 'bootstrap-vue'

export default Vue.extend({
  name: 'Recipes',
  components: {
    'trash-icon': BIconTrash,
    'download-icon': BIconDownload
  },
  data: () => {
    return {
      visible: false,
      fields: [
        {
          key: 'title',
          sortable: true,
          label: 'Title'
        },
        {
          key: ''
        }
      ],
      current: {
        title: '',
        steps: [],
        ingredients: []
      }
    }
  },
  computed: {
    ...mapState('Recipes', {
      recipes: (state: any) => state.recipes
    })
  },
  methods: {
    show (_event: MouseEvent, index: number) {
      this.current.title = this.recipes[index].title
      this.current.ingredients = this.recipes[index].ingredients
      this.current.steps = this.recipes[index].steps;
      (this.$refs.modal as any).show()
    },
    remove (event: MouseEvent, index: number) {
      event.preventDefault()
      event.stopPropagation()
      this.$store.commit('Recipes/remove', index)
    },
    generatePDF (event: MouseEvent, _index: number) {
      event.preventDefault()
      event.stopPropagation()
      // eslint-disable-next-line new-cap
      const document = new jsPDF()
      document.text('Hi!', 10, 10)
      document.save('test.pdf')
      // dom-to-image?
      // html2canvas?
      // manual generation?
    }
  }
})
</script>

<style scoped lang="sass">
  #icons
    display: inline
</style>
