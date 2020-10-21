<template>
  <div id='app'>
    <h1>Hotel </h1>
    <bookings-form></bookings-form>
    <bookings-list :bookings='bookings'></bookings-list>
    <footer>Hotel app 2020</footer>
  </div>
</template>

<script>
import bookingsForm from './components/bookingsForm';
import bookingsList from './components/bookingsList';
import {eventBus} from './main.js';
export default {
  name: 'app',
  components: {
    'bookings-form':bookingsForm,
    'bookings-list':bookingsList
  },
  data() {
    return {
      bookings: []
    }
  },
  mounted(){
    

    eventBus.$on('booking-added',(booking) => {
      this.bookings.push(booking)
    }),
    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
  }
}
</script>

<style>

</style>