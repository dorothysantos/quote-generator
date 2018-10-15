var quotes = [
      'Opsoclonus-Myoclonus Syndrome: when your body attacks your brain', 'Scleroderma: when your skin and organs slowly harden and you begin to resemble a human statue', 'Leprosy: your hands and feet go numb and eventually fall off', 'Akinetic Mutism: when you spend the rest of your days unspeaking and wide awake, but unable to move', 'Fibrodysplasia Ossificans Progressiva: when your muscles turn to bone', 'Progeria: also known as Werner Syndrom / when you look 30-40 years older than you actually are','Rheumatic Chorea: when you lose control of your own body movements'
      ]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
