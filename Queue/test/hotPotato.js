/**
 * @File: 使用队列模拟击鼓传花游戏
 * @Author: whbxyr
 * @Email: raywhbxyr@163.com
 * @Date: 2019-03-23 22:39:07
 **/

const Queue = require('../Queue.js')

const hotPotato = (nameList, num) => {
  const queue = new Queue()

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + ' 在击鼓传花游戏中被淘汰。')
  }

  return queue.dequeue()
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 8)
console.log('胜利者：' + winner)
