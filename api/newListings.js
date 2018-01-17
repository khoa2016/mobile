const homes = [
  {
    id: 1,
    picture: null,
    cost: 49999,
    numRooms: 5,
    numBaths: 3,
    size: 2208,
    street: '3483 Gila Dr.',
    city: 'San Jose',
    state: 'CA',
    openhouse: {
      date: 'Jan 7, 2018',
      time: '1:00pm'
    }
  },
  {
    id: 2,
    picture: null,
    cost: 1959999,
    numRooms: 3,
    numBaths: 1,
    size: 1800,
    street: '1234 Scott Lane',
    city: 'San Jose',
    state: 'CA',
    openhouse: {
      date: 'Jan 7, 2018',
      time: '1:00pm'
    }
  },
  {
    id: 3,
    picture: null,
    cost: 859999,
    numRooms: 3,
    numBaths: 1,
    size: 1800,
    street: '1234 Scott Lane',
    city: 'San Jose',
    state: 'CA',
    openhouse: {
      date: 'Jan 7, 2018',
      time: '1:00pm'
    }
  },
  {
    id: 4,
    picture: null,
    cost: 862000,
    numRooms: 3,
    numBaths: 1,
    size: 1800,
    street: '1234 Scott Lane',
    city: 'San Jose',
    state: 'CA',
    openhouse: {
      date: 'Jan 7, 2018',
      time: '1:00pm'
    }
  },
  {
    id: 5,
    picture: null,
    cost: 799999,
    numRooms: 3,
    numBaths: 1,
    size: 1800,
    street: '1234 Scott Lane',
    city: 'San Jose',
    state: 'CA',
    openhouse: {
      date: 'Jan 7, 2018',
      time: '1:00pm'
    }
  }
];

function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export default () => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     return resolve(homes);
  //   }, 1000);
  // });
  return fetch('http://localhost:3000/homes')
    .then(statusHelper)
    .then((response) => {
      console.debug('In api.newListings: (1) response from homes API = ');
      console.debug(response);
      return response.json();
    })
    .then((data) => {
      console.debug('In api.newListings: (2) response from homes = ');
      console.debug(data.results);
      return data.results;
    })
}
