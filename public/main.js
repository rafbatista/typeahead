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
const $searchBox = document.querySelector('.search-box')

let matches = []

const typeahead = () => {
  matches.splice(0, matches.length)
  for (var i = 0; i < carMakes.length; i++) {
    if (carMakes[i].make.toLowerCase().startsWith($input.value.toLowerCase())) {
      matches.push(carMakes[i].make)
    }
  }
}

const renderSearchItems = (matches) => {
  return matches.map((match) => {
    const $searchItem = document.createElement('div')
    $searchItem.setAttribute('class', 'search-item')
    $searchItem.setAttribute('data-name', match)
    $searchItem.textContent = match
    return $searchItem
  })
}

const appendMatches = (matches) => {
  return renderSearchItems(matches).reduce((parent, child) => {
    parent.appendChild(child)
    return parent
  }, $searchBox)
}

$input.addEventListener('input', (event) => {
  $searchBox.innerHTML = ''
  if (event.target.value !== '') {
    typeahead()
    appendMatches(matches)
  }
})

$searchBox.addEventListener('click', (event) => {
  if (event.target.className === 'search-item') {
    $input.value = event.target.getAttribute('data-name')
    $searchBox.innerHTML = ''
  }
})
