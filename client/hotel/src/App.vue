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
import bookingsService from './services/bookingsService';
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
    bookingsService.getBookings()
    .then(bookings => this.bookings = bookings)

    eventBus.$on('booking-added',(booking) => {
      // console.log('booking',booking)
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

#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}

</style>