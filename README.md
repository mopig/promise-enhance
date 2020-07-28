# promise-enhance

## Usage

```javascript
const p = new ConPromise(2)
p.promise(res => setTimeout(res, 1000, 1)).then(v => console.log(v))
p.promise(res => setTimeout(res, 400, 2)).then(v => console.log(v))
p.promise(res => setTimeout(res, 300, 3)).then(v => console.log(v))
p.promise(res => setTimeout(res, 400, 4)).then(v => console.log(v))
p.promise(res => setTimeout(res, 200, 5)).then(v => console.log(v))
p.promise(res => setTimeout(res, 50, 6)).then(v => console.log(v))

// 预期输出 => 2, 3, 1, 4, 6, 5
```
