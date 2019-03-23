/**
 * @File: 数据结构之优先队列
 * @Author: whbxyr
 * @Email: raywhbxyr@163.com
 * @Date: 2019-03-23 17:43:03
 **/

const Queue = require('./Queue.js')

// 最小优先队列
class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue extends Queue {
  constructor() {
    super()
  }

  // 重载入队列方法
  enqueue(element, priority) {
    const items = this.items
    let queueElement = new QueueElement(element, priority)

    if (this.isEmpty()) {
      items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        } 
      } 
      if (!added) {
        items.push(queueElement)
      }
    }
  }
}

module.exports = PriorityQueue
