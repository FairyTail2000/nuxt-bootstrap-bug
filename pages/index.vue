<template>
  <div class="container">
    <div>
      <SubnetIPForm/>
    </div>
    <div style="margin-top: 1em">
      <SubnetForm/>
    </div>
    <div style="margin-top: 1em">
      <IPForm/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IPForm from '~/components/IPForm.vue'
import SubnetForm from '~/components/SubnetForm.vue'
import SubnetIPForm from '~/components/SubIPForm.vue'

export default Vue.extend({
  layout: 'standard',
  components: {
    SubnetIPForm,
    SubnetForm,
    IPForm
  }
})
</script>

<style lang="sass" scoped>
.container
  min-height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
</style>
