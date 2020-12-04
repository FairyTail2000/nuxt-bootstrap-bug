<template>
  <div class="settings">
    <h1 style="margin-bottom: 1em">
      {{ $lang(this).settings.title }}
    </h1>
    <b-form>
      <b-form-group :description="this.$lang(this).settings.settingsavehint">
        <b-form-checkbox
          id="checkbox"
          v-model="disableClear"
          style="margin-bottom: 1em"
          name="checkbox"
        >
          {{ $lang(this).settings.autoclear }}
        </b-form-checkbox>
        <b-form-input
          id="title-input"
          v-model="title"
          type="text"
          placeholder="Window title"
          trim
          debounce="1000"
        />
        <b-form-select v-model="language" :options="options"/>
      </b-form-group>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'standard',
  name: 'Settings',
  data () {
    return {
      disableClear: this.$store.getters['OptionsModule/getDisableClear'],
      title: '',
      language: this.$store.getters['OptionsModule/getLanguage'],
      options: [
        { value: 'de', text: 'German' },
        { value: 'en', text: 'English' }
      ]
    }
  },
  watch: {
    disableClear (newval: boolean) {
      this.$store.commit('OptionsModule/setDisableClear', newval)
    },
    title (newval: string) {
      this.$store.commit('OptionsModule/setWindowsTitle', newval)
    },
    language (newval: string) {
      this.$store.commit('OptionsModule/setLanguage', newval)
    }
  }
})
</script>

<style scoped lang="sass">
@media screen and (max-width: 500px)
  .settings
    width: 50%

@media screen and (min-width: 500px)
  .settings
    min-height: 100vh
    display: flex
    flex-direction: column
    align-items: center
    text-align: center

  #title-input
    margin-bottom: 1em
</style>
