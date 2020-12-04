<!--suppress XmlInvalidId -->
<template>
  <div class="container">
    <b-modal id="addCarModal" title="Add Car" @ok="saveCar">
      <b-form>
        <label for="carName">Car Name</label>
        <b-input id="carName" v-model="name" required/>
      </b-form>
    </b-modal>
    <b-modal id="addDriverModal" title="Add Driver" @ok="saveDriver">
      <b-form validated>
        <label for="driverName">Driver Name</label>
        <b-input id="driverName" v-model="name" required/>
        <label for="birthday">Birthday</label>
        <b-datepicker id="birthday" v-model="birthday" required :max="new Date()"/>
      </b-form>
    </b-modal>
    <b-modal id="addCategoryModal" title="Add Category" @ok="saveCategory">
      <b-form validated>
        <label for="categoryName">Name</label>
        <b-input id="categoryName" v-model="name" required/>
        <label for="categoryComment">Comment</label>
        <b-input id="categoryComment" v-model="comment" required/>
      </b-form>
    </b-modal>

    <b-form :validated="validate">
      <label for="start">Start km</label>
      <b-input id="start" number required/>
      <label for="end">End km</label>
      <b-input id="end" number required/>

      <label for="start-datepicker">Choose a start date</label>
      <b-form-datepicker id="start-datepicker" v-model="StartDatepickerValue" class="mb-2"/>
      <label for="end-datepicker">Choose an end date</label>
      <b-form-datepicker id="end-datepicker" v-model="EndDatepickerValue" class="mb-2"/>
      <label for="start-timepicker">Choose a start time</label>
      <b-form-timepicker id="start-timepicker" v-model="StartTimePickerValue" class="mb-2"/>
      <label for="end-timepicker">Choose an end time</label>
      <b-form-timepicker id="end-timepicker" v-model="EndTimePickerValue" class="mb-2"/>
      <label for="startAddress">Start Address</label>
      <b-input id="startAddress" v-model="startAddress" placeholder="Start Address"/>
      <label for="endAddress">End Address</label>
      <b-input id="endAddress" v-model="endAddress" placeholder="End Address"/>

      <label>Car</label>
      <!--Jo wtf? -->
      <client-only>
        <b-form-select required>
          <b-form-select-option v-for="(car, index) in cars" :key="index" :value="index">
            {{ car.name }}
          </b-form-select-option>
          <b-form-select-option v-if="cars.length === 0" disabled :value="0">
            No Car added
          </b-form-select-option>
        </b-form-select>
      </client-only>
      <b-button v-b-modal:addCarModal class="bottom-margin" pill variant="primary">
        <BIconPlusCircle/> Add Car
      </b-button>
      <br>
      <label>Driver</label>
      <client-only>
        <b-form-select required>
          <b-form-select-option v-for="(driver, index) in drivers" :key="index" :value="index">
            {{ driver.name }}
          </b-form-select-option>
          <b-form-select-option v-if="drivers.length === 0" disabled :value="0">
            No Driver added
          </b-form-select-option>
        </b-form-select>
      </client-only>
      <b-button v-b-modal:addDriverModal class="bottom-margin" pill variant="primary">
        <BIconPlusCircle/> Add Driver
      </b-button>
      <br>
      <label>Category</label>
      <client-only>
        <b-form-select required>
          <b-form-select-option v-for="(category, index) in categories" :key="index" :value="index">
            {{ category.name }}
          </b-form-select-option>
          <b-form-select-option v-if="categories.length === 0" disabled :value="0">
            No Category added
          </b-form-select-option>
        </b-form-select>
      </client-only>
      <b-button v-b-modal:addCategoryModal class="bottom-margin" pill variant="primary">
        <BIconPlusCircle/> Add Category
      </b-button>
      <br>
      <b-button variant="primary" pill @click="save">
        Save
      </b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BIconPlusCircle } from 'bootstrap-vue'
import { mapState, mapActions } from 'vuex'
import { nanoid } from "nanoid"
import { Category, Driver } from "~/things/Trip"

export default Vue.extend({
  name: "AddTrip",
  components: {
    BIconPlusCircle
  },
  layout: "standard",
  data: () => {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    const maxDate = new Date(today)
    maxDate.setFullYear(minDate.getFullYear() + 1)

    const rightnow = `${now.getHours()}:${now.getMinutes()}`
    let lol = now.getHours()
    if (lol + 1 > 24) {
      lol = 0
    }
    const future = `${++lol}:${now.getMinutes()}`

    return {
      StartDatepickerValue: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
      EndDatepickerValue: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
      StartTimePickerValue: rightnow,
      EndTimePickerValue: future,
      min: minDate,
      max: maxDate,
      startAddress: "",
      endAddress: "",
      driver: 0,
      car: 0,
      name: "",
      validate: false,
      birthday: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`,
      comment: ""
    }
  },
  computed: {
    ...mapState({
      trips: (state: any) => state.Trip.trips,
      drivers: (state: any) => state.Trip.drivers,
      cars: (state: any) => state.Trip.cars,
      categories: (state: any) => state.Trip.categories
    })
  },
  methods: {
    save (_event: MouseEvent) {
      this.validate = !this.validate
    },
    saveCar (_event: MouseEvent) {
      this.$store.commit("Trip/addCar", {
        unid: nanoid(),
        name: this.name
      })
      this.name = ""
    },
    saveDriver (_event: MouseEvent) {
      const parts = this.birthday.split("-")
      const year = parseInt(parts[0])
      const month = parseInt(parts[1])
      const day = parseInt(parts[2])
      const date = new Date(year, month, day)
      const driver: Driver = { unid: nanoid(), birthday: date.getTime(), name: this.name }
      this.$store.commit("Trip/addDriver", driver)
      this.name = ""
    },
    saveCategory (_event: MouseEvent) {
      const cat: Category = {
        comment: this.comment,
        name: this.name,
        unid: nanoid()
      }
      this.$store.commit("Trip/addCategory", cat)
      this.name = ""
      this.comment = ""
    },
    ...mapActions({
      clearAll: "Trip/clearAll"
    })
  }
})
</script>

<style scoped lang="sass">
  .container
    padding-right: initial
    padding-left: initial

  .bottom-margin
    margin-bottom: 0.5em
    margin-top: 0.5em

  label
    margin-top: .3em
</style>
