<template>
  <div id="SubIPForm">
    <h2>{{ this.$lang(this).main.form.subipformtitle }}</h2>
    <b-input-group size="lg">
      <b-form-input id="subip-input-field" ref="subip-input-field" v-model="ip" placeholder="IP & Subnetmask" @keypress="this.onPress" />
      <b-input-group-append>
        <b-button ref="confirm" variant="outline-primary" @click="this.onClick">
          {{ this.$lang(this).main.form.calcButton }}
        </b-button>
      </b-input-group-append>
    </b-input-group>

    <small id="subip-input-field-help">{{ this.$lang(this).main.form.subipformhint }}</small>
    <b-modal id="resultmodal" ref="resultmodal" ok-only>
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
import { Result } from '@/things/Result'
import { getHighestAddress, getHighestUsableAddress, getLowestAddress, getLowestUsableAddress, suffixToBinary, binaryToDDN, DDNToBinary } from '@/things/Conversion'
// eslint-disable-next-line @typescript-eslint/no-unused-vars,import/named,no-unused-vars
import { BvModal } from 'bootstrap-vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'SubIPForm',
  components: {},
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
    onPress (event: KeyboardEvent) {
      if (event.code.toLowerCase() === 'enter') {
        (this.$refs.confirm as any).click()
      }
    },
    onClick () {
      if (this.ip.length < 9) {
        this.$bvToast.toast((this.$lang(this)?.main.errors.incomp as string), {
          title: 'Error',
          variant: 'danger',
          autoHideDelay: 3000
        })
        return
      }

      if (!this.ip.includes('/')) {
        this.$bvToast.toast((this.$lang(this)?.main.errors.missed as string), {
          variant: 'danger',
          title: 'Error',
          autoHideDelay: 3000
        })
        return
      }

      this.result = []

      const mask = parseInt(this.ip.substring(this.ip.indexOf('/') + 1))
      const ip = this.ip.substring(0, this.ip.indexOf('/'))
      let possibleAddresses: string
      let maskPattern: string

      {
        const tmp = suffixToBinary(mask)
        this.result.push(`${this.$lang(this)?.main.result.ddn}: ${binaryToDDN(tmp).join('.')}`)
        maskPattern = DDNToBinary(binaryToDDN(tmp).join('.')).join(' ')
        const p = Math.pow(2, 32 - mask).toString().split('').reverse()
        const matched = p.join('').match(/.{1,3}/g)?.join('.').split('').reverse()
        possibleAddresses = matched ? matched.join('') : ''
      }

      this.result.push(`${this.$lang(this)?.main.result.pattern}: ${maskPattern}`)
      this.result.push(`${this.$lang(this)?.main.result.possib}: ${possibleAddresses}`)
      this.result.push(`${this.$lang(this)?.main.result.laddress}: ${getLowestAddress(mask, ip).join('.')}`)
      this.result.push(`${this.$lang(this)?.main.result.haddress}: ${getHighestAddress(mask, ip).join('.')}`)
      this.result.push(`${this.$lang(this)?.main.result.luaddress}: ${getLowestUsableAddress(mask, ip).join('.')}`)
      this.result.push(`${this.$lang(this)?.main.result.huaddress}: ${getHighestUsableAddress(mask, ip).join('.')}`)

      const toStore: Result = {
        highest: getHighestAddress(mask, ip).join('.'),
        highestUsable: getHighestUsableAddress(mask, ip).join('.'),
        lowest: getLowestAddress(mask, ip).join('.'),
        lowestUsable: getLowestUsableAddress(mask, ip).join('.'),
        possibleAddresses,
        ip,
        maskPattern,
        subnet: mask
      }
      this.$store.commit('ResultsModul/addResult', toStore)
      this.$bvModal.show('resultmodal')
      if (!this.disableClear) {
        this.ip = ''
      }
    }
  }
})
</script>
