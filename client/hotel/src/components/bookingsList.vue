<template>
  <div>
      <ul>
          <li v-for="(booking, index) in bookings" :key='index'>
              <h3>{{booking.name}}</h3>
              <p>{{booking.emailaddress}}</p>
              <p>{{booking.status}}</p>
              <button v-on:click="handleClickDelete">Delete</button>
          </li>
      </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
    name: "bookings-list",
    props: ['bookings'],
    methods: {
        deleteBooking: function() {
           BookingsService.deleteBooking(this.booking._id)
        .then(() => eventBus.$emit('booking-deleted', this.booking._id)) 
        }
    }

}
</script>

<style>

</style>