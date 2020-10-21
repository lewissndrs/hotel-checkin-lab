<template>
  <div id='form'>
      <form v-on:submit='addBooking' method='post'>
        <label for="name">Name:</label>
        <input type="text" id='name' v-model="name" required/>
        <label for="emailaddress">Email Address: </label>
        <input id='emailaddress' v-model="email" required/>
        <p>Check in now?</p>
        <label for="true">Yes</label>
        <input type="radio" value='true' name="check" id='true'>
        <label for="false">No</label>
        <input type="radio" value='false' name="check" id='false'>
        <input type="submit">
      </form>

  </div>
</template>

<script>
import BookingsService from '../services/bookingsService.js';
import {eventBus} from '../main.js';
export default {
    data(){
        return{
            name:"",
            email:"",
            bookedIn:false
        }
    },
    methods:{
        addBooking: function(e){
            e.preventDefault()
            const booking = {
                name: this.name,
                emailaddress: this.email,
                status: this.bookedIn
            }
            BookingsService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))
        }
    }
}
</script>

<style>

</style>