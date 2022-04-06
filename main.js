console.log('linked')

let profileDiv = document.querySelector('#profile')


fetch('https://api.github.com/users/rlconley', {
    method: 'GET',
    headers: {},
})
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let nameDiv = document.createElement('p')
        nameDiv.classList.add('name')
        nameDiv.innerText = data.name
        profileDiv.appendChild(nameDiv)
    })







