/**
 * @File: 使用栈实现进制转换
 * @Author: whbxyr
 * @Email: raywhbxyr@163.com
 * @Date: 2019-03-23 17:26:04
 **/

const Stack = require('../Stack.js')

const baseConverter = (decNumber, base) => {
  let remStack = new Stack(), rem, baseString = ''
  const digits = '0123456789ABCDEF'

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}

console.log(baseConverter(100, 16))
