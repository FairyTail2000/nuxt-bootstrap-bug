<template>
  <div class="Header">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand>Subnetting Calculations</b-navbar-brand>
      <b-navbar-nav>
        <client-only>
          <b-nav-item>
            <b-nav-text>
              <b-link to="/">
                {{ this.$lang(this).header.home }}
              </b-link>
            </b-nav-text>
          </b-nav-item>
          <b-nav-item>
            <b-nav-text>
              <b-link to="/history">
                {{ this.$lang(this).header.history }}
              </b-link>
            </b-nav-text>
          </b-nav-item>
          <b-nav-item>
            <b-nav-text>
              <b-link to="/settings">
                {{ this.$lang(this).header.settings }}
              </b-link>
            </b-nav-text>
          </b-nav-item>
          <b-nav-item>
            <b-nav-text>
              <b-link to="/recipes/">
                {{ this.$lang(this).header.recipes }}
              </b-link>
            </b-nav-text>
          </b-nav-item>
          <b-nav-item>
            <b-nav-text>
              <b-link to="/triptracking/">
                Trips
              </b-link>
            </b-nav-text>
          </b-nav-item>
        </client-only>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  components: {}
})
</script>

<style scoped lang="sass">
  .Header
    min-height: 3em
</style>
