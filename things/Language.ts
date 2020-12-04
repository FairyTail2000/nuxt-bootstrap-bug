import * as de from '~/assets/languages/de.json'
import * as en from '~/assets/languages/en.json'

export interface Language {
  main: {
    form: {
      subipformtitle: string;
      subformtitle: string;
      ipformtitle: string;
      subipformhint: string;
      subformhint: string;
      ipformhint: string;
      calcButton: string;
    };
    result: {
      ddn: string;
      pattern: string;
      possib: string;
      laddress: string;
      haddress: string;
      broadcast: string;
      luaddress: string;
      huaddress: string;
      title: string;
    };
    errors: {
      nvalsub: string;
      incomp: string;
      missed: string;
    };
  };
  history: {
    stateactions: {
      desc: string;
      fill: string;
      clear: string;
    };
    table: {
      title: string;
      colums: {
        subnet: string;
        ip: string;
        pattern: string;
        possib: string;
        laddress: string;
        haddress: string;
        broadcast: string;
        luaddress: string;
        huaddress: string;
      };
    };
  };
  settings: {
    title: string;
    autoclear: string;
    settingsavehint: string;
  };
  header: {
    home: string;
    history: string;
    settings: string;
    recipes: string;
  };
  recipe: {
    index: {
      title: string;
      new: string;
      existent: string;
    };
    add: {
      save: string;
    }
  };
}

export function getLang (code: string): Language | null {
  switch (code) {
    case 'de':
      // @ts-ignore
      return de
    case 'en':
      // @ts-ignore
      return en
    default:
      return null
  }
}

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install (Vue: any, options: {}) {
    Vue.prototype.$lang = function ({ $store }: Vue): Language | null {
      // @ts-ignore
      return getLang($store.getters['OptionsModule/getLanguage']).default
    }
  }
}
