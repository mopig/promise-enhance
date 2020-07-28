export default class ConPromise {
  constructor(max = 5) {
    this.max = max
    this.taskList = []
    this.count = 0
  }
  doNext() {
    if (this.count < this.max && this.taskList.length) {
      this.count++
      this.taskList.shift()()
    }
  }
  promise(executor) {
    return new Promise((res, rej) => {
      let task = () => new Promise(executor).then(res, rej).finally(() => {
        this.count--
        this.doNext()
      })
      this.taskList.push(task)
      this.doNext()
    })
  }
}
