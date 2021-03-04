let baseURL = 'https://deckofcardsapi.com/api/deck'


//1
$.getJSON(`${baseURL}/new/draw/`).then(response => {
    console.log(response)
    let { suit, value } = response.cards[0];
    console.log(`${value}, of ${suit}`)
})

//2
let cardOne
$.getJSON(`${baseURL}/new/draw/`).then(response => {
    cardOne = response.cards[0]
    console.log(cardOne)
    let deckId = response.deck_id;
    console.log(deckId)
    return $.getJSON(`${baseURL}/${deckId}/draw/`)
})
.then(res => {
    let cardTwo = res.cards[0];
    [cardOne, cardTwo].forEach(function(card) {
        console.log(
            `${card.value} of ${card.suit}`
        )
    })
})

//3

let deckId = null;
let $btn = $('button');
let $cardArea = $('#game-board');

$.getJSON(`${baseURL}/new/shuffle/`).then(resp => {
  deckId = resp.deck_id;
  $btn.show();
});

$btn.on('click', function() {
  $.getJSON(`${baseURL}/${deckId}/draw/`).then(resp => {
    let cardImg = resp.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    $cardArea.append(
      $('<img>', {
        src: cardImg,
        css: {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        }
      })
    );
    if (resp.remaining === 0) $btn.remove();
  });
});