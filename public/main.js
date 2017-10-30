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

typeahead()

// match.splice(0, match.length)
// for (var i = 0; i < carMakes.length; i++) {
//   for (var j = 0; j < $input.value.length; j++) {
//     if ($input.value[j].toLowerCase() === carMakes[i].make[j].toLowerCase() && $input.value[0].toLowerCase() === carMakes[i].make[0].toLowerCase()) {
//       match.push(carMakes[i].make)
//     }
//   }
// }
// let newMatch = Array.from(new Set(match))
// console.log(newMatch)
