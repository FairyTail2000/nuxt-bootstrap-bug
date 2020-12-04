<template>
  <div id="SubnetForm">
    <h2>{{ this.$lang(this).main.form.subformtitle }}</h2>
    <b-input-group size="lg">
      <b-form-input id="subnet-input-field" ref="subnet-input-field" v-model="subnet" placeholder="Subnetmask" @keypress="this.onPress" />
      <b-input-group-append>
        <b-button ref="confirm" variant="outline-primary" @click="this.onClick">
          {{ this.$lang(this).main.form.calcButton }}
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <small>{{ this.$lang(this).main.form.subformhint }}</small>
    <b-modal id="subresultmodal" ref="subresultmodal" ok-only auto-focus-button="ok">
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
import { DDNToBinary, getLowestUsableAddress, getLowestAddress, getHighestUsableAddress, getHighestAddress, binaryToDDN, suffixToBinary } from '@/things/Conversion'
import { Result } from '@/things/Result'
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'SubnetForm',
  data (): {subnet: string; result: Array<string>} {
    return {
      subnet: '',
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
      let mask: string
      let binary: string
      let suffix: string
      let possibleAddresses: string
      if (/^\/\d{1,2}$/.test(this.subnet)) {
        suffix = this.subnet
        mask = binaryToDDN(suffixToBinary(parseInt(this.subnet.replaceAll('/', '')))).join('.')
        binary = DDNToBinary(mask).join(' ')
      } else if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(this.subnet)) {
        mask = this.subnet
        binary = DDNToBinary(mask).join(' ')
        suffix = `/${DDNToBinary(mask).join('').replaceAll('0', '').length}`
      } else {
        this.$bvToast.toast((this.$lang(this)?.main.errors.nvalsub as string), {
          title: 'Error',
          variant: 'danger',
          autoHideDelay: 3000
        })
        return
      }

      {
        const p = Math.pow(2, 32 - parseInt(suffix.replace('/', ''))).toString().split('').reverse()
        const matched = p.join('').match(/.{1,3}/g)?.join('.').split('').reverse()
        possibleAddresses = matched ? matched.join('') : ''
      }

      const ip = '1.1.1.1'
      this.result = []
      this.result.push(`${this.$lang(this)?.main.result.ddn}: ${binaryToDDN(binary).join('.')}`)
      this.result.push(`${this.$lang(this)?.main.result.pattern}: ${binary}`)
      this.result.push(`${this.$lang(this)?.main.result.possib}: ${possibleAddresses}`)
      this.result.push(`${this.$lang(this)?.main.result.laddress}: ${getLowestAddress(parseInt(suffix.replaceAll('/', '')), ip).join('.')}`)
      this.result.push(`${this.$lang(this)?.main.result.haddress}: ${getHighestAddress(parseInt(suffix.replaceAll('/', '')), ip).join('.')}`)
      this.result.push(`${this.$lang(this)?.main.result.luaddress}: ${getLowestUsableAddress(parseInt(suffix.replaceAll('/', '')), ip).join('.')}`)
      this.result.push(`${this.$lang(this)?.main.result.huaddress}: ${getHighestUsableAddress(parseInt(suffix.replaceAll('/', '')), ip).join('.')}`)
      const toStore: Result = {
        highest: getHighestAddress(parseInt(suffix.replaceAll('/', '')), ip).join('.'),
        highestUsable: getHighestUsableAddress(parseInt(suffix.replaceAll('/', '')), ip).join('.'),
        lowest: getLowestAddress(parseInt(suffix.replaceAll('/', '')), ip).join('.'),
        lowestUsable: getLowestUsableAddress(parseInt(suffix.replaceAll('/', '')), ip).join('.'),
        possibleAddresses,
        ip,
        maskPattern: binary,
        subnet: parseInt(suffix.replaceAll('/', ''))
      }

      if (!this.disableClear) {
        this.subnet = ''
      }

      this.$store.commit('results/addResult', toStore)
      this.$bvModal.show('subresultmodal')
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
