/**
 * @File: 数据结构之集合
 * @Author: whbxyr
 * @Email: raywhbxyr@163.com
 * @Date: 2019-05-03 23:35:36
 **/

class Set {
  constructor() {
    this.items = {}
  }

  // 查询
  has(value) {
    return this.items.hasOwnProperty(value)
  }

  // 新增
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }

  // 移除
  remove(value) {
    if (this.has(value)) {
      delete this.items[value]
      return true
    } 
    return false
  }

  // 清空
  clear() {
    this.items = {}
  }

  // 获取大小
  size() {
    return Object.keys(this.items).length
  }

  // 获取所有的值
  values() { 
    // return Object.keys(this.items)
    const items = this.items
    let values = []
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        values.push(items[key])
      }
    }
    return values
  }
}

module.exports = Set
