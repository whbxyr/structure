/**
 * @File: 数据结构之双向链表
 * @Author: xuyuanrui
 * @Email: raywhbxyr@163.com
 * @Date: 2019-04-15 23:17:20
 **/

// 结点数据结构
class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  length = 0
  head = null
  tail = null

  insert(pos, element) {
    if (pos > -1 && pos < this.length) {
      let current = this.head
      let node = new Node(element)
      if (pos === 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (pos === this.length) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        let prev = current, index = 0
        while (index++ < pos) {
          prev = current
          current = current.next
        }
        prev.next = node
        node.prev = prev
        node.next = current
        current.prev = node
      }
      this.length++
      return true
    }
    return false
  }

  removeAt(pos) {
    if (pos > -1 && pos < this.length) {
      let current = this.head
      if (pos === 0) {
        this.head = current.next
        if (this.length === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (pos === this.length - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        let index = 0, prev = current
        while (index++ < pos) {
          prev = current
          current = current.next
        }
        prev.next = current.next
        current.next.prev = prev
      }
      this.length--
      return current.element
    }
    return null
  }
}
