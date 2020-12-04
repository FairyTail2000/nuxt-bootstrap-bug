<template>
  <div class="History">
    <b-input-group :prepend="this.$lang(this).history.stateactions.desc">
      <b-button variant="primary" type="button" @click="$store.dispatch('ResultsModul/fillResults')">
        {{ $lang(this).history.stateactions.fill }}
      </b-button>
      <b-button variant="warning" type="button" @click="$store.commit('ResultsModul/clear')">
        {{ $lang(this).history.stateactions.clear }}
      </b-button>
    </b-input-group>
    <div>
      <b-table
        :caption-html="'<h1>' + $lang(this).history.table.title + '</h1>'"
        :caption-top="true"
        striped
        hover
        borderless
        responsive="md"
        sticky-header="40em"
        :items="items"
        :fields="fields"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'standard',
  data () {
    return {
      fields: [
        {
          key: 'subnet',
          sortable: true,
          label: this.$lang(this)?.history.table.colums.subnet
        },
        {
          key: 'ip',
          sortable: true,
          label: this.$lang(this)?.history.table.colums.ip
        },
        {
          key: 'maskPattern',
          sortable: true,
          label: this.$lang(this)?.history.table.colums.pattern
        },
        {
          key: 'possibleAddresses',
          sortable: true,
          label: this.$lang(this)?.history.table.colums.possib
        },
        {
          key: 'lowest',
          sortable: true,
          label: this.$lang(this)?.history.table.colums.laddress
        },
        {
          key: 'highest',
          sortable: true,
          label: this.$lang(this)?.history.table.colums.haddress
        },
        {
          key: 'lowestUsable',
          sortable: true,
          label: this.$lang(this)?.history.table.colums.luaddress
        },
        {
          key: 'highestUsable',
          sortable: true,
          label: this.$lang(this)?.history.table.colums.huaddress
        }
      ]
    }
  },
  computed: {
    items () {
      return this.$store.getters['ResultsModul/getResults']
    }
  }
})
</script>

<style scoped lang="sass">

</style>
