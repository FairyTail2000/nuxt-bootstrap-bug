import Trip, { Car, Category, Driver } from "~/things/Trip"

interface IState {
  trips: Trip[];
  drivers: Driver[];
  cars: Car[];
  categories: Category[];
}

export const state = () => {
  return {
    trips: [],
    drivers: [],
    cars: [],
    categories: []
  }
}

export const mutations = {
  addTrip (state: IState, value: Trip) {
    state.trips.push(value)
  },
  addDriver (state: IState, value: Driver) {
    state.drivers.push(value)
  },
  addCar (state: IState, value: Car) {
    state.cars.push(value)
  },
  addCategory (state: IState, value: Category) {
    state.categories.push(value)
  },
  removeTrip (state: IState, value: number|string) {
    if (typeof value === "number") {
      state.trips.splice(value, 1)
    } else {
      state.trips = state.trips.filter((val: Trip) => val.unid !== value)
    }
  },
  removeDriver (state: IState, value: number|string) {
    if (typeof value === "number") {
      state.drivers.splice(value, 1)
    } else {
      state.drivers = state.drivers.filter((val: Driver) => val.unid !== value)
    }
  },
  removeCar (state: IState, value: number|string) {
    if (typeof value === "number") {
      state.cars.splice(value, 1)
    } else {
      state.cars = state.cars.filter((val: Car) => val.unid !== value)
    }
  },
  removeCategory (state: IState, value: number|string) {
    if (typeof value === "number") {
      state.categories.splice(value, 1)
    } else {
      state.categories = state.categories.filter((val: Category) => val.unid !== value)
    }
  },
  clearTrips (state: IState) {
    state.trips = []
  },
  clearCars (state: IState) {
    state.cars = []
  },
  clearDrivers (state: IState) {
    state.drivers = []
  },
  clearCategories (state: IState) {
    state.categories = []
  }
}

export const actions = {
  clearAll (state: any) {
    state.commit("clearCars")
    state.commit("clearDrivers")
    state.commit("clearTrips")
    state.commit("clearCategories")
  }
}

export const getters = {
  trips (state: IState): Trip[] {
    return state.trips
  },
  drivers (state: IState): Driver[] {
    return state.drivers
  },
  cars (state: IState): Car[] {
    return state.cars
  },
  categories (state: IState): Category[] {
    return state.categories
  }
}
