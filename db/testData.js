var Models = require('../cooklydatabase.js');

// Generate User Locations
Models.Location.build({
  state: 'TX',
  city: 'Houston',
  address: '123 Cherry Lane',
}).save();

Models.Location.build({
  state: 'NC',
  city: 'Fayetteville',
  address: '2014 Forrest Hills Drive',
}).save();

Models.Location.build({
  state: 'IL',
  city: 'Chicago',
  address: '808 South Shore Drive',
}).save();


// Generate Host Locations
Models.Location.build({
  state: 'FL',
  city: 'Miami',
  address: '457 Ocean Boulevard',
}).save();

Models.Location.build({
  state: 'LA',
  city: 'New Orleans',
  address: '510 Bourbon Street',
}).save();

Models.Location.build({
  state: 'NY',
  city: 'New York City',
  address: '106 Park Streed',
}).save();


// Generate Diners
Models.User.build({
  firstName: 'Neil',
  lastName: 'Armstrong',
  LocationId: 1
}).save();

Models.User.build({
  firstName: 'Jermaine',
  lastName: 'Cole',
  LocationId: 2
}).save();

Models.User.build({
  firstName: 'Kanye',
  lastName: 'West',
  LocationId: 3
}).save();


// Generate Hosts
Models.Host.build({
  firstName: 'Alfredo',
  lastName: 'Linguini',
  LocationId: 4
}).save();

Models.Host.build({
  firstName: 'Emeril',
  lastName: 'Lagasse',
  LocationId: 5
}).save();

Models.Host.build({
  firstName: 'Bobby',
  lastName: 'Flay',
  LocationId: 6
}).save();


// Generate Reviews
Models.Review.build({
  comment: 'The food was great!',
  rating: 5,
  reviewType: 'User',
  UserId: 1,
  HostId: 2
}).save();

Models.Review.build({
  comment: 'Really nice diner',
  rating: 4,
  reviewType: 'Host',
  UserId: 2,
  HostId: 3
}).save();

Models.Review.build({
  comment: 'Meh, it was so-so...',
  rating: 2,
  reviewType: 'User',
  UserId: 3,
  HostId: 1
}).save();


// Generate Events
Models.Event.build({
  startTime: new Date(2017, 1, 8, 17),
  endTime: new Date(2017, 1, 9, 19),
  cuisine: 'Mexican',
  maxSeats: 8,
  price: '$$$',
  HostId: 2
}).save();

Models.Event.build({
  startTime: new Date(2017, 1, 13, 18),
  endTime: new Date(2017, 1, 13, 20),
  cuisine: 'Ethiopian',
  maxSeats: 10,
  price: '$',
  HostId: 1
}).save();

Models.Event.build({
  startTime: new Date(2017, 1, 16, 19),
  endTime: new Date(2017, 1, 16, 21),
  cuisine: 'Japanese',
  maxSeats: 6,
  price: '$$',
  HostId: 3
}).save();


