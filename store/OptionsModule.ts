export const state = () => {
  return {
    disableClear: false,
    windowTitle: 'Subnetting',
    language: 'en'
  }
}

export const mutations = {
  setDisableClear (state: any, value: boolean): void {
    state.disableClear = value
  },
  setWindowsTitle (state: any, value: string): void {
    state.windowTitle = value
  },
  setLanguage (state: any, language: string): void {
    state.language = language
  }
}

export const getters = {
  getDisableClear (state: any) {
    return state.disableClear
  },
  getLanguage (state: any) {
    return state.language
  },
  windowTitle (state: any) {
    return state.windowTitle
  }
}
