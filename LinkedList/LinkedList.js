/**
 * @File: 数据结构之链表
 * @Author: xuyuanrui
 * @Email: raywhbxyr@163.com
 * @Date: 2019-03-26 13:29:43
 **/

// 结点数据结构
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  length = 0
  head = null

  append(element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      let current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  removeAt(pos) {
    if (pos > -1 && pos < this.length) {
      let current = this.head
      if (pos === 0) {
        this.head = current.next
      } else {
        let index = 0, prev = current
        while (index++ < pos) {
          prev = current
          current = current.next
        }
        prev.next = current.next
      }
      this.length--
      return current.element
    }
    return null
  }

  insert(pos, element) {
    if (pos > -1 && pos < this.length) {
      let current = this.head
      let node = new Node(element)
      if (pos === 0) {
        node.next = current
        this.head = node
      } else {
        let prev = current, index = 0
        while (index++ < pos) {
          prev = current
          current = current.next
        }
        prev.next = node
        node.next = current
      }
      this.length++
      return true
    }
    return false
  }

  indexOf(element) {
    let current = this.head, index = -1
    while (current) {
      index++
      if (current.element === element) {
        return index
      }
      current = current.next
    }
    return -1
  }

  remove(element) {
    const pos = this.indexOf(element)
    return this.removeAt(pos)
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  getHead() {
    return this.head
  }
}

module.exports = LinkedList
