import Vue from 'vue'
import Plugin, { Language } from '~/things/Language'

Vue.use(Plugin)

//
// Vue Prototype Injections
//
declare module 'vue/types/vue' {
  interface Vue {
    // lang injection
    $lang: (self: Vue|any) => Language | null;
  }
}
