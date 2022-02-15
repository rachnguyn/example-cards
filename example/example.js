
/* global Deck */

var prefix = Deck.prefix

var transform = prefix('transform')

var translate = Deck.translate

// var $leftcontainer = document.getElementById('leftcontainer')
var $topbar = document.getElementById('topbar')
var $newcard = document.getElementById('newcard')

var $sort = document.createElement('button')
var $shuffle = document.createElement('button')
var $bysuit = document.createElement('button')
var $fan = document.createElement('button')
var $poker = document.createElement('button')
var $flip = document.createElement('button')

// $shuffle.textContent = 'Shuffle'
// $sort.textContent = 'Sort'
// $bysuit.textContent = 'By suit'
// $fan.textContent = 'Fan'
// $poker.textContent = 'Poker'
// $flip.textContent = 'Flip'

// $topbar.appendChild($flip)
// $topbar.appendChild($shuffle)
// $topbar.appendChild($bysuit)
// $topbar.appendChild($fan)
// $topbar.appendChild($poker)
// $topbar.appendChild($sort)

// var deck = Deck()

// deck.mount($leftcontainer)

var $leftdeck = document.getElementById('leftdeck')
var $rightdeck = document.getElementById('rightdeck')
var $newcard = document.getElementById('newcard')

// create deck
var leftdeck = Deck()

// get all left deck cards
var leftcards = leftdeck.cards

// Add it to an html container
leftdeck.mount($leftdeck)

// for (var i = 0; i < leftcards.length; i++){
//     leftcards[i].enableFlipping();
// }


leftdeck.cards.forEach(function (card, i) {
    card.enableFlipping();
    card.enableDragging();
})

// create deck
var rightdeck = Deck(true)

// get all left deck cards
var rightcards = rightdeck.cards;

// Add it to an html container
rightdeck.mount($rightdeck)

rightdeck.cards.forEach(function (card, i) {
  card.enableFlipping();
  card.enableDragging();
})

leftdeck.shuffle()
leftdeck.shuffle()
leftdeck.shuffle()

rightdeck.shuffle()
rightdeck.shuffle()
rightdeck.shuffle()

// secret message..

setTimeout(function () {
  printMessage('Shuffling...')
}, 0)

function printMessage (text) {
  var animationFrames = Deck.animationFrames
  var ease = Deck.ease
  var $message = document.getElementById('leftcaption')
  $message.classList.add('message')
  $message.textContent = text

  document.body.appendChild($message)

  $message.style[transform] = translate(window.innerWidth + 'px', 0)

  var diffX = window.innerWidth

  animationFrames(0, 400)
    .progress(function (t) {
      t = ease.cubicInOut(t)
      $message.style[transform] = translate((diffX - diffX * t) + 'px', 0)
    })

  animationFrames(800, 1000)
    .start(function () {
      diffX = window.innerWidth
    })
    .progress(function (t) {
      t = ease.cubicInOut(t)
      $message.style[transform] = translate((-diffX * t) + 'px', 0)
    })
    .end(function () {
      document.body.removeChild($message)
    })
}