// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

fetch('https://api.magicthegathering.io/v1/cards')
.then(result => result.json())
.then((res) => {
  createCards(res.cards);
})
.catch(err => console.log(err))

function cardElement(name, id, image) {
  var placeholder = "https://via.placeholder.com/223x310"
  if (image === undefined) {
    image = placeholder
  }
  return `
  <div class="col-sm-4">
  <div class="card-container">
  <h4>${name}</h4>
  <img src="${image}" width="100%">
  <a href="card-specific.html?id=${id}" class="btn btn-success">View More</a>
  </div>
  </div>`
}

var cardsContainer = document.querySelector("#cards")

function createCards(cards) {
  cards.forEach(function(card) {
    var name = card.name
    var id = card.id
    var image = card.imageUrl

    var html = cardElement(name, id, image)
    cardsContainer.innerHTML = cardsContainer.innerHTML + html
  });
}

document.getElementById('searchButton').addEventListener('click', function(e){
  cardsContainer.innerHTML = cards.innerHTML = "";
  var searchQuery = document.querySelector('#search').value.toUpperCase();

  fetch('https://api.magicthegathering.io/v1/cards')
  .then(result => result.json())
  .then(function(result) {
    var cardArr = result.cards.filter(function (card) {
      return card.name.toUpperCase().indexOf(searchQuery) > -1;
    });

    createCards(cardArr);
  })
})
