/**
 * @File: 数据结构之队列
 * @Author: whbxyr
 * @Email: raywhbxyr@163.com
 * @Date: 2019-03-23 16:48:01
 **/

export default class Queue {
  constructor() {
    this.items = []
  }

  // 向队尾添加新的元素
  enqueue(elements) {
    // 若为数组则表示插入多个新元素
    if (Array.isArray(elements)) {
      this.items.push(...elements)
    } else {
      // 只插入一个元素
      this.items.push(elements)
    }
  }

  // 移除队列的第一项并返回该项
  dequeue() {
    return this.items.shift()
  }

  // 返回队列的第一项
  front() {
    return this.items[0]
  }

  // 判空
  isEmpty() {
    return this.items.length === 0
  }

  // 清空
  clear() {
    this.items.length = 0
  }

  // 获取大小
  size() {
    return this.items.length
  }

  // 纯字符串打印队列
  print() {
    console.log(this.items.toString())
  }
}
