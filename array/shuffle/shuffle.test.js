const shuffle = require('./shuffle.js')

// 生成从1-52的数组
let cards = []
for (let i = 0; i < 52; i++) {
  cards.push(i)
}

let result = shuffle.shuffleArray(cards, 52)

console.log(cards)
console.log(result, result.length)
