<template>
  <div id="IPForm">
    <h2>{{ this.$lang(this).main.form.ipformtitle }}</h2>
    <b-input-group size="lg">
      <b-form-input id="ip-input-field" ref="ip-input-field" v-model="ip" placeholder="IP Address" @keypress="this.onPress" />
      <b-input-group-append>
        <b-button ref="confirm" variant="outline-primary" @click="this.onClick">
          {{ this.$lang(this).main.form.calcButton }}
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <small>{{ this.$lang(this).main.form.ipformhint }}</small>
    <b-modal id="ipresultmodal" ref="ipresultmodal" ok-only auto-focus-button="ok">
      <template #modal-title>
        {{ this.$lang(this).main.result.title }}
      </template>

      <p v-for="(text, index) in result" :key="index">
        {{ text }}
      </p>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { DDNToBinary } from '~/things/Conversion'

export default Vue.extend({
  name: 'IPForm',
  data (): {ip: string; result: Array<string>} {
    return {
      ip: '',
      result: []
    }
  },
  computed: {
    ...mapState('options', {
      disableClear: (state: any) => state.options.disableClear
    })
  },
  methods: {
    onClick () {
      this.$data.result = []
      this.$data.result.push(`${this.$lang(this)?.main.result.ddn}: ${this.ip}`)
      this.$data.result.push(`${this.$lang(this)?.main.result.pattern}: ${DDNToBinary(this.ip).join('.')}`)
      this.$bvModal.show('ipresultmodal')

      if (!this.disableClear) {
        this.ip = ''
      }
    },
    onPress (event: KeyboardEvent) {
      if (event.code.toLowerCase() === 'enter') {
        (this.$refs.confirm as any).click()
      }
    }
  }
})
</script>

<style scoped>

</style>
