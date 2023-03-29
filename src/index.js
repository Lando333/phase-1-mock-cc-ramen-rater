// write your code here
const baseUrl = 'http://localhost:3000'
const ramenUrl = baseUrl + '/ramens'
const ramenIdUrl = ramenUrl + '/:id'

const ramenMenuDiv = document.getElementById('ramen-menu')
const ramenComment = document.getElementById('comment-display')
const ramenRating = document.getElementById('rating-display')
const ramenForm = document.getElementById('new-ramen')

document.addEventListener('DOMContentLoaded', 
    fetch(ramenUrl)
    .then(r => r.json())
    .then(ramenData => ramenMenu(ramenData))
)

function ramenMenu(menu) {
    for (let i = 0; i < menu.length; i++){

        let menuImg = document.createElement('img')
        menuImg.src = menu[i].image
        ramenMenuDiv.appendChild(menuImg)

        menuImg.addEventListener('click', () => {
            const rated = menu[i].rating
            ramenRating.innerText = rated
            const comment = menu[i].comment
            ramenComment.innerText = comment
        })
    }
}

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let newRamen = {
        "name": e.target.name.value,
        "restaurant": e.target.restaurant.value,
        "img": e.target.image.value,
        "rate": e.target.rating.value,
        "comment": e.target.comment.value
    }

    let newMenuImg = document.createElement('img')
    newMenuImg.src = newRamen.img
    ramenMenuDiv.appendChild(newMenuImg)
})