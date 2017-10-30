let carMakes = []

const getMakes = () => {
  fetch('http://localhost:3000/makes')
    .then(res => res.json())
    .then(makes => {
      makes
        .forEach(make => carMakes.push(make))
    })
}

getMakes()

const $input = document.querySelector('#typeahead')

let match = []

const typeahead = () => {
  match.splice(0, match.length)
  for (var i = 0; i < carMakes.length; i++) {
    if (carMakes[i].make.toLowerCase().startsWith($input.value)) {
      match.push(carMakes[i].make)
    }
  }
  console.log(match)
}
