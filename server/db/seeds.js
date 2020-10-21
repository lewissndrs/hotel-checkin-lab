use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "John McKenna",
    emailaddress: "john@email.com",
    status: false
  },
  {
    name: "Lewis Saunders",
    emailaddress: "Lewis@email.com",
    status: false
  },
  {
    name: "AN Other",
    emailaddress: "Another@email.com",
    status: false
  }
]);