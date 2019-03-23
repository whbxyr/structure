/**
 * @File: 数据结构之栈
 * @Author: whbxyr
 * @Email: raywhbxyr@163.com
 * @Date: 2019-03-23 16:22:44
 **/

export default class Stack {
  constructor() {
    this.items = []
  }

  // 入栈
  push(element) {
    this.items.push(element)
  }

  // 出栈
  pop() {
    return this.items.pop()
  }

  // 返回栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }

  // 判空
  isEmpty() {
    return this.items.length === 0
  }

  // 获取栈内元素总个数
  size() {
    return this.items.length
  }

  // 清空
  clear() {
    this.items.length = 0
  }

  // 纯字符串打印栈
  print() {
    console.log(this.items.toString())
  }
}
