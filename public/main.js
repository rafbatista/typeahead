const getMakes = () => {
  fetch('http://localhost:3000/makes')
    .then(res => res.json())
}
