// write your code here
const baseUrl = 'http://localhost:3000'
const ramenUrl = baseUrl + '/ramens'
const ramenIdUrl = ramenUrl + '/:id'

const ramenMenuDiv = document.getElementById('ramen-menu')
const ramenComment = document.getElementById('comment-display')
const ramenRating = document.getElementById('rating-display')
const ramenForm = document.getElementById('new-ramen')



function fetchRamen() {
    fetch(ramenUrl)
        .then(r => r.json())
        .then(ramenData => renderAllRamen(ramenData))
}
fetchRamen()

function renderAllRamen( ramen ) {
    ramen.forEach(element => renderIndividualRamen(element));
}

function renderIndividualRamen(ramen) {
    let menuImg = document.createElement('img')
    menuImg.src = ramen.image
    ramenMenuDiv.appendChild(menuImg)

    menuImg.addEventListener('click', () => {
        const mainImage = document.getElementById('main-img')
        mainImage.src = ramen.image

        const ramenName = document.getElementById('ramen-name')
        ramenName.innerHTML = ramen.name

        const detailRestaurant = document.getElementById('detail-restaurant')
        detailRestaurant.innerHTML = ramen.restaurant
        
        const rated = ramen.rating
        ramenRating.innerText = rated
        
        const comment = ramen.comment
        ramenComment.innerText = comment
    })
}

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let newRamen = {
        "name": e.target.name.value,
        "restaurant": e.target.restaurant.value,
        "image": e.target.image.value,
        "rating": e.target.rating.value,
        "comment": e.target.comment.value
    }
    renderIndividualRamen(newRamen)
    console.log(newRamen.rating)
})