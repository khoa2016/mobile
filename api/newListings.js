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

export default (page = 1) => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     return resolve(homes);
  //   }, 1000);
  // });
  // home 192.168.1.7
  // work 10.0.10.154
  console.debug(`In api.newListings: page # (${page})`);
  return fetch(`http://192.168.1.7:3000/homes?_page=${page}&_limit=2`)
    .then(statusHelper)
    .then(response => {
      console.debug(`In api.newListings: page # (${page}), response from API = `);
      console.debug(response);
      console.debug(response.headers);
      const totalCount = response.headers.get('x-total-count');
      console.debug(`total count = ${totalCount}`);
      return {totalCount, data: response.json()};
    })
    .catch(error => Error)
    .then(data => data)
}
