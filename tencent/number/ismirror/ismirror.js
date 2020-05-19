// 判断正整数是否是对称数，如3， 121， 12321。 不能把整数转为字符串来判断。
// 返回 1：对称； 0： 不对称

// 思路：将原数进行翻转，判断是否相等
function ismirror(value) {
  if (value < 0) return 0

  let reverse = 0, res = value
  while(value > 0) {
    // 取余，取个位数的值
    reverse = reverse * 10 + (value % 10)
    // 取商，取整
    value = Math.floor(value / 10)
  }

  return reverse == res ? 1 : 0
}

module.exports.ismirror = ismirror