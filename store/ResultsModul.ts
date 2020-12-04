import { Result } from '@/things/Result'

export const state = () => {
  return {
    results: ([] as Result[])
  }
}

export const mutations = {
  addResult (state: any, result: Result) {
    state.results.push(result)
  },
  clear (state: any) {
    state.results = []
  }
}

export const actions = {
  fillResults ({ commit }: any) {
    commit('addResult', { subnet: 1, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.0', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 23, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.1', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 32, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.2', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.3', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 2, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.4', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 3, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.5', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.6', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.7', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 4, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.8', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.9', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.10', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.11', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 5, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.12', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.13', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.14', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.15', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 11, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.16', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.17', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 17, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.18', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
    commit('addResult', { subnet: 8, maskPattern: '11111111.11111111.11111111.11111111', ip: '1.1.1.19', possibleAddresses: '0', lowestUsable: '0', lowest: '0', highestUsable: '0', highest: '0' })
  }
}

export const getters = {
  getResults (state: any): Array<Result> {
    return state.results
  }
}
