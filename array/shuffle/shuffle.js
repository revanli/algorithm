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

exports.shuffleArray = shuffleArray