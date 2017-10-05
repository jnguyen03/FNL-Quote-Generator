var quotes = ["6am sharp means quarter to 6.",
  "Well, you're gonna win, or you're gonna lose. Either way, the sun's gonna come up the next morning.",
  "Success is not a goal, it's a byproduct.",
  "Clear eyes, full hearts, can't lose.",
  "Texas forever.",
  "I said you need to strive to be better than everyone else. I didn't say you needed to be better than everyone else. But you gotta try. That's what character is: It's in the try.",
  "You listen to people that love you and you listen to people that you trust. Most of all, you listen to yourself.",
  "You give 110 percent all the time, not just when you feel like it.",
  "Champions don't give up. Champions don't complain. Champions give 200 percent. You're not champions until you've earned it.",
  "If you're wondering if a boy's thinking about you, he's not. He's thinking about sex, or he's hungry. Those are the only two options."
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteBox").innerHTML = quotes[randomNumber];
}
