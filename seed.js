const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost/library', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const typeahead = db.collection('typeahead')
  typeahead
    .deleteMany({})
    .then(() => {
      typeahead.insertMany([
        {
          make: 'Acura'
        },
        {
          make: 'Alfa Romeo'
        },
        {
          make: 'Aston Martin'
        },
        {
          make: 'Audi'
        },
        {
          make: 'Bentley'
        },
        {
          make: 'BMW'
        },
        {
          make: 'Bugatti'
        },
        {
          make: 'Buick'
        },
        {
          make: 'Cadillac'
        },
        {
          make: 'Chevrolet'
        },
        {
          make: 'Chrysler'
        },
        {
          make: 'Dodge'
        },
        {
          make: 'Ferrari'
        },
        {
          make: 'Fiat'
        },
        {
          make: 'Fisker'
        },
        {
          make: 'Ford'
        },
        {
          make: 'GMC'
        },
        {
          make: 'Honda'
        },
        {
          make: 'Hyundai'
        },
        {
          make: 'Infiniti'
        },
        {
          make: 'Jaguar'
        },
        {
          make: 'Jeep'
        },
        {
          make: 'Kia'
        },
        {
          make: 'Lamborghini'
        },
        {
          make: 'Land Rover'
        },
        {
          make: 'Lexus'
        },
        {
          make: 'Lincoln'
        },
        {
          make: 'Lotus'
        },
        {
          make: 'Maserati'
        },
        {
          make: 'Mazda'
        },
        {
          make: 'McLaren'
        },
        {
          make: 'Mercedes-Benz'
        },
        {
          make: 'Mini'
        },
        {
          make: 'Nissan'
        },
        {
          make: 'Porsche'
        },
        {
          make: 'Ram'
        },
        {
          make: 'Rolls-Royce'
        },
        {
          make: 'Scion'
        },
        {
          make: 'Subaru'
        },
        {
          make: 'Tesla'
        },
        {
          make: 'Toyota'
        },
        {
          make: 'Volkswagen'
        },
        {
          make: 'Volvo'
        }
      ])
    })
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
    .then(() => console.log('Car makes are seeded!'))
    .then(() => db.close())
})
