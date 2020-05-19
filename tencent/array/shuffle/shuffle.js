// 洗牌算法：对52张牌洗牌，要求尽量洗乱，而且原牌不能在原位置上重复
// void ShuffleArray(int array[], int len)

// 链接：https://bost.ocks.org/mike/shuffle/
// 链接：https://github.com/ccforward/cc/issues/44

/**
 * 第一种思路：
 * 1、从原数据组中产生一个[0, n]之间的随机数
 * 2、把第 random 个元素取出到新数组中
 * 3、删除原数组中的第 random 个元素
 * 4、重复2-3步直到所有元素取完
 * 5、返回一个打乱的数组
 * splice 删除原位置上的数，需要把之后的元素往前移，时间复杂度为 o(n^2)
 */
const shuffleArray = (array, len) => {
  let result = []

  while(len > 0) {
    let random = Math.floor(Math.random() * len)

    // 原牌不能在原位置上重复
    if (random !== result.length) {
      result.push(array[random])
      // 不删除会产生重复的数字
      array.splice(random, 1)
      len--
    }
  }

  return result
}

/**
 * 第二种思路：不用辅助空间，将打乱后的元素放在原数组的最后，
 * 未打乱的放在原数组的最前。
 * 每次从未处理的数组中随机取一个元素，然后把该元素放到数组的尾部，即数组的尾部放的就是已经处理过的元素，这是一种原地打乱的算法，每个元素随机概率也相等
 * 时间复杂度：O(n), 空间复杂度 O(1)
 */
const shuffleArray2 = (array, len) => {
  var temp, i
  
  // while there remain elements to shuffle
  while(len) {

    // Pick a remaining element...
    i = Math.floor(Math.random() * len--)

    // And swap it with the current element
    temp = array[len]
    array[len] = array[i]
    array[i] = temp
  }

  return array
}

exports.shuffleArray = shuffleArray
exports.shuffleArray2 = shuffleArray2