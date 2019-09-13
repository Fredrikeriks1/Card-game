// refer to question 2 before development starts for scope document
// get URL query string

// Variable for the id
var id = getQueryStringValue("id");
fetch(`https://api.magicthegathering.io/v1/cards/${id}`)
  .then(result => result.json())
  .then((res) => {
  aboutCards(res);
})
.catch(err => console.log(err))


function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function cardSpecific(name, image, text, rarity, colors) {
  var placeholder = "https://via.placeholder.com/223x310"
  if (image === undefined) {
    image = placeholder
  }
  return `
    <div class="row">
        <div class="col-sm-3" id="cardImage">
          <img src="${image}" width="100%">
        </div>
        <div class="col-sm-9" id="cardDetails">
          <h2>${name}</h2>
            <div><b>About:  </b>${text}.
            </div>
            <div><b>Rarity: </b>${rarity}</div>
            <div><b>Color: </b>${colors}
          </div>
      </div>
</div>`
}

function aboutCards(result) {
  var aboutContainer = document.querySelector(".container")

  var cardObject = result.card;

  var name = result.card.name
  var image = result.card.imageUrl
  var text = result.card.text
  var rarity = result.card.rarity
  var color = result.card.colors

  var cardHtml = cardSpecific(name, image, text, rarity, color)
  aboutContainer.innerHTML = cardHtml
}
